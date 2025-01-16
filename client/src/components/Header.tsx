'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
      {/* Top bar - Hidden on mobile */}
      <div className="hidden md:block border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center py-2 px-6 text-sm text-white">
            <div className="flex items-center space-x-4">
              <Link href="#" className="hover:text-[#FF7900] transition-colors">Professionnels</Link>
              <Link href="#" className="hover:text-[#FF7900] transition-colors flex items-center space-x-1">
                <span>Orange Jobs</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 opacity-70">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                <span>France</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 opacity-70">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </div>
              <Link href="#" className="hover:text-[#FF7900] transition-colors flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 opacity-70">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
                <span>Assistance</span>
              </Link>
              <Link href="#" className="hover:text-[#FF7900] transition-colors flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 opacity-70">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <span>Espace client</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Image
                src="/icon.png"
                alt="Orange Business"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-white font-semibold ml-2 hidden sm:block">Business</span>
            </div>

            {/* Menu Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-white/90 hover:text-[#FF7900] text-sm font-medium transition-colors">
                Vos enjeux
              </Link>
              <Link href="#" className="text-white/90 hover:text-[#FF7900] text-sm font-medium transition-colors">
                Nos solutions
              </Link>
              <Link href="#" className="text-white/90 hover:text-[#FF7900] text-sm font-medium transition-colors">
                Pourquoi nous ?
              </Link>
              <Link href="#" className="text-white/90 hover:text-[#FF7900] text-sm font-medium transition-colors flex items-center space-x-2">
                <span>Votre assistant Ona</span>
                <div className="w-5 h-5 rounded-full bg-[#FF7900]/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 text-[#FF7900]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
              </Link>
            </nav>

            {/* Search Bar - Desktop */}
            <div className="hidden md:block">
              <div className="relative">
                <div className="flex items-center bg-zinc-800/50 rounded-full pl-4 pr-3 py-2">
                  <input
                    type="search"
                    placeholder="Que cherchez-vous ?"
                    className="bg-transparent text-sm text-white w-48 focus:outline-none"
                  />
                  <button className="ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white opacity-70">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Bouton Menu Mobile */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-6 h-6 text-white"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-4 pt-2 pb-3 space-y-1 bg-black/95 border-t border-white/10">
            <Link href="#" className="block px-3 py-2 text-base font-medium text-white/90 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
              Vos enjeux
            </Link>
            <Link href="#" className="block px-3 py-2 text-base font-medium text-white/90 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
              Nos solutions
            </Link>
            <Link href="#" className="block px-3 py-2 text-base font-medium text-white/90 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
              Pourquoi nous ?
            </Link>
            <Link href="#" className="block px-3 py-2 text-base font-medium text-white/90 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
              Votre assistant Ona
            </Link>
            {/* Search Bar - Mobile */}
            <div className="px-3 py-2">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Que cherchez-vous ?"
                  className="w-full bg-zinc-800/50 text-white text-sm rounded-full px-4 py-2 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

