'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function SkipButton() {
  return (
    <Link href="https://www.orange-business.com/fr" target="_blank" rel="noopener noreferrer">
      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed right-4 sm:right-8 top-20 sm:top-32 z-10 px-3 sm:px-4 py-1 sm:py-1.5 border border-white/20 rounded-full text-white text-xs sm:text-sm hover:bg-white/10 transition-colors flex items-center space-x-1 cursor-pointer"
      >
        <span>Passez</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 sm:w-4 sm:h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </motion.button>
    </Link>
  )
} 