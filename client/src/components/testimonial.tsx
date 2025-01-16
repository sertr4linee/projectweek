'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, User, Building2, Briefcase, Factory } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote: "Orange Business a révolutionné notre infrastructure IT. Leur solution cloud nous a permis de réduire nos coûts de 30% tout en augmentant notre agilité. C'est un véritable game-changer pour notre entreprise.",
    author: "Marie Dupont",
    position: "CTO, TechInnovate SA",
    company: "TechInnovate",
  },
  {
    quote: "La cybersécurité était notre principal défi. Grâce aux solutions d'Orange Business, nous avons renforcé notre protection et gagné la confiance de nos clients. Leur expertise est inestimable.",
    author: "Jean Martin",
    position: "CISO, SecureFinance",
    company: "SecureFinance",
  },
  {
    quote: "L'implémentation de l'IA d'Orange Business dans notre service client a été transformatrice. Nous avons vu une amélioration de 50% dans la satisfaction client et une réduction significative des temps de réponse.",
    author: "Sophie Lefebvre",
    position: "Directrice Innovation, RetailPlus",
    company: "RetailPlus",
  },
  {
    quote: "Le réseau 5G d'Orange Business a ouvert de nouvelles possibilités pour notre IoT industriel. Nous avons pu optimiser nos opérations et réduire les temps d'arrêt de 40%. C'est un avantage concurrentiel majeur.",
    author: "Pierre Moreau",
    position: "Directeur des Opérations, IndustrieConnect",
    company: "IndustrieConnect",
  },
]

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ce que disent nos clients</h2>
          <p className="text-xl text-white/80">Découvrez comment Orange Business transforme les entreprises</p>
        </motion.div>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="flex-shrink-0">
                      {currentIndex === 0 && <User size={80} className="text-[#FF7900]" />}
                      {currentIndex === 1 && <Building2 size={80} className="text-[#FF7900]" />}
                      {currentIndex === 2 && <Briefcase size={80} className="text-[#FF7900]" />}
                      {currentIndex === 3 && <Factory size={80} className="text-[#FF7900]" />}
                    </div>
                    <div className="flex-grow">
                      <p className="text-white/90 text-lg mb-4 italic">&quot;{testimonials[currentIndex].quote}&quot;</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-semibold">{testimonials[currentIndex].author}</p>
                          <p className="text-white/70 text-sm">{testimonials[currentIndex].position}</p>
                        </div>
                        <div className="flex items-center">
                          {currentIndex === 0 && <User size={40} className="text-[#FF7900] mr-2" />}
                          {currentIndex === 1 && <Building2 size={40} className="text-[#FF7900] mr-2" />}
                          {currentIndex === 2 && <Briefcase size={40} className="text-[#FF7900] mr-2" />}
                          {currentIndex === 3 && <Factory size={40} className="text-[#FF7900] mr-2" />}
                          <span className="text-white/70 text-sm">{testimonials[currentIndex].company}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
          <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevTestimonial}
              className="text-white hover:bg-white/10"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={nextTestimonial}
              className="text-white hover:bg-white/10"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full mx-1 ${
                index === currentIndex ? 'bg-[#FF7900]' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

