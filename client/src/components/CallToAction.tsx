import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <div className="bg-orange-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Prêt à transformer votre entreprise ?
        </h2>
        <p className="mt-4 text-lg leading-6 text-orange-100">
          Contactez-nous dès aujourd'hui pour découvrir comment Orange Business peut vous aider à atteindre vos objectifs.
        </p>
        <div className="mt-8 flex">
          <Button size="lg" variant="secondary">
            Demander une démo
          </Button>
        </div>
      </div>
    </div>
  )
}

