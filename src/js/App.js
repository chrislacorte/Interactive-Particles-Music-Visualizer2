import * as THREE from 'three'
import ReativeParticles from './entities/ReactiveParticles'
import * as dat from 'dat.gui'
import BPMManager from './managers/BPMManager'
import AudioManager from './managers/AudioManager'
import HandTrackingManager from './managers/HandTrackingManager'

export default class App {
  //THREE objects
  static holder = null
  static gui = null

  //Managers
  static audioManager = null
  static bpmManager = null
  static handTrackingManager = null

  constructor() {
    this.onClickBinder = () => this.init()
    document.addEventListener('click', this.onClickBinder)
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

    App.bpmManager = new BPMManager()
    App.bpmManager.addEventListener('beat', () => {
      this.particles.onBPMBeat()
    })
    await App.bpmManager.detectBPM(App.audioManager.audio.buffer)

    document.querySelector('.user_interaction').remove()

    // Initialize hand tracking manager
    App.handTrackingManager = new HandTrackingManager()
    await App.handTrackingManager.init()
    
    // Add hand tracking event listeners
    App.handTrackingManager.addEventListener('conductorGesture', (event) => {
      this.onConductorGesture(event)
    })
    
    App.handTrackingManager.addEventListener('zoomGesture', (event) => {
      this.onZoomGesture(event)
    })
    App.audioManager.play()

    this.particles = new ReativeParticles()
    this.particles.init()

    this.initBottomMenu()

    this.update()
  }

  async toggleWebcam() {
    const webcamBtn = document.getElementById('webcamBtn')
    const webcamOptions = document.getElementById('webcamOptions')
    const span = webcamBtn.querySelector('span')
    
    if (!App.handTrackingManager.isHandTrackingActive()) {
      // Start webcam
      webcamBtn.disabled = true
      span.textContent = 'Starting...'
      
      try {
        await App.handTrackingManager.start()
        webcamBtn.classList.add('active')
        span.textContent = 'Webcam Active'
        webcamOptions.style.display = 'flex'
        console.log('Hand tracking activated')
      } catch (error) {
        console.error('Failed to start webcam:', error)
        span.textContent = 'Failed to Start'
        setTimeout(() => {
          span.textContent = 'Webcam Active'
        }, 2000)
      }
      
      webcamBtn.disabled = false
    } else {
      // Stop webcam
      App.handTrackingManager.stop()
      webcamBtn.classList.remove('active')
      span.textContent = 'Webcam Active'
      webcamOptions.style.display = 'none'
      this.hideAllWebcamViews()
      console.log('Hand tracking deactivated')
    }
  }

  hideAllWebcamViews() {
    document.getElementById('webcamBackground').style.display = 'none'
    document.getElementById('webcamSmallWindow').style.display = 'none'
    App.handTrackingManager.setShowHandTracking(false)
    
    // Remove active states
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('active'))
  }

  setupWebcamView(mode) {
    const videoElement = document.getElementById('webcam')
    if (!videoElement || !videoElement.srcObject) return

    // Hide all views first
    this.hideAllWebcamViews()

    switch(mode) {
      case 'background':
        const backgroundDiv = document.getElementById('webcamBackground')
        backgroundDiv.innerHTML = ''
        const bgVideo = videoElement.cloneNode(true)
        bgVideo.style.transform = 'scaleX(-1)' // Mirror the video
        backgroundDiv.appendChild(bgVideo)
        backgroundDiv.style.display = 'block'
        break
        
      case 'small':
        const smallWindow = document.getElementById('webcamSmallWindow')
        const smallContent = smallWindow.querySelector('.webcam-small-content')
        smallContent.innerHTML = ''
        const smallVideo = videoElement.cloneNode(true)
        smallVideo.style.transform = 'scaleX(-1)' // Mirror the video
        smallContent.appendChild(smallVideo)
        smallWindow.style.display = 'block'
        break
        
      case 'tracking':
        App.handTrackingManager.setShowHandTracking(true)
        break
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

    // Webcam functionality
    const webcamBtn = document.getElementById('webcamBtn')
    const backgroundBtn = document.getElementById('backgroundBtn')
    const smallWindowBtn = document.getElementById('smallWindowBtn')
    const handTrackingBtn = document.getElementById('handTrackingBtn')
    
    webcamBtn.addEventListener('click', () => {
      this.toggleWebcam()
    })
    
    backgroundBtn.addEventListener('click', () => {
      backgroundBtn.classList.toggle('active')
      if (backgroundBtn.classList.contains('active')) {
        this.setupWebcamView('background')
      } else {
        document.getElementById('webcamBackground').style.display = 'none'
      }
    })
    
    smallWindowBtn.addEventListener('click', () => {
      smallWindowBtn.classList.toggle('active')
      if (smallWindowBtn.classList.contains('active')) {
        this.setupWebcamView('small')
      } else {
        document.getElementById('webcamSmallWindow').style.display = 'none'
      }
    })
    
    handTrackingBtn.addEventListener('click', () => {
      handTrackingBtn.classList.toggle('active')
      if (handTrackingBtn.classList.contains('active')) {
        this.setupWebcamView('tracking')
      } else {
        App.handTrackingManager.setShowHandTracking(false)
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
}
