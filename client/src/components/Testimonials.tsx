export default function Testimonials() {
  return (
    <section className="bg-orange-50 dark:bg-gray-900 py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Ce que nos clients disent
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Découvrez comment Orange Business a aidé des entreprises comme la vôtre à atteindre leurs objectifs.
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            <blockquote className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <div className="lg:flex lg:items-center lg:gap-x-8">
                <img
                  className="h-12 w-12 rounded-full lg:h-16 lg:w-16"
                  src="/placeholder.svg?height=64&width=64"
                  alt="Client Avatar"
                />
                <div className="mt-4 lg:mt-0">
                  <p className="text-lg font-semibold dark:text-white text-gray-900">Sophie Martin</p>
                  <p className="text-base dark:text-gray-300 text-gray-600">Directrice IT, Entreprise XYZ</p>
                </div>
              </div>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                "Grâce aux solutions cloud d'Orange Business, nous avons pu moderniser notre infrastructure IT et améliorer significativement notre efficacité opérationnelle. Leur expertise et leur support ont été inestimables tout au long de notre transformation numérique."
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}

