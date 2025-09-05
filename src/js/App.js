import * as THREE from 'three'
import ReativeParticles from './entities/ReactiveParticles'
import * as dat from 'dat.gui'
import BPMManager from './managers/BPMManager'
import AudioManager from './managers/AudioManager'
import HandTrackingManager from './managers/HandTrackingManager'
import FileUploadManager from './managers/FileUploadManager'
import WebcamPositionManager from './managers/WebcamPositionManager'

export default class App {
  //THREE objects
  static holder = null
  static gui = null

  //Managers
  static audioManager = null
  static bpmManager = null
  static handTrackingManager = null
  static fileUploadManager = null
  static webcamPositionManager = null

  constructor() {
    this.onClickBinder = () => this.init()
    document.addEventListener('click', this.onClickBinder)
    
    // Recording variables
    this.mediaRecorder = null
    this.recordedChunks = []
    this.isRecording = false
  }

  init() {
    document.removeEventListener('click', this.onClickBinder)

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })

    this.renderer.setClearColor(0x000000, 0)
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.autoClear = false
    document.querySelector('.content').appendChild(this.renderer.domElement)

    this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 10000)
    this.camera.position.z = 12
    this.camera.frustumCulled = false

    this.scene = new THREE.Scene()
    this.scene.add(this.camera)

    App.holder = new THREE.Object3D()
    App.holder.name = 'holder'
    this.scene.add(App.holder)
    App.holder.sortObjects = false

    this.createManagers()

    this.resize()
    window.addEventListener('resize', () => this.resize())
  }

  async createManagers() {
    App.audioManager = new AudioManager()
    await App.audioManager.loadAudioBuffer()

    // Initialize file upload manager
    App.fileUploadManager = new FileUploadManager()
    App.fileUploadManager.init()
    
    // Make it globally accessible for onclick handlers
    window.fileUploadManager = App.fileUploadManager
    
    // Listen for file selection events
    App.fileUploadManager.addEventListener('fileSelected', (event) => {
      this.loadUserAudio(event.file)
    })

    App.bpmManager = new BPMManager()
    App.bpmManager.addEventListener('beat', () => {
      this.particles.onBPMBeat()
    })
    await App.bpmManager.detectBPM(App.audioManager.audio.buffer)

    document.querySelector('.user_interaction').remove()

    // Initialize hand tracking manager
    App.handTrackingManager = new HandTrackingManager()
    await App.handTrackingManager.init()
    
    // Initialize webcam position manager
    App.webcamPositionManager = new WebcamPositionManager()
    App.webcamPositionManager.init()
    
    // Add hand tracking event listeners
    App.handTrackingManager.addEventListener('conductorGesture', (event) => {
      this.onConductorGesture(event)
    })
    
    App.handTrackingManager.addEventListener('zoomGesture', (event) => {
      this.onZoomGesture(event)
    })
    
    // Add webcam position manager event listeners if needed
    // App.webcamPositionManager.addEventListener('positionChanged', (event) => {
    //   console.log('Webcam position changed:', event)
    // })
    App.audioManager.play()

    this.particles = new ReativeParticles()
    this.particles.init()

    this.initBottomMenu()
    this.initTopMenu()

    this.update()
  }

  async loadUserAudio(file) {
    try {
      // Stop current audio
      if (App.audioManager.isPlaying) {
        App.audioManager.pause()
      }

      // Check if this is a file from localStorage (metadata only)
      if (!file.url && !(file instanceof File)) {
        throw new Error('Audio data not available. Please re-upload the file.')
      }

      // Load the new audio file
      const audioListener = new THREE.AudioListener()
      const newAudio = new THREE.Audio(audioListener)
      const audioLoader = new THREE.AudioLoader()

      // Convert file to audio buffer
      const arrayBuffer = await file.url ? 
        fetch(file.url).then(r => r.arrayBuffer()) : 
        new Promise((resolve) => {
          const reader = new FileReader()
          reader.onload = (e) => resolve(e.target.result)
          reader.readAsArrayBuffer(file)
        })

      const audioBuffer = await App.audioManager.audioContext.decodeAudioData(arrayBuffer)
      
      // Update audio manager with new file
      App.audioManager.audio.setBuffer(audioBuffer)
      App.audioManager.audio.setLoop(true)
      App.audioManager.audio.setVolume(0.5)
      
      // Re-detect BPM for the new track
      await App.bpmManager.detectBPM(audioBuffer)
      
      // Start playing the new track
      App.audioManager.play()
      
      console.log(`Now playing: ${file.name}`)
      
    } catch (error) {
      console.error('Failed to load user audio:', error)
      App.fileUploadManager.showError('Failed to load audio file. Please try again.')
    }
  }

  initTopMenu() {
    const topMenu = document.getElementById('topMenu')
    const webcamBtn = document.getElementById('webcamBtn')
    
    topMenu.style.display = 'block'
    
    webcamBtn.addEventListener('click', () => {
      this.toggleWebcam()
    })
  }

  async toggleWebcam() {
    const webcamBtn = document.getElementById('webcamBtn')
    const span = webcamBtn.querySelector('span')
    
    if (!App.handTrackingManager.isHandTrackingActive()) {
      // Start webcam
      webcamBtn.disabled = true
      span.textContent = 'Starting...'
      
      try {
        await App.handTrackingManager.start()
        webcamBtn.classList.add('active')
        span.textContent = 'Webcam Active'
        
        // Also start the webcam preview
        if (App.webcamPositionManager) {
          await App.webcamPositionManager.startWebcam()
        }
        
        console.log('Hand tracking activated')
      } catch (error) {
        console.error('Failed to start webcam:', error)
        span.textContent = 'Failed to Start'
        setTimeout(() => {
          span.textContent = 'Activate Webcam'
        }, 2000)
      }
      
      webcamBtn.disabled = false
    } else {
      // Stop webcam
      App.handTrackingManager.stop()
      webcamBtn.classList.remove('active')
      span.textContent = 'Activate Webcam'
      
      // Also stop the webcam preview
      if (App.webcamPositionManager) {
        App.webcamPositionManager.stopWebcam()
      }
      
      console.log('Hand tracking deactivated')
    }
  }

  onConductorGesture(event) {
    if (this.particles && this.particles.material) {
      // Map conductor intensity to amplitude and offset gain
      const intensity = Math.min(event.intensity, 2.0) // Cap the intensity
      
      // Increase amplitude based on conductor movement
      const baseAmplitude = App.audioManager?.isPlaying ? 
        0.8 + (App.audioManager.frequencyData.high * 0.2) : 1.0
      
      this.particles.material.uniforms.amplitude.value = baseAmplitude + (intensity * 0.5)
      
      // Add some offset gain for more dramatic effect
      const baseOffsetGain = App.audioManager?.isPlaying ? 
        App.audioManager.frequencyData.mid * 0.6 : 0
      
      this.particles.material.uniforms.offsetGain.value = baseOffsetGain + (intensity * 0.3)
    }
  }

  onZoomGesture(event) {
    if (this.camera) {
      // Map zoom gesture to camera position
      const zoomSpeed = 0.5
      const minZ = 5
      const maxZ = 20
      
      // Calculate new camera position based on gesture
      let newZ = this.camera.position.z
      
      if (event.delta > 0) {
        // Fingers moving apart - zoom in
        newZ -= zoomSpeed
      } else if (event.delta < 0) {
        // Fingers moving together - zoom out
        newZ += zoomSpeed
      }
      
      // Clamp the zoom level
      newZ = Math.max(minZ, Math.min(maxZ, newZ))
      this.camera.position.z = newZ
    }
  }
  initBottomMenu() {
    const bottomMenu = document.getElementById('bottomMenu')
    bottomMenu.style.display = 'block'

    // Toggle functionality
    const handtrackToggle = document.getElementById('handtrackToggle')
    const hideToggle = document.getElementById('hideToggle')
    const topMenu = document.getElementById('topMenu')
    
    // Handtrack toggle
    handtrackToggle.addEventListener('change', (e) => {
      if (App.handTrackingManager) {
        if (e.target.checked) {
          // Enable hand tracking visualization
          App.handTrackingManager.setShowHandTracking(true)
        } else {
          // Disable hand tracking visualization
          App.handTrackingManager.setShowHandTracking(false)
        }
      }
    })
    
    // Hide toggle
    hideToggle.addEventListener('change', (e) => {
      if (e.target.checked) {
        // Hide UI elements
        bottomMenu.classList.add('hidden')
        topMenu.classList.add('hidden')
      } else {
        // Show UI elements
        bottomMenu.classList.remove('hidden')
        topMenu.classList.remove('hidden')
      }
    })

    // Gesture info button
    const gestureInfoBtn = document.getElementById('gestureInfoBtn')
    const gestureSlideout = document.getElementById('gestureSlideout')
    const closeGesture = document.getElementById('closeGesture')
    
    gestureInfoBtn.addEventListener('click', () => {
      gestureSlideout.classList.add('open')
    })
    
    closeGesture.addEventListener('click', () => {
      gestureSlideout.classList.remove('open')
    })
    
    // Close slideout when clicking outside
    gestureSlideout.addEventListener('click', (e) => {
      if (e.target === gestureSlideout) {
        gestureSlideout.classList.remove('open')
      }
    })

    // Color picker functionality for both sliders
    const colorSlider1 = document.getElementById('colorSlider1')
    const colorIndicator1 = document.getElementById('colorIndicator1')
    
    const colorSlider2 = document.getElementById('colorSlider2')
    const colorIndicator2 = document.getElementById('colorIndicator2')

    const updateColor = (hue, indicator, isFirst = true) => {
      const color = new THREE.Color().setHSL(hue / 360, 1, 0.5)
      
      indicator.style.background = '#' + color.getHexString()
      
      // Update particle colors in real-time
      if (this.particles) {
        if (isFirst) {
          this.particles.updateStartColor(color)
        } else {
          this.particles.updateEndColor(color)
        }
      }
    }

    colorSlider1.addEventListener('input', (e) => {
      updateColor(parseInt(e.target.value), colorIndicator1, true)
    })
    
    colorSlider2.addEventListener('input', (e) => {
      updateColor(parseInt(e.target.value), colorIndicator2, false)
    })

    // Hex color input tooltip functionality
    const hexTooltip = document.getElementById('hexTooltip')
    const hexInput = document.getElementById('hexInput')
    const applyHex = document.getElementById('applyHex')
    const cancelHex = document.getElementById('cancelHex')
    let currentColorIndicator = null
    let isFirstColor = true

    const showHexTooltip = (indicator, isFirst) => {
      currentColorIndicator = indicator
      isFirstColor = isFirst
      
      const rect = indicator.getBoundingClientRect()
      hexTooltip.style.left = rect.left + 'px'
      hexTooltip.style.top = (rect.top - hexTooltip.offsetHeight - 10) + 'px'
      hexTooltip.style.display = 'flex'
      
      // Get current color and set as placeholder
      const currentColor = indicator.style.background
      hexInput.value = ''
      hexInput.focus()
    }

    const hideHexTooltip = () => {
      hexTooltip.style.display = 'none'
      currentColorIndicator = null
    }

    const applyHexColor = () => {
      const hexValue = hexInput.value.trim()
      if (hexValue.match(/^#[0-9A-Fa-f]{6}$/)) {
        const color = new THREE.Color(hexValue)
        currentColorIndicator.style.background = hexValue
        
        // Update particle colors
        if (this.particles) {
          if (isFirstColor) {
            this.particles.updateStartColor(color)
          } else {
            this.particles.updateEndColor(color)
          }
        }
        
        // Update slider position to match color
        const hsl = {}
        color.getHSL(hsl)
        const slider = isFirstColor ? colorSlider1 : colorSlider2
        slider.value = Math.round(hsl.h * 360)
        
        hideHexTooltip()
      } else {
        hexInput.style.borderColor = '#ff4444'
        setTimeout(() => {
          hexInput.style.borderColor = 'rgba(255, 255, 255, 0.3)'
        }, 1000)
      }
    }

    // Color indicator click events
    colorIndicator1.addEventListener('click', (e) => {
      e.stopPropagation()
      showHexTooltip(colorIndicator1, true)
    })

    colorIndicator2.addEventListener('click', (e) => {
      e.stopPropagation()
      showHexTooltip(colorIndicator2, false)
    })

    // Hex tooltip events
    applyHex.addEventListener('click', applyHexColor)
    cancelHex.addEventListener('click', hideHexTooltip)
    
    hexInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        applyHexColor()
      } else if (e.key === 'Escape') {
        hideHexTooltip()
      }
    })

    // Close tooltip when clicking outside
    document.addEventListener('click', (e) => {
      if (!hexTooltip.contains(e.target) && !colorIndicator1.contains(e.target) && !colorIndicator2.contains(e.target)) {
        hideHexTooltip()
      }
    })

    // Mode buttons functionality
    const modeButtons = document.querySelectorAll('.mode-btn')
    modeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons
        modeButtons.forEach(b => b.classList.remove('active'))
        // Add active class to clicked button
        btn.classList.add('active')
        
        // Update visualizer mode
        const mode = btn.dataset.mode
        if (this.particles) {
          this.particles.setMode(mode)
        }
      })
    })

    // Initialize with default colors
    updateColor(300, colorIndicator1, true)
    updateColor(180, colorIndicator2, false)

    // Record button functionality
    const recordBtn = document.getElementById('recordBtn')
    recordBtn.addEventListener('click', () => {
      if (this.isRecording) {
        this.stopRecording()
      } else {
        this.startRecording()
      }
    })
  }

  resize() {
    this.width = window.innerWidth
    this.height = window.innerHeight

    this.camera.aspect = this.width / this.height
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(this.width, this.height)
  }

  update() {
    requestAnimationFrame(() => this.update())

    this.particles?.update()
    App.audioManager.update()

    this.renderer.render(this.scene, this.camera)
  }

  startRecording() {
    try {
      // Get canvas stream at 60fps
      const stream = this.renderer.domElement.captureStream(60)
      
      // Initialize MediaRecorder with WebM format
      this.mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'video/webm; codecs=vp8'
      })
      
      // Reset recorded chunks
      this.recordedChunks = []
      
      // Handle data available event
      this.mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          this.recordedChunks.push(event.data)
        }
      }
      
      // Handle stop event
      this.mediaRecorder.onstop = () => {
        const blob = new Blob(this.recordedChunks, { type: 'video/webm' })
        const url = URL.createObjectURL(blob)
        
        // Create download link
        const a = document.createElement('a')
        a.href = url
        a.download = `visualizer-recording-${Date.now()}.webm`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        
        // Clean up
        URL.revokeObjectURL(url)
        this.recordedChunks = []
      }
      
      // Start recording
      this.mediaRecorder.start()
      this.isRecording = true
      this.updateRecordButtonState()
      
      console.log('Recording started')
      
    } catch (error) {
      console.error('Failed to start recording:', error)
      alert('Recording failed. Your browser may not support this feature.')
    }
  }

  stopRecording() {
    if (this.mediaRecorder && this.isRecording) {
      this.mediaRecorder.stop()
      this.isRecording = false
      this.updateRecordButtonState()
      
      console.log('Recording stopped')
    }
  }

  updateRecordButtonState() {
    const recordBtn = document.getElementById('recordBtn')
    const span = recordBtn.querySelector('span')
    
    if (this.isRecording) {
      recordBtn.classList.add('recording')
      span.textContent = 'Recording...'
    } else {
      recordBtn.classList.remove('recording')
      span.textContent = 'Record'
    }
  }
}
