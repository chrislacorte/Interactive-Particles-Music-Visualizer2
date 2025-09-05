import * as THREE from 'three'
import ReativeParticles from './entities/ReactiveParticles'
import * as dat from 'dat.gui'
import BPMManager from './managers/BPMManager'
import AudioManager from './managers/AudioManager'

export default class App {
  //THREE objects
  static holder = null
  static gui = null

  //Managers
  static audioManager = null
  static bpmManager = null

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

    App.audioManager.play()

    this.particles = new ReativeParticles()
    this.particles.init()

    this.initBottomMenu()

    this.update()
  }

  initBottomMenu() {
    const bottomMenu = document.getElementById('bottomMenu')
    bottomMenu.style.display = 'block'

    // Color picker functionality
    const colorSlider = document.getElementById('colorSlider')
    const colorIndicator = document.getElementById('colorIndicator')
    const hexDisplay = document.getElementById('hexDisplay')

    const updateColor = (hue) => {
      const color = new THREE.Color().setHSL(hue / 360, 1, 0.5)
      const hexColor = '#' + color.getHexString().toUpperCase()
      
      colorIndicator.style.background = hexColor
      hexDisplay.textContent = hexColor
      
      // Update particle colors in real-time
      if (this.particles) {
        this.particles.updateColors(color)
      }
    }

    colorSlider.addEventListener('input', (e) => {
      updateColor(parseInt(e.target.value))
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

    // Initialize with default color
    updateColor(300)
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
