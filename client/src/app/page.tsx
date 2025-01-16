'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import VideoSection from '@/components/VideoSection'
import AnimatedBackground from '@/components/animatedbg'
// import FeatureSection from '@/components/features'
import TestimonialSection from '@/components/testimonial'
import EnvironmentalSection from '@/components/env'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <AnimatedBackground />
      <Header />
      <main className="relative pt-32 sm:pt-40 md:pt-48">
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          onClick={() => window.location.href = 'https://www.orange-business.com/fr'}
          className="fixed right-4 sm:right-8 top-20 sm:top-32 z-10 px-3 sm:px-4 py-1 sm:py-1.5 border border-white/20 rounded-full text-white text-xs sm:text-sm hover:bg-white/10 transition-colors flex items-center space-x-1 cursor-pointer"
        >
          <span>Passez</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 sm:w-4 sm:h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </motion.button>

        <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-4 relative">
          <VideoSection />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mt-4 z-10 px-4 sm:px-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-4 sm:px-6 py-2.5 sm:py-3.5 bg-black border-2 border-[#FF7900] rounded-full text-white text-xs sm:text-sm hover:bg-white/5 transition-colors text-left shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            >
              Quels bénéfices mon entreprise peut-elle tirer des solutions Orange Business ?
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-4 sm:px-6 py-2.5 sm:py-3.5 bg-black border-2 border-[#FF7900] rounded-full text-white text-xs sm:text-sm hover:bg-white/5 transition-colors text-left shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            >
              Combien puis-je économiser ou gagner avec vos solutions ?
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="w-full max-w-[600px] mt-6 sm:mt-8 z-10 px-4 sm:px-6"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Commencer une conversation..."
                className="w-full px-4 sm:px-6 py-2.5 sm:py-3.5 bg-white rounded-full pr-20 sm:pr-24 text-xs sm:text-sm focus:outline-none shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              />
              <div className="absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 flex items-center space-x-1 sm:space-x-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                  </svg>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* <FeatureSection /> */}
        <TestimonialSection />
        <EnvironmentalSection />
      </main>
    </div>
  )
}

