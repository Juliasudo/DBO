import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { useRef, useState } from 'react'
import * as random from 'maath/random/dist/maath-random.esm'

const Particles = () => {
  const ref = useRef<any>()
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }))

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const WhatWeAreBuilding = () => {
  return (
    <section className="relative h-96 w-full flex justify-center items-center text-center p-4">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Particles />
        </Canvas>
      </div>
      <div className="z-10">
        <h2 className="text-3xl md:text-4xl font-bold max-w-2xl">
          A powerful assistant for deploying Web3 applications with ease.
        </h2>
      </div>
    </section>
  )
}

export default WhatWeAreBuilding
