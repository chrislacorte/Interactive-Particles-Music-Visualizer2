export default class WebcamPositionManager {
  constructor() {
    this.currentPosition = 'top-right'
    this.currentSize = 'medium'
    this.webcamElement = null
    this.isVisible = false
    
    // Position coordinates for each corner
    this.positions = {
      'top-left': { top: '20px', left: '20px', right: 'auto', bottom: 'auto' },
      'top-right': { top: '20px', right: '20px', left: 'auto', bottom: 'auto' },
      'bottom-left': { bottom: '20px', left: '20px', right: 'auto', top: 'auto' },
      'bottom-right': { bottom: '20px', right: '20px', left: 'auto', top: 'auto' }
    }
    
    // Size dimensions
    this.sizes = {
      'small': { width: '120px', height: '90px' },
      'medium': { width: '160px', height: '120px' },
      'large': { width: '200px', height: '150px' }
    }
  }

  init() {
    this.createWebcamElement()
    this.setupEventListeners()
  }

  createWebcamElement() {
    this.webcamElement = document.createElement('div')
    this.webcamElement.id = 'webcamPreview'
    this.webcamElement.className = 'webcam-preview'
    this.webcamElement.innerHTML = `
      <video id="webcamVideo" autoplay muted playsinline></video>
      <div class="webcam-controls">
        <button class="webcam-settings-btn" id="webcamSettingsBtn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="m12 1 1.27 2.76L16 2l2 2-1.76 2.73L19 8l-1 1.73-2.76-1.27L16 11l-2.73-1.27L12 12l-1.27-2.73L8 11l-2-2 1.76-2.73L5 8l1-1.73 2.76 1.27L8 5l2.73 1.27z"></path>
          </svg>
        </button>
      </div>
    `
    
    document.body.appendChild(this.webcamElement)
    this.updateWebcamStyle()
  }

  setupEventListeners() {
    const settingsBtn = document.getElementById('webcamSettingsBtn')
    if (settingsBtn) {
      settingsBtn.addEventListener('click', (e) => {
        e.stopPropagation()
        this.togglePositionMenu()
      })
    }
  }

  togglePositionMenu() {
    const existingMenu = document.getElementById('webcamPositionMenu')
    if (existingMenu) {
      existingMenu.remove()
      return
    }

    this.createPositionMenu()
  }

  createPositionMenu() {
    const menu = document.createElement('div')
    menu.id = 'webcamPositionMenu'
    menu.className = 'webcam-position-menu'
    
    menu.innerHTML = `
      <div class="webcam-menu-content">
        <div class="webcam-menu-section">
          <div class="webcam-menu-label">Position</div>
          <div class="position-grid">
            <button class="position-btn ${this.currentPosition === 'top-left' ? 'active' : ''}" data-position="top-left">
              <div class="position-icon">
                <div class="screen-frame">
                  <div class="webcam-indicator top-left"></div>
                </div>
              </div>
            </button>
            <button class="position-btn ${this.currentPosition === 'top-right' ? 'active' : ''}" data-position="top-right">
              <div class="position-icon">
                <div class="screen-frame">
                  <div class="webcam-indicator top-right"></div>
                </div>
              </div>
            </button>
            <button class="position-btn ${this.currentPosition === 'bottom-left' ? 'active' : ''}" data-position="bottom-left">
              <div class="position-icon">
                <div class="screen-frame">
                  <div class="webcam-indicator bottom-left"></div>
                </div>
              </div>
            </button>
            <button class="position-btn ${this.currentPosition === 'bottom-right' ? 'active' : ''}" data-position="bottom-right">
              <div class="position-icon">
                <div class="screen-frame">
                  <div class="webcam-indicator bottom-right"></div>
                </div>
              </div>
            </button>
          </div>
        </div>
        
        <div class="webcam-menu-section">
          <div class="webcam-menu-label">Size</div>
          <div class="size-options">
            <button class="size-btn ${this.currentSize === 'small' ? 'active' : ''}" data-size="small">
              <div class="size-icon">
                <div class="size-indicator small"></div>
              </div>
            </button>
            <button class="size-btn ${this.currentSize === 'medium' ? 'active' : ''}" data-size="medium">
              <div class="size-icon">
                <div class="size-indicator medium"></div>
              </div>
            </button>
            <button class="size-btn ${this.currentSize === 'large' ? 'active' : ''}" data-size="large">
              <div class="size-icon">
                <div class="size-indicator large"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    `
    
    document.body.appendChild(menu)
    
    // Position menu near webcam element
    this.positionMenu(menu)
    
    // Add event listeners
    this.setupMenuEventListeners(menu)
    
    // Close menu when clicking outside
    setTimeout(() => {
      document.addEventListener('click', (e) => {
        if (!menu.contains(e.target)) {
          menu.remove()
        }
      }, { once: true })
    }, 100)
  }

  positionMenu(menu) {
    const webcamRect = this.webcamElement.getBoundingClientRect()
    const menuWidth = 280
    const menuHeight = 200
    
    let left = webcamRect.right + 10
    let top = webcamRect.top
    
    // Adjust if menu would go off screen
    if (left + menuWidth > window.innerWidth) {
      left = webcamRect.left - menuWidth - 10
    }
    
    if (top + menuHeight > window.innerHeight) {
      top = window.innerHeight - menuHeight - 20
    }
    
    menu.style.left = `${Math.max(20, left)}px`
    menu.style.top = `${Math.max(20, top)}px`
  }

  setupMenuEventListeners(menu) {
    // Position buttons
    const positionBtns = menu.querySelectorAll('.position-btn')
    positionBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation()
        const position = btn.dataset.position
        this.setPosition(position)
        
        // Update active states
        positionBtns.forEach(b => b.classList.remove('active'))
        btn.classList.add('active')
      })
    })
    
    // Size buttons
    const sizeBtns = menu.querySelectorAll('.size-btn')
    sizeBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation()
        const size = btn.dataset.size
        this.setSize(size)
        
        // Update active states
        sizeBtns.forEach(b => b.classList.remove('active'))
        btn.classList.add('active')
      })
    })
  }

  setPosition(position) {
    this.currentPosition = position
    this.updateWebcamStyle()
  }

  setSize(size) {
    this.currentSize = size
    this.updateWebcamStyle()
  }

  updateWebcamStyle() {
    if (!this.webcamElement) return
    
    const position = this.positions[this.currentPosition]
    const size = this.sizes[this.currentSize]
    
    Object.assign(this.webcamElement.style, {
      ...position,
      ...size
    })
  }

  async startWebcam() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 640, height: 480 }
      })
      
      const video = document.getElementById('webcamVideo')
      if (video) {
        video.srcObject = stream
        await video.play()
      }
      
      this.isVisible = true
      this.webcamElement.style.display = 'block'
      
    } catch (error) {
      console.error('Failed to start webcam:', error)
    }
  }

  stopWebcam() {
    const video = document.getElementById('webcamVideo')
    if (video && video.srcObject) {
      const tracks = video.srcObject.getTracks()
      tracks.forEach(track => track.stop())
      video.srcObject = null
    }
    
    this.isVisible = false
    this.webcamElement.style.display = 'none'
  }

  toggleWebcam() {
    if (this.isVisible) {
      this.stopWebcam()
    } else {
      this.startWebcam()
    }
  }
}