import * as THREE from 'three'

export function mountHeroScene(canvas) {
  const mobile = window.matchMedia('(max-width: 760px)').matches
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: !mobile,
    powerPreference: 'high-performance',
  })

  renderer.setClearColor(0x0d1b2a, 0)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, mobile ? 1.15 : 1.5))
  renderer.outputColorSpace = THREE.SRGBColorSpace

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 50)
  camera.position.set(0, 0, 7.2)

  const group = new THREE.Group()
  scene.add(group)

  const core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.03, mobile ? 2 : 3),
    new THREE.MeshStandardMaterial({
      color: 0x334155,
      emissive: 0x0d1b2a,
      emissiveIntensity: 0.7,
      metalness: 0.42,
      roughness: 0.3,
      transparent: true,
      opacity: 0.52,
      flatShading: true,
    }),
  )
  group.add(core)

  const wire = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.08, mobile ? 2 : 3),
    new THREE.MeshBasicMaterial({ color: 0xcba15a, wireframe: true, transparent: true, opacity: 0.075 }),
  )
  group.add(wire)

  const ringMaterial = new THREE.MeshStandardMaterial({
    color: 0xcba15a,
    emissive: 0xcba15a,
    emissiveIntensity: 0.75,
    metalness: 0.88,
    roughness: 0.24,
  })

  const ringSettings = [
    [1.42, 0.012, 0.3, 0.75, 0.18],
    [1.68, 0.009, 1.18, 0.22, -0.34],
    [1.94, 0.008, 0.62, -0.7, 0.5],
    [2.22, 0.006, -0.34, 0.95, 0.72],
  ]

  const rings = ringSettings.map(([radius, tube, x, y, z]) => {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(radius, tube, 6, mobile ? 72 : 112),
      ringMaterial,
    )
    ring.rotation.set(x, y, z)
    group.add(ring)
    return ring
  })

  const particleCount = mobile ? 72 : 190
  const positions = new Float32Array(particleCount * 3)
  for (let index = 0; index < particleCount; index += 1) {
    const radius = 2.25 + Math.random() * 1.65
    const angle = Math.random() * Math.PI * 2
    const lift = (Math.random() - 0.5) * 3.7
    positions[index * 3] = Math.cos(angle) * radius
    positions[index * 3 + 1] = lift
    positions[index * 3 + 2] = Math.sin(angle) * radius * 0.45
  }

  const particlesGeometry = new THREE.BufferGeometry()
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  const particles = new THREE.Points(
    particlesGeometry,
    new THREE.PointsMaterial({
      color: 0xcba15a,
      size: mobile ? 0.018 : 0.022,
      transparent: true,
      opacity: 0.34,
      sizeAttenuation: true,
    }),
  )
  group.add(particles)

  scene.add(new THREE.HemisphereLight(0xf2efe9, 0x0d1b2a, 1.25))
  const warmLight = new THREE.PointLight(0xcba15a, 14, 14)
  warmLight.position.set(2.8, 2.4, 4.2)
  scene.add(warmLight)
  const coolLight = new THREE.PointLight(0x334155, 7, 11)
  coolLight.position.set(-2.7, -1.8, 3)
  scene.add(coolLight)

  const pointer = new THREE.Vector2()
  const pointerTarget = new THREE.Vector2()
  const clock = new THREE.Clock()
  let frameId
  let visible = true

  function placeScene() {
    const width = canvas.clientWidth || window.innerWidth
    const height = canvas.clientHeight || window.innerHeight
    renderer.setSize(width, height, false)
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    group.position.set(mobile ? 0.55 : 2.18, mobile ? -1.0 : 0.05, 0)
    group.scale.setScalar(mobile ? 0.74 : 1)
  }

  function onPointerMove(event) {
    pointerTarget.x = (event.clientX / window.innerWidth - 0.5) * 0.48
    pointerTarget.y = (event.clientY / window.innerHeight - 0.5) * 0.34
  }

  function animate() {
    if (!visible || document.hidden) {
      frameId = window.requestAnimationFrame(animate)
      return
    }

    const elapsed = clock.getElapsedTime()
    const scroll = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1)
    pointer.lerp(pointerTarget, 0.035)

    group.rotation.x += (pointer.y - group.rotation.x) * 0.025
    group.rotation.y += (pointer.x + scroll * 0.34 - group.rotation.y) * 0.025
    core.rotation.y = elapsed * 0.08
    core.rotation.x = elapsed * 0.045
    wire.rotation.copy(core.rotation)
    rings.forEach((ring, index) => {
      ring.rotation.z += 0.00055 * (index % 2 === 0 ? 1 : -1)
    })
    particles.rotation.y = elapsed * 0.018

    renderer.render(scene, camera)
    frameId = window.requestAnimationFrame(animate)
  }

  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting
  }, { rootMargin: '80px' })

  observer.observe(canvas)
  window.addEventListener('resize', placeScene, { passive: true })
  window.addEventListener('pointermove', onPointerMove, { passive: true })
  placeScene()
  canvas.classList.add('is-ready')
  animate()

  return () => {
    observer.disconnect()
    window.cancelAnimationFrame(frameId)
    window.removeEventListener('resize', placeScene)
    window.removeEventListener('pointermove', onPointerMove)
    scene.traverse((object) => {
      object.geometry?.dispose()
      if (Array.isArray(object.material)) object.material.forEach((material) => material.dispose())
      else object.material?.dispose()
    })
    renderer.dispose()
  }
}
