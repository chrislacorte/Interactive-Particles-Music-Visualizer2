import { EventDispatcher } from 'three'

export default class FileUploadManager extends EventDispatcher {
  constructor() {
    super()
    this.uploadedFiles = []
    this.currentFile = null
    this.maxFileSize = 50 * 1024 * 1024 // 50MB
    this.allowedFormats = ['mp3', 'wav', 'flac', 'aac', 'm4a', 'ogg']
    this.uploadFolder = 'uploads/music/'
    
    // Load saved files from localStorage
    this.loadSavedFiles()
  }

  init() {
    this.setupUploadInterface()
    this.setupEventListeners()
  }

  setupUploadInterface() {
    // Create upload modal
    this.createUploadModal()
    
    // Add upload button to existing interface
    this.addUploadButton()
  }

  createUploadModal() {
    const modal = document.createElement('div')
    modal.id = 'uploadModal'
    modal.className = 'upload-modal'
    modal.innerHTML = `
      <div class="upload-modal-content">
        <div class="upload-header">
          <h2>Upload Your Music</h2>
          <button class="close-upload" id="closeUpload">&times;</button>
        </div>
        
        <div class="upload-area" id="uploadArea">
          <div class="upload-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7,10 12,15 17,10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </div>
          <p class="upload-text">Drag & drop your music files here</p>
          <p class="upload-subtext">or click to browse</p>
          <input type="file" id="fileInput" multiple accept=".mp3,.wav,.flac,.aac,.m4a,.ogg" style="display: none;">
          <button class="browse-btn" id="browseBtn">Browse Files</button>
        </div>
        
        <div class="upload-info">
          <p>Supported formats: MP3, WAV, FLAC, AAC, M4A, OGG</p>
          <p>Maximum file size: 50MB per file</p>
        </div>
        
        <div class="upload-progress" id="uploadProgress" style="display: none;">
          <div class="progress-bar">
            <div class="progress-fill" id="progressFill"></div>
          </div>
          <span class="progress-text" id="progressText">0%</span>
        </div>
        
        <div class="uploaded-files" id="uploadedFilesList">
          <h3>Your Music Library</h3>
          <div class="files-list" id="filesList"></div>
        </div>
      </div>
    `
    
    document.body.appendChild(modal)
  }

  addUploadButton() {
    const playbackControls = document.querySelector('.playback-controls')
    if (playbackControls) {
      const uploadSection = document.createElement('div')
      uploadSection.className = 'upload-section'
      uploadSection.innerHTML = `
        <button class="upload-btn" id="uploadBtn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7,10 12,15 17,10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          <span>Upload Music</span>
        </button>
      `
      
      // Append to playback controls
      playbackControls.appendChild(uploadSection)
    }
  }

  setupEventListeners() {
    // Upload button click
    document.getElementById('uploadBtn')?.addEventListener('click', () => {
      this.showUploadModal()
    })

    // Close modal
    document.getElementById('closeUpload')?.addEventListener('click', () => {
      this.hideUploadModal()
    })

    // Browse button
    document.getElementById('browseBtn')?.addEventListener('click', () => {
      document.getElementById('fileInput').click()
    })

    // File input change
    document.getElementById('fileInput')?.addEventListener('change', (e) => {
      this.handleFileSelection(e.target.files)
    })

    // Drag and drop
    const uploadArea = document.getElementById('uploadArea')
    if (uploadArea) {
      uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault()
        uploadArea.classList.add('drag-over')
      })

      uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('drag-over')
      })

      uploadArea.addEventListener('drop', (e) => {
        e.preventDefault()
        uploadArea.classList.remove('drag-over')
        this.handleFileSelection(e.dataTransfer.files)
      })
    }

    // Click outside modal to close
    document.getElementById('uploadModal')?.addEventListener('click', (e) => {
      if (e.target.id === 'uploadModal') {
        this.hideUploadModal()
      }
    })
  }

  showUploadModal() {
    const modal = document.getElementById('uploadModal')
    if (modal) {
      modal.style.display = 'flex'
      this.updateFilesList()
    }
  }

  hideUploadModal() {
    const modal = document.getElementById('uploadModal')
    if (modal) {
      modal.style.display = 'none'
    }
  }

  async handleFileSelection(files) {
    const validFiles = []
    
    for (let file of files) {
      if (this.validateFile(file)) {
        validFiles.push(file)
      }
    }

    if (validFiles.length > 0) {
      await this.uploadFiles(validFiles)
    }
  }

  validateFile(file) {
    // Check file type
    const extension = file.name.split('.').pop().toLowerCase()
    if (!this.allowedFormats.includes(extension)) {
      this.showError(`Invalid file format: ${file.name}. Supported formats: ${this.allowedFormats.join(', ')}`)
      return false
    }

    // Check file size
    if (file.size > this.maxFileSize) {
      this.showError(`File too large: ${file.name}. Maximum size: ${this.maxFileSize / (1024 * 1024)}MB`)
      return false
    }

    // Check if file already exists
    if (this.uploadedFiles.some(f => f.name === file.name)) {
      this.showError(`File already exists: ${file.name}`)
      return false
    }

    return true
  }

  async uploadFiles(files) {
    const progressContainer = document.getElementById('uploadProgress')
    const progressFill = document.getElementById('progressFill')
    const progressText = document.getElementById('progressText')
    
    progressContainer.style.display = 'block'
    
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const progress = ((i + 1) / files.length) * 100
      
      try {
        // Simulate upload process (in a real app, this would upload to server)
        await this.processFile(file)
        
        // Update progress
        progressFill.style.width = `${progress}%`
        progressText.textContent = `${Math.round(progress)}%`
        
        // Add to uploaded files
        const fileData = {
          id: Date.now() + Math.random(),
          name: file.name,
          size: file.size,
          type: file.type,
          url: URL.createObjectURL(file),
          uploadDate: new Date().toISOString(),
          duration: await this.getAudioDuration(file)
        }
        
        this.uploadedFiles.push(fileData)
        
      } catch (error) {
        this.showError(`Failed to upload ${file.name}: ${error.message}`)
      }
    }
    
    // Hide progress and update UI
    setTimeout(() => {
      progressContainer.style.display = 'none'
      progressFill.style.width = '0%'
      progressText.textContent = '0%'
      this.updateFilesList()
      this.saveFiles()
      this.showSuccess(`Successfully uploaded ${files.length} file(s)`)
    }, 500)
  }

  async processFile(file) {
    // Simulate file processing delay
    return new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })
  }

  async getAudioDuration(file) {
    return new Promise((resolve) => {
      const audio = new Audio()
      audio.addEventListener('loadedmetadata', () => {
        resolve(audio.duration)
      })
      audio.addEventListener('error', () => {
        resolve(0)
      })
      audio.src = URL.createObjectURL(file)
    })
  }

  updateFilesList() {
    const filesList = document.getElementById('filesList')
    if (!filesList) return

    if (this.uploadedFiles.length === 0) {
      filesList.innerHTML = '<p class="no-files">No music files uploaded yet</p>'
      return
    }

    filesList.innerHTML = this.uploadedFiles.map(file => `
      <div class="file-item" data-file-id="${file.id}">
        <div class="file-info">
          <div class="file-name">${file.name}</div>
          <div class="file-details">
            ${this.formatFileSize(file.size)} • ${this.formatDuration(file.duration)}
          </div>
        </div>
        <div class="file-actions">
          <button class="play-btn" onclick="window.fileUploadManager.playFile('${file.id}')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="5,3 19,12 5,21"></polygon>
            </svg>
          </button>
          <button class="delete-btn" onclick="window.fileUploadManager.deleteFile('${file.id}')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3,6 5,6 21,6"></polyline>
              <path d="m19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"></path>
            </svg>
          </button>
        </div>
      </div>
    `).join('')
  }

  playFile(fileId) {
    const file = this.uploadedFiles.find(f => f.id == fileId)
    if (file) {
      this.currentFile = file
      this.dispatchEvent({ 
        type: 'fileSelected', 
        file: file 
      })
      this.hideUploadModal()
    }
  }

  deleteFile(fileId) {
    if (confirm('Are you sure you want to delete this file?')) {
      this.uploadedFiles = this.uploadedFiles.filter(f => f.id != fileId)
      this.updateFilesList()
      this.saveFiles()
      this.showSuccess('File deleted successfully')
    }
  }

  formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  formatDuration(seconds) {
    if (!seconds || seconds === 0) return '0:00'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  saveFiles() {
    try {
      // Save file metadata to localStorage (in a real app, this would be saved to server)
      const fileData = this.uploadedFiles.map(file => ({
        ...file,
        // Don't save the blob URL as it won't persist
        url: null
      }))
      localStorage.setItem('uploadedMusicFiles', JSON.stringify(fileData))
    } catch (error) {
      console.error('Failed to save files:', error)
    }
  }

  loadSavedFiles() {
    try {
      const saved = localStorage.getItem('uploadedMusicFiles')
      if (saved) {
        this.uploadedFiles = JSON.parse(saved)
        // Note: URLs won't work after page reload in this demo
        // In a real app, files would be stored on server with persistent URLs
      }
    } catch (error) {
      console.error('Failed to load saved files:', error)
      this.uploadedFiles = []
    }
  }

  showError(message) {
    this.showNotification(message, 'error')
  }

  showSuccess(message) {
    this.showNotification(message, 'success')
  }

  showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div')
    notification.className = `notification notification-${type}`
    notification.textContent = message
    
    // Add to page
    document.body.appendChild(notification)
    
    // Show notification
    setTimeout(() => {
      notification.classList.add('show')
    }, 100)
    
    // Remove notification
    setTimeout(() => {
      notification.classList.remove('show')
      setTimeout(() => {
        document.body.removeChild(notification)
      }, 300)
    }, 3000)
  }

  getCurrentFile() {
    return this.currentFile
  }

  getUploadedFiles() {
    return this.uploadedFiles
  }
}