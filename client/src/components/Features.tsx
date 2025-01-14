import { Cloud, Shield, Zap } from 'lucide-react'

const features = [
  {
    name: 'Cloud Computing',
    description: 'Optimisez vos opérations avec nos solutions cloud sécurisées et évolutives.',
    icon: Cloud,
  },
  {
    name: 'Cybersécurité',
    description: 'Protégez vos données et votre infrastructure avec nos services de sécurité avancés.',
    icon: Shield,
  },
  {
    name: 'IA',
    description: 'Exploitez le potentiel de l\'IA pour transformer votre industrie.',
    icon: Zap,
  },
]

export default function Features() {
  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-orange-600">Nos Solutions</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Tout ce dont votre entreprise a besoin pour réussir
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Découvrez nos solutions innovantes conçues pour répondre aux défis de votre secteur et propulser votre croissance.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <feature.icon className="h-5 w-5 flex-none text-orange-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href="#" className="text-sm font-semibold leading-6 text-orange-600">
                      En savoir plus <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

