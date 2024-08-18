import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const ref = useRef<THREE.Points>(null!)
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(1000 * 3)
    const colors = new Float32Array(1000 * 3)
    for (let i = 0; i < 1000; i++) {
      const x = (Math.random() - 0.5) * 10
      const y = (Math.random() - 0.5) * 10
      const z = (Math.random() - 0.5) * 10
      positions.set([x, y, z], i * 3)
      
      // Generate various shades of purple
      const r = Math.random() * 0.3 + 0.2 // 0.2 to 0.5
      const g = Math.random() * 0.1 // 0 to 0.1
      const b = Math.random() * 0.5 + 0.5 // 0.5 to 1
      colors.set([r, g, b], i * 3)
    }
    return [positions, colors]
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.05
    ref.current.rotation.x = Math.sin(t / 4) + 1 * 0.1
    ref.current.rotation.y = Math.sin(t / 2) + 1 * 0.1
  })

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3}>
      <PointMaterial transparent vertexColors size={0.03} sizeAttenuation={true} depthWrite={false} opacity={0.6} />
    </Points>
  )
}

function ConnectionLines() {
  const ref = useRef<THREE.LineSegments>(null!)

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(1000 * 3)
    const colors = new Float32Array(1000 * 3)
    for (let i = 0; i < 1000; i++) {
      const x = (Math.random() - 0.5) * 10
      const y = (Math.random() - 0.5) * 10
      const z = (Math.random() - 0.5) * 10
      positions.set([x, y, z], i * 3)
      
      // Generate various shades of purple
      const r = Math.random() * 0.3 + 0.2
      const g = Math.random() * 0.1
      const b = Math.random() * 0.5 + 0.5
      colors.set([r, g, b], i * 3)
    }
    return [positions, colors]
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.05
    ref.current.rotation.x = Math.sin(t / 4) +  1 * 0.1
    ref.current.rotation.y = Math.sin(t / 2) + 1 * 0.1

    const positions = ref.current.geometry.attributes.position.array as Float32Array
    const colors = ref.current.geometry.attributes.color.array as Float32Array
    let j = 0
    for (let i = 0; i < 1000; i++) {
      const ix = positions[i * 3]
      const iy = positions[i * 3 + 1]
      const iz = positions[i * 3 + 2]

      for (let k = i + 1; k < 1000; k++) {
        const kx = positions[k * 3]
        const ky = positions[k * 3 + 1]
        const kz = positions[k * 3 + 2]

        const dist = Math.sqrt((ix - kx) ** 2 + (iy - ky) ** 2 + (iz - kz) ** 2)
        if (dist < 0.7) {
          positions[j * 6] = ix
          positions[j * 6 + 1] = iy
          positions[j * 6 + 2] = iz
          positions[j * 6 + 3] = kx
          positions[j * 6 + 4] = ky
          positions[j * 6 + 5] = kz

          const alpha = 1 - dist / 0.7
          colors[j * 6] = colors[j * 6 + 3] = 0.2 + 0.3 * alpha
          colors[j * 6 + 1] = colors[j * 6 + 4] = 0.1 * alpha
          colors[j * 6 + 2] = colors[j * 6 + 5] = 0.5 + 0.5 * alpha

          j++
          if (j >= 1000) break
        }
      }
      if (j >= 1000) break
    }

    ref.current.geometry.setDrawRange(0, j * 2)
    ref.current.geometry.attributes.position.needsUpdate = true
    ref.current.geometry.attributes.color.needsUpdate = true
  })

  return (
    <lineSegments ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial attach="material" vertexColors transparent opacity={0.3} />
    </lineSegments>
  )
}

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 90 }}>
        <ParticleField />
        {/* <ConnectionLines /> */}
      </Canvas>
    </div>
  )
}

export default AnimatedBackground