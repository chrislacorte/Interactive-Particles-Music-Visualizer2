import { EventDispatcher } from 'three'

export default class HandTrackingManager extends EventDispatcher {
  constructor() {
    super()
    this.hands = null
    this.camera = null
    this.videoElement = null
    this.canvasElement = null
    this.isActive = false
    this.previousHandY = null
    this.conductorIntensity = 0
    this.previousZoomDistance = null
    this.smoothedConductor = 0
    this.smoothedZoom = 1
    this.handTrackingCanvas = null
    this.handTrackingCtx = null
    this.showHandTracking = false
    
    // Gesture thresholds
    this.conductorThreshold = 0.02
    this.zoomSensitivity = 2.0
    this.smoothingFactor = 0.1
  }

  async init() {
    try {
      // Get video and canvas elements
      this.videoElement = document.getElementById('webcam')
      this.canvasElement = document.getElementById('handCanvas')
      this.handTrackingCanvas = document.getElementById('handTrackingOverlay')
      
      if (!this.videoElement || !this.canvasElement || !this.handTrackingCanvas) {
        throw new Error('Required elements not found')
      }

      this.handTrackingCtx = this.handTrackingCanvas.getContext('2d')
      this.resizeHandTrackingCanvas()
      window.addEventListener('resize', () => this.resizeHandTrackingCanvas())

      // Initialize MediaPipe Hands
      this.hands = new Hands({
        locateFile: (file) => {
          return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
        }
      })

      this.hands.setOptions({
        maxNumHands: 2,
        modelComplexity: 1,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5
      })

      this.hands.onResults(this.onResults.bind(this))

      // Wait for MediaPipe Hands to fully initialize
      await this.hands.initialize()

      console.log('HandTrackingManager initialized successfully')
      return true
    } catch (error) {
      console.error('Failed to initialize HandTrackingManager:', error)
      return false
    }
  }

  resizeHandTrackingCanvas() {
    if (this.handTrackingCanvas) {
      this.handTrackingCanvas.width = window.innerWidth
      this.handTrackingCanvas.height = window.innerHeight
    }
  }

  setShowHandTracking(show) {
    this.showHandTracking = show
    if (this.handTrackingCanvas) {
      this.handTrackingCanvas.style.display = show ? 'block' : 'none'
    }
    if (!show && this.handTrackingCtx) {
      this.handTrackingCtx.clearRect(0, 0, this.handTrackingCanvas.width, this.handTrackingCanvas.height)
    }
  }

  async start() {
    if (this.isActive) return

    try {
      // Request webcam access
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 640, height: 480 }
      })

      this.videoElement.srcObject = stream
      await this.videoElement.play()

      // Initialize camera
      this.camera = new Camera(this.videoElement, {
        onFrame: async () => {
          if (this.hands) {
            await this.hands.send({ image: this.videoElement })
          }
        },
        width: 640,
        height: 480
      })

      this.camera.start()
      this.isActive = true
      
      console.log('Hand tracking started')
      this.dispatchEvent({ type: 'started' })
    } catch (error) {
      console.error('Failed to start hand tracking:', error)
      this.dispatchEvent({ type: 'error', error })
    }
  }

  stop() {
    if (!this.isActive) return

    try {
      // Stop camera
      if (this.camera) {
        this.camera.stop()
        this.camera = null
      }

      // Stop video stream
      if (this.videoElement && this.videoElement.srcObject) {
        const tracks = this.videoElement.srcObject.getTracks()
        tracks.forEach(track => track.stop())
        this.videoElement.srcObject = null
      }

      this.isActive = false
      this.previousHandY = null
      this.previousZoomDistance = null
      
      console.log('Hand tracking stopped')
      this.dispatchEvent({ type: 'stopped' })
    } catch (error) {
      console.error('Failed to stop hand tracking:', error)
    }
  }

  onResults(results) {
    if (!results.multiHandLandmarks || results.multiHandLandmarks.length === 0) {
      // Clear hand tracking visualization when no hands detected
      if (this.showHandTracking && this.handTrackingCtx) {
        this.handTrackingCtx.clearRect(0, 0, this.handTrackingCanvas.width, this.handTrackingCanvas.height)
      }
      return
    }

    const hands = results.multiHandLandmarks
    
    // Draw hand tracking visualization
    if (this.showHandTracking) {
      this.drawHandTracking(hands)
    }
    
    // Process conductor gesture (vertical hand movement)
    this.processConductorGesture(hands)

    // Process finger paint gesture (index finger tip position)
    this.processFingerPaintGesture(hands)
    
    // Process zoom gesture (thumb-index distance)
    this.processZoomGesture(hands)
  }

  processConductorGesture(hands) {
    if (hands.length === 0) return

    // Use the first hand's wrist position for conductor gesture
    const hand = hands[0]
    const wrist = hand[0] // WRIST landmark
    const currentY = wrist.y
    
    // Smooth the current Y position for conductor mode
    this.smoothedConductorY = this.lerp(this.smoothedConductorY || currentY, currentY, this.smoothingFactor);

    this.dispatchEvent({
      type: 'conductorGesture',
      y: this.smoothedConductorY, // Normalized Y position (0 to 1)
      // Also include intensity and direction for general reactivity if needed
      intensity: this.previousHandY !== null ? Math.abs(currentY - this.previousHandY) * 10 : 0,
      direction: this.previousHandY !== null ? (currentY - this.previousHandY > 0 ? 'down' : 'up') : 'none'
    });

    this.previousHandY = currentY;
  }

  processFingerPaintGesture(hands) {
    if (hands.length === 0) return

    const hand = hands[0]
    const indexTip = hand[8] // INDEX_FINGER_TIP

    this.dispatchEvent({
      type: 'fingerPaintGesture',
      x: indexTip.x,
      y: indexTip.y
    })
  }

  processZoomGesture(hands) {
    if (hands.length === 0) return

    const hand = hands[0]
    const thumbTip = hand[4]  // THUMB_TIP
    const indexTip = hand[8]  // INDEX_FINGER_TIP

    // Calculate distance between thumb and index finger
    const distance = Math.sqrt(
      Math.pow(thumbTip.x - indexTip.x, 2) + 
      Math.pow(thumbTip.y - indexTip.y, 2)
    )

    if (this.previousZoomDistance !== null) {
      const deltaDistance = distance - this.previousZoomDistance
      const zoomFactor = 1 + (deltaDistance * this.zoomSensitivity)
      
      // Apply smoothing
      this.smoothedZoom = this.lerp(this.smoothedZoom, zoomFactor, this.smoothingFactor)
      
      // Only dispatch if there's significant change
      if (Math.abs(deltaDistance) > 0.01) {
        this.dispatchEvent({
          type: 'zoomGesture',
          factor: this.smoothedZoom,
          distance: distance,
          delta: deltaDistance
        })
      }
    }

    this.previousZoomDistance = distance
  }

  drawHandTracking(hands) {
    if (!this.handTrackingCtx) return

    // Clear previous frame
    this.handTrackingCtx.clearRect(0, 0, this.handTrackingCanvas.width, this.handTrackingCanvas.height)

    hands.forEach((hand, handIndex) => {
      // Draw hand landmarks
      hand.forEach((landmark, index) => {
        const x = landmark.x * this.handTrackingCanvas.width
        const y = landmark.y * this.handTrackingCanvas.height

        // Draw landmark points
        this.handTrackingCtx.beginPath()
        this.handTrackingCtx.arc(x, y, 4, 0, 2 * Math.PI)
        this.handTrackingCtx.fillStyle = handIndex === 0 ? '#00ff00' : '#ff0000'
        this.handTrackingCtx.fill()

        // Highlight important landmarks
        if (index === 4 || index === 8) { // Thumb tip and index tip
          this.handTrackingCtx.beginPath()
          this.handTrackingCtx.arc(x, y, 8, 0, 2 * Math.PI)
          this.handTrackingCtx.strokeStyle = '#ffffff'
          this.handTrackingCtx.lineWidth = 2
          this.handTrackingCtx.stroke()
        }
      })

      // Draw connections between landmarks
      const connections = [
        [0, 1], [1, 2], [2, 3], [3, 4], // Thumb
        [0, 5], [5, 6], [6, 7], [7, 8], // Index
        [5, 9], [9, 10], [10, 11], [11, 12], // Middle
        [9, 13], [13, 14], [14, 15], [15, 16], // Ring
        [13, 17], [17, 18], [18, 19], [19, 20], // Pinky
        [0, 17] // Palm
      ]

      this.handTrackingCtx.strokeStyle = handIndex === 0 ? '#00ff0080' : '#ff000080'
      this.handTrackingCtx.lineWidth = 2

      connections.forEach(([start, end]) => {
        if (hand[start] && hand[end]) {
          const startX = hand[start].x * this.handTrackingCanvas.width
          const startY = hand[start].y * this.handTrackingCanvas.height
          const endX = hand[end].x * this.handTrackingCanvas.width
          const endY = hand[end].y * this.handTrackingCanvas.height

          this.handTrackingCtx.beginPath()
          this.handTrackingCtx.moveTo(startX, startY)
          this.handTrackingCtx.lineTo(endX, endY)
          this.handTrackingCtx.stroke()
        }
      })
    })
  }

  lerp(start, end, factor) {
    return start + (end - start) * factor
  }

  isHandTrackingActive() {
    return this.isActive
  }
}