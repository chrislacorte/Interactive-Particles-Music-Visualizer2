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
      
      if (!this.videoElement || !this.canvasElement) {
        throw new Error('Video or canvas element not found')
      }

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

      console.log('HandTrackingManager initialized successfully')
      return true
    } catch (error) {
      console.error('Failed to initialize HandTrackingManager:', error)
      return false
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
      return
    }

    const hands = results.multiHandLandmarks
    
    // Process conductor gesture (vertical hand movement)
    this.processConductorGesture(hands)
    
    // Process zoom gesture (thumb-index distance)
    this.processZoomGesture(hands)
  }

  processConductorGesture(hands) {
    if (hands.length === 0) return

    // Use the first hand's wrist position for conductor gesture
    const hand = hands[0]
    const wrist = hand[0] // WRIST landmark
    const currentY = wrist.y

    if (this.previousHandY !== null) {
      const deltaY = currentY - this.previousHandY
      const velocity = Math.abs(deltaY)
      
      // Apply threshold and smoothing
      if (velocity > this.conductorThreshold) {
        this.conductorIntensity = velocity * 10 // Amplify the movement
        this.smoothedConductor = this.lerp(this.smoothedConductor, this.conductorIntensity, this.smoothingFactor)
        
        this.dispatchEvent({
          type: 'conductorGesture',
          intensity: this.smoothedConductor,
          direction: deltaY > 0 ? 'down' : 'up'
        })
      }
    }

    this.previousHandY = currentY
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

  lerp(start, end, factor) {
    return start + (end - start) * factor
  }

  isHandTrackingActive() {
    return this.isActive
  }
}