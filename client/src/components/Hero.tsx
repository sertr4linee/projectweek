import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="bg-orange-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Transformez votre entreprise avec Orange Business
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Des solutions innovantes pour accélérer votre transformation numérique et booster votre performance.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button size="lg">Commencer maintenant</Button>
              <Button variant="outline" className="bg-orange-500 text-white hover:bg-orange-600" size="lg">En savoir plus</Button>
            </div>
          </div>
          <div className="hidden md:block">
            <img src="/placeholder.svg?height=400&width=600" alt="Business Illustration" className="w-full h-auto rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </div>
  )
}

