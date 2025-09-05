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
    
    // Mouse tracking variables
    this.isMouseTrackingActive = false
    this.onMouseMoveBinder = (e) => this.onMouseMove(e)
    
    // Full screen webcam background state
    this.isFullScreenWebcamBackgroundActive = false
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
    
    App.handTrackingManager.addEventListener('fingerPaintGesture', (event) => {
      this.onFingerPaintGesture(event)
    })

    
    // Add webcam position manager event listeners if needed
    // App.webcamPositionManager.addEventListener('positionChanged', (event) => {
    //   console.log('Webcam position changed:', event)
    // })
    App.audioManager.play()

    this.particles = new ReativeParticles()
    this.particles.init()

    // Enable mouse tracking by default
    this.enableMouseTracking()

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
    const fullScreenWebcamBtn = document.getElementById('fullScreenWebcamBtn')
    
    topMenu.style.display = 'block'
    
    webcamBtn.addEventListener('click', () => {
      this.toggleWebcam()
    })
    
    fullScreenWebcamBtn.addEventListener('click', () => {
      this.toggleFullScreenWebcamBackground()
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
        
        // Disable mouse tracking when hand tracking is active
        this.disableMouseTracking()
        
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
      
      // Re-enable mouse tracking when hand tracking stops
      this.enableMouseTracking()
      
      // Also stop the webcam preview
      if (App.webcamPositionManager) {
        App.webcamPositionManager.stopWebcam()
      }
      
      console.log('Hand tracking deactivated')
    }
  }

  toggleFullScreenWebcamBackground() {
    const fullScreenWebcamBtn = document.getElementById('fullScreenWebcamBtn')
    const webcamBtn = document.getElementById('webcamBtn')
    
    this.isFullScreenWebcamBackgroundActive = !this.isFullScreenWebcamBackgroundActive
    
    if (this.isFullScreenWebcamBackgroundActive) {
      // Enable full screen webcam background
      fullScreenWebcamBtn.classList.add('active')
      fullScreenWebcamBtn.querySelector('span').textContent = 'Exit Fullscreen'
      
      // Disable hand tracking button
      webcamBtn.disabled = true
      webcamBtn.style.opacity = '0.5'
      
      // Set canvas z-index to appear above webcam
      this.renderer.domElement.style.zIndex = '60'
      
      // Enable full screen background in webcam manager
      if (App.webcamPositionManager) {
        App.webcamPositionManager.toggleFullScreenBackground(true)
      }
      
      console.log('Full screen webcam background enabled')
    } else {
      // Disable full screen webcam background
      fullScreenWebcamBtn.classList.remove('active')
      fullScreenWebcamBtn.querySelector('span').textContent = 'Fullscreen Background'
      
      // Re-enable hand tracking button
      webcamBtn.disabled = false
      webcamBtn.style.opacity = ''
      
      // Reset canvas z-index
      this.renderer.domElement.style.zIndex = ''
      
      // Disable full screen background in webcam manager
      if (App.webcamPositionManager) {
        App.webcamPositionManager.toggleFullScreenBackground(false)
      }
      
      console.log('Full screen webcam background disabled')
    }
  }

  enableMouseTracking() {
    if (!this.isMouseTrackingActive) {
      window.addEventListener('mousemove', this.onMouseMoveBinder)
      this.isMouseTrackingActive = true
      console.log('Mouse tracking enabled')
    }
  }

  disableMouseTracking() {
    if (this.isMouseTrackingActive) {
      window.removeEventListener('mousemove', this.onMouseMoveBinder)
      this.isMouseTrackingActive = false
      console.log('Mouse tracking disabled')
    }
  }

  onMouseMove(event) {
    if (this.particles && this.particles.material) {
      // Convert mouse coordinates to normalized values (0-1)
      const normalizedX = event.clientX / window.innerWidth
      const normalizedY = event.clientY / window.innerHeight
      
      // Update finger position for paint gesture effect
      this.particles.updateFingerPosition(normalizedX, normalizedY)
      
      // Update conductor Y position based on mouse Y
      this.particles.updateConductorY(normalizedY)
    }
  }

  onConductorGesture(event) {
    if (this.particles && this.particles.material) {
      // Update conductorY uniform for the conductor mode
      this.particles.updateConductorY(event.y)

      // Debug logging for conductor mode
      if (this.particles.currentMode === 'conductor') {
        console.log('Conductor gesture Y:', event.y)
      }

      // Existing audio reactivity based on intensity (can be blended or overridden by specific modes)
      if (App.audioManager?.isPlaying) {
        const intensity = Math.min(event.intensity, 2.0) // Cap the intensity
        const baseAmplitude = 0.8 + (App.audioManager.frequencyData.high * 0.2)
        this.particles.material.uniforms.amplitude.value = baseAmplitude + (intensity * 0.5)
        const baseOffsetGain = App.audioManager.frequencyData.mid * 0.6
        this.particles.material.uniforms.offsetGain.value = baseOffsetGain + (intensity * 0.3)
      }
    }
  }

  onFingerPaintGesture(event) {
    if (this.particles && this.particles.material) {
      // Update finger position uniform for the paint mode
      this.particles.updateFingerPosition(event.x, event.y)
      
      // Debug logging for paint mode
      if (this.particles.currentMode === 'paint') {
        console.log('Paint gesture:', event.x, event.y)
      }
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
    const hideToggle = document.getElementById('hideToggle')
    const topMenu = document.getElementById('topMenu')
    
    // Hide toggle
    hideToggle.addEventListener('change', (e) => {
      if (e.target.checked) {
        // Hide UI elements
        bottomMenu.classList.add('hidden')
        topMenu.classList.add('hidden')
        document.getElementById('showUIBtn').style.display = 'flex'
      } else {
        // Show UI elements
        bottomMenu.classList.remove('hidden')
        topMenu.classList.remove('hidden')
        document.getElementById('showUIBtn').style.display = 'none'
      }
    })

    // Show UI button functionality
    const showUIBtn = document.getElementById('showUIBtn')
    showUIBtn.addEventListener('click', () => {
      // Show UI elements
      bottomMenu.classList.remove('hidden')
      topMenu.classList.remove('hidden')
      showUIBtn.style.display = 'none'
      
      // Uncheck the hide toggle
      hideToggle.checked = false
    })

    // Upload button functionality
    const uploadBtns = document.querySelectorAll('#uploadBtn')
    uploadBtns.forEach(uploadBtn => {
      uploadBtn.addEventListener('click', () => {
        if (App.fileUploadManager) {
          App.fileUploadManager.showUploadModal()
        }
      })
    })

    // Gesture info button functionality
    const gestureInfoBtn = document.getElementById('gestureInfoBtn')
    gestureInfoBtn.addEventListener('click', () => {
      const slideout = document.getElementById('gestureSlideout')
      slideout.classList.toggle('open')
    })

    // Close gesture slideout
    const closeGesture = document.getElementById('closeGesture')
    closeGesture.addEventListener('click', () => {
      const slideout = document.getElementById('gestureSlideout')
      slideout.classList.remove('open')
    })

    // Close slideout when clicking outside
    document.addEventListener('click', (e) => {
      const slideout = document.getElementById('gestureSlideout')
      const gestureBtn = document.getElementById('gestureInfoBtn')
      
      if (!slideout.contains(e.target) && !gestureBtn.contains(e.target)) {
        slideout.classList.remove('open')
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
        
        // Update current mode display
        
        if (this.particles) {
          this.particles.setMode(mode)
        }
      })
    })

    // Initialize with default colors
    updateColor(300, colorIndicator1, true)
    updateColor(180, colorIndicator2, false)

    // Play/Stop button functionality
    const playBtn = document.getElementById('playBtn')
    const stopBtn = document.getElementById('stopBtn')
    
    playBtn.addEventListener('click', () => {
      if (App.audioManager && !App.audioManager.isPlaying) {
        App.audioManager.play()
        playBtn.querySelector('span').textContent = 'Pause'
        playBtn.querySelector('svg').innerHTML = `
          <rect x="6" y="4" width="4" height="16"></rect>
          <rect x="14" y="4" width="4" height="16"></rect>
        `
      } else if (App.audioManager && App.audioManager.isPlaying) {
        App.audioManager.pause()
        playBtn.querySelector('span').textContent = 'Play'
        playBtn.querySelector('svg').innerHTML = `
          <polygon points="5,3 19,12 5,21"></polygon>
        `
      }
    })
    
    stopBtn.addEventListener('click', () => {
      if (App.audioManager) {
        App.audioManager.pause()
        // Reset audio to beginning if possible
        if (App.audioManager.audio && App.audioManager.audio.source) {
          App.audioManager.audio.stop()
          App.audioManager.audio.play()
          App.audioManager.audio.pause()
        }
        // Update play button to show play state
        playBtn.querySelector('span').textContent = 'Play'
        playBtn.querySelector('svg').innerHTML = `
          <polygon points="5,3 19,12 5,21"></polygon>
        `
      }
    })
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
