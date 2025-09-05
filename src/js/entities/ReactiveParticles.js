import * as THREE from 'three'
import gsap from 'gsap'
import vertex from './glsl/vertex.glsl'
import fragment from './glsl/fragment.glsl'
import App from '../App'

export default class ReactiveParticles extends THREE.Object3D {
  constructor() {
    super()
    this.name = 'ReactiveParticles'
    this.time = 0
    this.currentMode = 'particles'
    this.properties = {
      startColor: 0xff00ff,
      endColor: 0x00ffff,
      autoMix: true,
      autoRotate: true,
      paintRadius: 0.5, // Radius of influence for paint mode
      paintStrength: 0.5, // Strength of influence for paint mode
      conductorWaveStrength: 1.0, // Amplitude of wave for conductor mode
      conductorWaveFrequency: 5.0, // Frequency of wave for conductor mode
    }
  }

  init() {
    App.holder.add(this)

    this.holderObjects = new THREE.Object3D()
    this.add(this.holderObjects)

    this.material = new THREE.ShaderMaterial({
      side: THREE.DoubleSide,
      vertexShader: vertex,
      fragmentShader: fragment,
      transparent: true,
      uniforms: {
        time: { value: 0 },
        offsetSize: { value: 2 },
        size: { value: 1.1 },
        frequency: { value: 2 },
        amplitude: { value: 1 },
        offsetGain: { value: 0 },
        maxDistance: { value: 1.8 },
        startColor: { value: new THREE.Color(this.properties.startColor) },
        endColor: { value: new THREE.Color(this.properties.endColor) },
        // New uniforms for gesture modes
        u_mode: { value: 0 }, // 0: normal, 1: paint, 2: conductor
        u_fingerPosition: { value: new THREE.Vector2(0.5, 0.5) },
        u_paintRadius: { value: this.properties.paintRadius },
        u_paintStrength: { value: this.properties.paintStrength },
        u_conductorY: { value: 0.5 },
      },
    })

    this.resetMesh()
  }

  updateColors(color) {
    // Create complementary color for gradient effect
    const complementaryColor = new THREE.Color().setHSL(
      (color.getHSL({}).h + 0.5) % 1,
      1,
      0.5
    )
    
    this.material.uniforms.startColor.value = color
    this.material.uniforms.endColor.value = complementaryColor
  }

  updateStartColor(color) {
    this.material.uniforms.startColor.value = color
  }

  updateEndColor(color) {
    this.material.uniforms.endColor.value = color
  }

  updateFingerPosition(x, y) {
    // Ensure the uniform exists and update it
    if (this.material && this.material.uniforms && this.material.uniforms.u_fingerPosition) {
      this.material.uniforms.u_fingerPosition.value.set(x, y)
      // Force uniform update
      this.material.uniformsNeedUpdate = true
    }
  }

  updateConductorY(y) {
    // Ensure the uniform exists and update it
    if (this.material && this.material.uniforms && this.material.uniforms.u_conductorY) {
      this.material.uniforms.u_conductorY.value = y
      // Force uniform update
      this.material.uniformsNeedUpdate = true
    }
  }

  setMode(mode) {
    this.currentMode = mode
    console.log('Setting mode to:', mode)
    
    // Map mode string to integer for shader uniform
    const modeMap = {
      'particles': 0, 'circles': 0, 'lines': 0, 'anomaly': 0, 'waves': 0, 'spiral': 0,
      'paint': 1,
      'conductor': 2
    }
    
    const modeValue = modeMap[mode] || 0
    console.log('Mode value for shader:', modeValue)
    
    if (this.material && this.material.uniforms && this.material.uniforms.u_mode) {
      this.material.uniforms.u_mode.value = modeValue
      this.material.uniformsNeedUpdate = true
    }

    this.resetMesh()
  }

  createBoxMesh() {
    let widthSeg, heightSeg, depthSeg
    
    switch(this.currentMode) {
      case 'particles':
        widthSeg = Math.floor(THREE.MathUtils.randInt(5, 20))
        heightSeg = Math.floor(THREE.MathUtils.randInt(1, 40))
        depthSeg = Math.floor(THREE.MathUtils.randInt(5, 80))
        break
      case 'circles':
        widthSeg = 20
        heightSeg = 20
        depthSeg = 20
        break
      case 'lines':
        widthSeg = 1
        heightSeg = Math.floor(THREE.MathUtils.randInt(20, 60))
        depthSeg = 1
        break
      case 'anomaly':
        widthSeg = Math.floor(THREE.MathUtils.randInt(1, 5))
        heightSeg = Math.floor(THREE.MathUtils.randInt(1, 5))
        depthSeg = Math.floor(THREE.MathUtils.randInt(50, 100))
        break
      case 'waves':
        widthSeg = Math.floor(THREE.MathUtils.randInt(30, 50))
        heightSeg = 1
        depthSeg = Math.floor(THREE.MathUtils.randInt(30, 50))
        break
      case 'spiral':
        widthSeg = Math.floor(THREE.MathUtils.randInt(10, 15))
        heightSeg = Math.floor(THREE.MathUtils.randInt(10, 15))
        depthSeg = Math.floor(THREE.MathUtils.randInt(10, 15))
        break
      default:
        widthSeg = Math.floor(THREE.MathUtils.randInt(5, 20))
        heightSeg = Math.floor(THREE.MathUtils.randInt(1, 40))
        depthSeg = Math.floor(THREE.MathUtils.randInt(5, 80))
    }
    
    this.geometry = new THREE.BoxGeometry(1, 1, 1, widthSeg, heightSeg, depthSeg)

    // Update shader material uniform for offset size with a random value
    const offsetSize = this.currentMode === 'lines' ? 
      Math.floor(THREE.MathUtils.randInt(10, 30)) : 
      Math.floor(THREE.MathUtils.randInt(30, 60))
    this.material.uniforms.offsetSize.value = offsetSize
    this.material.needsUpdate = true

    // Create a container for the points mesh and set its orientation
    this.pointsMesh = new THREE.Object3D()
    this.pointsMesh.rotateX(Math.PI / 2) // Rotate the mesh for better visual orientation
    this.holderObjects.add(this.pointsMesh)

    // Create a points mesh using the box geometry and the shader material
    const pointsMesh = new THREE.Points(this.geometry, this.material)
    this.pointsMesh.add(pointsMesh)

    // Animate the rotation of the of the container
    gsap.to(this.pointsMesh.rotation, {
      duration: 3,
      x: Math.random() * Math.PI,
      z: Math.random() * Math.PI * 2,
      ease: 'none', // No easing for a linear animation
    })

    gsap.to(this.position, {
      duration: 0.6,
      z: THREE.MathUtils.randInt(9, 11), // Random depth positioning within a range
      ease: 'elastic.out(0.8)', // Elastic ease-out for a bouncy effect
    })
  }

  createCylinderMesh() {
    let radialSeg, heightSeg
    
    switch(this.currentMode) {
      case 'particles':
        radialSeg = Math.floor(THREE.MathUtils.randInt(1, 3))
        heightSeg = Math.floor(THREE.MathUtils.randInt(1, 5))
        break
      case 'circles':
        radialSeg = 4
        heightSeg = 1
        break
      case 'lines':
        radialSeg = 1
        heightSeg = Math.floor(THREE.MathUtils.randInt(8, 15))
        break
      case 'anomaly':
        radialSeg = Math.floor(THREE.MathUtils.randInt(1, 2))
        heightSeg = Math.floor(THREE.MathUtils.randInt(10, 20))
        break
      case 'waves':
        radialSeg = Math.floor(THREE.MathUtils.randInt(3, 6))
        heightSeg = Math.floor(THREE.MathUtils.randInt(2, 4))
        break
      case 'spiral':
        radialSeg = Math.floor(THREE.MathUtils.randInt(2, 4))
        heightSeg = Math.floor(THREE.MathUtils.randInt(3, 8))
        break
      default:
        radialSeg = Math.floor(THREE.MathUtils.randInt(1, 3))
        heightSeg = Math.floor(THREE.MathUtils.randInt(1, 5))
    }
    
    this.geometry = new THREE.CylinderGeometry(1, 1, 4, 64 * radialSeg, 64 * heightSeg, true)

    // Update shader material uniforms for offset and size with random and fixed values
    const offsetSize = this.currentMode === 'circles' ? 
      Math.floor(THREE.MathUtils.randInt(50, 80)) : 
      Math.floor(THREE.MathUtils.randInt(30, 60))
    this.material.uniforms.offsetSize.value = offsetSize
    this.material.uniforms.size.value = this.currentMode === 'circles' ? 3 : 2
    this.material.needsUpdate = true
    this.material.uniforms.needsUpdate = true

    // Create a points mesh using the cylinder geometry and shader material
    this.pointsMesh = new THREE.Points(this.geometry, this.material)
    this.pointsMesh.rotation.set(Math.PI / 2, 0, 0) // Rotate the mesh for better orientation
    this.holderObjects.add(this.pointsMesh)

    let rotY = 0
    let posZ = THREE.MathUtils.randInt(9, 11)

    if (Math.random() < 0.2) {
      rotY = Math.PI / 2
      posZ = THREE.MathUtils.randInt(10, 11.5)
    }

    gsap.to(this.holderObjects.rotation, {
      duration: 0.2,
      y: rotY,
      ease: 'elastic.out(0.2)',
    })

    gsap.to(this.position, {
      duration: 0.6,
      z: posZ,
      ease: 'elastic.out(0.8)',
    })
  }

  onBPMBeat() {
    // Calculate a reduced duration based on the BPM (beats per minute) duration
    const duration = App.bpmManager.getBPMDuration() / 1000

    if (App.audioManager.isPlaying) {
      // Randomly determine whether to rotate the holder object
      if (Math.random() < 0.3 && this.properties.autoRotate) {
        gsap.to(this.holderObjects.rotation, {
          duration: Math.random() < 0.8 ? 15 : duration, // Either a longer or BPM-synced duration
          // y: Math.random() * Math.PI * 2,
          z: Math.random() * Math.PI,
          ease: 'elastic.out(0.2)',
        })
      }

      // Randomly decide whether to reset the mesh
      if (Math.random() < 0.3) {
        this.resetMesh()
      }
    }
  }

  resetMesh() {
    if (this.properties.autoMix) {
      this.destroyMesh()
      
      // Choose geometry based on mode
      const shouldUseCylinder = this.currentMode === 'circles' || 
        (this.currentMode === 'particles' && Math.random() < 0.5)
      
      if (shouldUseCylinder) {
        this.createCylinderMesh()
      } else {
        this.createBoxMesh()
      }

      // Animate the position of the mesh for an elastic movement effect

      // Animate the frequency uniform in the material, syncing with BPM if available
      const frequencyRange = this.currentMode === 'waves' ? 
        [1, 4] : this.currentMode === 'spiral' ? 
        [2, 5] : [0.5, 3]
      
      gsap.to(this.material.uniforms.frequency, {
        duration: App.bpmManager ? (App.bpmManager.getBPMDuration() / 1000) * 2 : 2,
        value: THREE.MathUtils.randFloat(frequencyRange[0], frequencyRange[1]),
        ease: 'expo.easeInOut', // Smooth exponential transition for visual effect
      })
    }
  }

  destroyMesh() {
    if (this.pointsMesh) {
      this.holderObjects.remove(this.pointsMesh)
      this.pointsMesh.geometry?.dispose()
      this.pointsMesh.material?.dispose()
      this.pointsMesh = null
    }
  }

  update() {
    if (App.audioManager?.isPlaying) {
      // Dynamically update amplitude based on the high frequency data from the audio manager
      this.material.uniforms.amplitude.value = 0.8 + THREE.MathUtils.mapLinear(App.audioManager.frequencyData.high, 0, 0.6, -0.1, 0.2)

      // Update offset gain based on the low frequency data for subtle effect changes
      this.material.uniforms.offsetGain.value = App.audioManager.frequencyData.mid * 0.6

      // Map low frequency data to a range and use it to increment the time uniform
      const t = THREE.MathUtils.mapLinear(App.audioManager.frequencyData.low, 0.6, 1, 0.2, 0.5)
      this.time += THREE.MathUtils.clamp(t, 0.2, 0.5) // Clamp the value to ensure it stays within a desired range
    } else {
      // Set default values for the uniforms when audio is not playing
      this.material.uniforms.frequency.value = 0.8
      this.material.uniforms.amplitude.value = 1
      this.time += 0.2
    }

    // Update gesture-related uniforms if not in their specific modes
    if (this.material.uniforms.u_mode.value !== 1) { // If not in paint mode
      // u_fingerPosition is updated directly by App.js
    }
    if (this.material.uniforms.u_mode.value !== 2) { // If not in conductor mode
      // u_conductorY is updated directly by App.js
    }

    this.material.uniforms.time.value = this.time
  }

}
