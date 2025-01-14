import Link from 'next/link'
import { Button } from "@/components/ui/button"
import OrangeChatbot from './chatbot'
import { ModeToggle } from './toggle'

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <img src="/icon.png" alt="Orange Business Logo" className="h-10" />
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link href="#" className="text-base font-medium text-gray-500 dark:text-gray-300 hover:text-orange-500">Solutions</Link>
            <Link href="#" className="text-base font-medium text-gray-500 dark:text-gray-300 hover:text-orange-500">Services</Link>
            <Link href="#" className="text-base font-medium text-gray-500 dark:text-gray-300 hover:text-orange-500">À propos</Link>
            <Link href="#" className="text-base font-medium text-gray-500 dark:text-gray-300 hover:text-orange-500">Contact</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <OrangeChatbot />
          </div>
        </div>
      </div>
    </header>
  )
}

