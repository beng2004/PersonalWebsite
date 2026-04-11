import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const ref = useRef<THREE.Points>(null!)
  const [positions, colors] = useMemo(() => {
    const count = 1800
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 14
      const y = (Math.random() - 0.5) * 14
      const z = (Math.random() - 0.5) * 16
      positions.set([x, y, z], i * 3)

      const r = Math.random() * 0.2 + 0.3
      const g = Math.random() * 0.25 + 0.35
      const b = Math.random() * 0.35 + 0.55
      colors.set([r, g, b], i * 3)
    }
    return [positions, colors]
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.1
    ref.current.rotation.x = Math.sin(t / 4) * 0.25
    ref.current.rotation.y = Math.sin(t / 2) * 0.2
    ref.current.position.y = Math.sin(t / 3) * 0.15
  })

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3}>
      <PointMaterial transparent vertexColors size={0.025} sizeAttenuation={true} depthWrite={false} opacity={0.65} />
    </Points>
  )
}

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-80">
      <Canvas camera={{ position: [-1, 1.5, 6], fov: 62 }}>
        <ParticleField />
      </Canvas>
    </div>
  )
}

export default AnimatedBackground