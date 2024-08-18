import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
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
      const z = (Math.random() - 0.5) * 14
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

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas camera={{ position: [-1, 2, 5], fov: 60 }}>
        <ParticleField />
        {/* <ConnectionLines /> */}
      </Canvas>
    </div>
  )
}

export default AnimatedBackground