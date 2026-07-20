import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, Torus } from '@react-three/drei'
import * as THREE from 'three'

// 3D Scene for each product card
function ProductScene() {
  const meshRef = useRef<THREE.Mesh>(null)
  const torusRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.elapsedTime * 0.4
      torusRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -5]} intensity={0.8} color="#dc2626" />

      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <Sphere ref={meshRef} args={[1, 32, 32]} position={[0, 0, 0]} scale={0.6}>
          <MeshDistortMaterial
            color="#dc2626"
            attach="material"
            distort={0.3}
            speed={1.5}
            roughness={0.2}
            metalness={0.8}
            emissive="#991b1b"
            emissiveIntensity={0.3}
          />
        </Sphere>
      </Float>

      <Torus ref={torusRef} args={[0.9, 0.05, 16, 32]} position={[0, 0, 0]} scale={0.6}>
        <meshStandardMaterial color="#dc2626" roughness={0.3} metalness={0.9} wireframe />
      </Torus>
    </>
  )
}

const products = [
  {
    id: 'foreign-trade-ai',
    name: 'Foreign Trade AI',
    subtitle: 'Global Trade Automation',
    description:
      'Collect customer data automatically and send personalized campaigns via Email, WhatsApp, and social media. AI-powered loop system for filtering, retargeting, and automated follow-ups to maximize conversions.',
    features: ['Data Collection', 'Email Automation', 'WhatsApp Campaigns', 'AI Loop Retargeting'],
  },
  {
    id: 'customer-support-ai',
    name: 'Customer Support AI',
    subtitle: 'AI Agents on Your Data',
    description:
      'Deploy intelligent support agents trained on your company data. 24/7 multilingual assistance that resolves queries autonomously, integrates with existing CRMs, and continuously improves from every interaction.',
    features: ['Custom Training', '24/7 Support', 'Multi-language', 'CRM Integration'],
  },
]

export function Products() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-2"
            style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, sans-serif" }}
          >
            Our Products
          </h2>
          <p className="text-sm sm:text-base text-white/40 max-w-2xl mx-auto">
            AI-powered solutions to accelerate your business growth
          </p>
        </motion.div>

        {/* Products Grid - Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-white/10 bg-white/3 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-white/6">
                {/* 3D Scene - Hidden on mobile, visible on larger screens */}
                <div className="hidden sm:block absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 z-0 opacity-60">
                  <Canvas
                    camera={{ position: [0, 0, 3], fov: 45 }}
                    gl={{ antialias: true, alpha: true }}
                    style={{ background: 'transparent' }}
                  >
                    <ProductScene />
                  </Canvas>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="mb-3 sm:mb-4 pr-0 sm:pr-20 lg:pr-24">
                    <h3
                      className="text-xl sm:text-2xl lg:text-2xl font-semibold text-white mb-1"
                      style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, sans-serif" }}
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-white/40 tracking-wide uppercase">
                      {product.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-white/50 leading-relaxed mb-4 sm:mb-6 text-xs sm:text-sm lg:text-sm">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {product.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium text-white/60 bg-white/5 border border-white/10 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-4 sm:mt-6 lg:mt-8 pt-4 sm:pt-6 border-t border-white/10">
                    <button className="group/btn flex items-center gap-2 text-xs sm:text-sm font-medium text-white/60 hover:text-white transition-colors">
                      Learn more
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover/btn:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}