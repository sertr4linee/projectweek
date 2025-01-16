'use client'

import { motion } from 'framer-motion'
import { Leaf, Recycle, Zap } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const environmentalInitiatives = [
  {
    title: "Énergie Renouvelable",
    description: "Nous utilisons 100% d'énergie renouvelable dans nos data centers.",
    icon: Zap,
  },
  {
    title: "Recyclage des Équipements",
    description: "Programme de recyclage pour tous les équipements électroniques.",
    icon: Recycle,
  },
  {
    title: "Réduction de l'Empreinte Carbone",
    description: "Objectif de réduction de 50% de notre empreinte carbone d'ici 2030.",
    icon: Leaf,
  },
]

export default function EnvironmentalSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-black to-green-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Notre Engagement Environnemental</h2>
          <p className="text-xl text-white/80">Chez Orange Business, nous innovons pour un avenir durable</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {environmentalInitiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white/5 border-green-500/20 hover:border-green-500/50 transition-colors">
                <CardContent className="p-6">
                  <initiative.icon className="w-12 h-12 text-green-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{initiative.title}</h3>
                  <p className="text-white/80">{initiative.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
