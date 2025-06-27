'use client';

import { Suspense, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';

// 3D Interactive Stars Component
function Stars(props: any) {
  const ref = useRef<any>();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.4 }));
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
      
      // Make it react to mouse movement
      ref.current.rotation.y += state.mouse.x * 0.02;
      ref.current.rotation.x += state.mouse.y * 0.02;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center text-center hero-gradient text-white p-4 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-70">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <Stars />
          </Suspense>
          <Preload all />
        </Canvas>
      </div>
      
      <motion.div
        className="z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <h1 className="text-6xl md:text-8xl font-bold font-display mb-4 tracking-tighter">Zeus</h1>
        <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto text-gray-200">
          The ultimate AI-powered assistant for seamless Web3 application deployment.
        </p>
        
        <motion.button
          className="bg-white text-brand-blue font-bold py-3 px-8 rounded-full shadow-lg transition-all"
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,255,255,0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
