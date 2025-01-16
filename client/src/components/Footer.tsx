import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center">
              <Image
                src="/icon.png"
                alt="Orange Business"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-white font-semibold ml-2">Business</span>
            </div>
            <p className="mt-4 text-sm text-white/60">
              Solutions innovantes pour transformer votre entreprise et accélérer votre croissance.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Solutions</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="#" className="text-sm text-white/60 hover:text-[#FF7900] transition-colors">
                  Cloud
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/60 hover:text-[#FF7900] transition-colors">
                  Cybersécurité
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/60 hover:text-[#FF7900] transition-colors">
                  IoT & Analytics
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/60 hover:text-[#FF7900] transition-colors">
                  Connectivité
                </Link>
              </li>
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Entreprise</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="#" className="text-sm text-white/60 hover:text-[#FF7900] transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/60 hover:text-[#FF7900] transition-colors">
                  Carrières
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/60 hover:text-[#FF7900] transition-colors">
                  RSE
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/60 hover:text-[#FF7900] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Ressources</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="#" className="text-sm text-white/60 hover:text-[#FF7900] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/60 hover:text-[#FF7900] transition-colors">
                  Études de cas
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/60 hover:text-[#FF7900] transition-colors">
                  Webinaires
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/60 hover:text-[#FF7900] transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Barre inférieure */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <Link href="#" className="text-white/60 hover:text-[#FF7900] text-sm">
                Mentions légales
              </Link>
              <Link href="#" className="text-white/60 hover:text-[#FF7900] text-sm">
                Politique de confidentialité
              </Link>
              <Link href="#" className="text-white/60 hover:text-[#FF7900] text-sm">
                Cookies
              </Link>
            </div>
            <p className="text-white/60 text-sm">
              © 2024 Orange Business. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 