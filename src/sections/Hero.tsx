import { useRef, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, Torus, Box, Icosahedron } from '@react-three/drei'
import * as THREE from 'three'

// Animated floating shapes
function FloatingShape({ position, scale, color, speed }: { position: [number, number, number]; scale: number; color: string; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed) * 0.3
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * speed * 0.5) * 0.3
    }
  })
  
  return (
    <Float speed={speed * 2} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  )
}

// Blood drop 3D shape
function BloodDrop({ position, scale }: { position: [number, number, number]; scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  // Create blood drop shape
  const shape = useMemo(() => {
    const s = new THREE.Shape()
    s.moveTo(0, -1.5)
    s.bezierCurveTo(0.8, -0.5, 1, 0.5, 0, 2)
    s.bezierCurveTo(-1, 0.5, -0.8, -0.5, 0, -1.5)
    return s
  }, [])
  
  const extrudeSettings = useMemo(() => ({
    steps: 2,
    depth: 0.5,
    bevelEnabled: true,
    bevelThickness: 0.3,
    bevelSize: 0.2,
    bevelOffset: 0,
    bevelSegments: 8,
  }), [])
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2
    }
  })
  
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale} rotation={[0.3, 0, 0]}>
        <extrudeGeometry args={[shape, extrudeSettings]} />
        <meshStandardMaterial
          color="#dc2626"
          roughness={0.2}
          metalness={0.8}
          emissive="#991b1b"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  )
}

// Glowing sphere
function GlowingSphere({ position, scale, color }: { position: [number, number, number]; scale: number; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.scale.setScalar(scale + Math.sin(state.clock.elapsedTime * 2) * 0.1)
    }
  })
  
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={position} scale={scale}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0}
          metalness={0.9}
        />
      </Sphere>
    </Float>
  )
}

// Rotating torus
function RotatingTorus({ position, scale, color }: { position: [number, number, number]; scale: number; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.7
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })
  
  return (
    <Float speed={1} rotationIntensity={1} floatIntensity={1}>
      <Torus ref={meshRef} args={[1, 0.3, 32, 64]} position={position} scale={scale}>
        <meshStandardMaterial
          color={color}
          roughness={0.3}
          metalness={0.9}
          wireframe
        />
      </Torus>
    </Float>
  )
}

// Main 3D scene
function Scene3D() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -5]} intensity={0.8} color="#dc2626" />
      <pointLight position={[5, 5, 10]} intensity={0.5} color="#3b82f6" />
      
      {/* Blood drop - center */}
      <BloodDrop position={[0, 0, 0]} scale={0.8} />
      
      {/* Floating shapes */}
      <FloatingShape position={[-4, 2, -2]} scale={0.5} color="#ef4444" speed={0.5} />
      <FloatingShape position={[4, -1.5, -3]} scale={0.7} color="#b91c1c" speed={0.7} />
      <FloatingShape position={[-3, -2, -4]} scale={0.4} color="#f87171" speed={0.6} />
      <FloatingShape position={[3, 2.5, -2]} scale={0.35} color="#dc2626" speed={0.8} />
      
      {/* Glowing spheres */}
      <GlowingSphere position={[5, 0, -5]} scale={0.4} color="#ef4444" />
      <GlowingSphere position={[-5, 1, -6]} scale={0.3} color="#b91c1c" />
      
      {/* Rotating torus */}
      <RotatingTorus position={[0, -3, -8]} scale={2} color="#dc2626" />
    </>
  )
}

export function Hero() {
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: 'transparent' }}
        >
          <Scene3D />
        </Canvas>
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center text-center gap-5 px-8">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(3rem,10vw,7.3125rem)] font-medium leading-[0.94] tracking-tight text-white"
          style={{ 
            fontFamily: "'Inter', 'SF Pro Display', -apple-system, sans-serif",
            textShadow: '0 0 60px rgba(220, 38, 38, 0.5), 0 0 120px rgba(220, 38, 38, 0.3)' 
          }}
        >
          AI startups at
          <br />
          <span className="text-red-500">rocket speed</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-mono text-white/70 text-sm md:text-base tracking-[0.08em] uppercase max-w-xl"
        >
          Turn concepts into real products — used, scaled and monetized
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-mono text-white/40 text-sm tracking-[0.72em] uppercase mt-16"
        >
          Scroll down to explore
        </motion.p>
      </div>
    </div>
  )
}