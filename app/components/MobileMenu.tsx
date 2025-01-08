'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="lg:hidden">
      <button onClick={toggleMenu} className="p-2">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isOpen && (
        <div className="absolute left-0 right-0 bg-blue-600 py-2">
          <nav>
            <ul className="flex flex-col items-center space-y-2">
              <li><Link href="/" className="block px-4 py-2 hover:bg-blue-700 w-full text-center" onClick={toggleMenu}>Início</Link></li>
              <li><Link href="/servicos" className="block px-4 py-2 hover:bg-blue-700 w-full text-center" onClick={toggleMenu}>Nossos Serviços</Link></li>
              <li><Link href="/sobre" className="block px-4 py-2 hover:bg-blue-700 w-full text-center" onClick={toggleMenu}>Sobre Nós</Link></li>
              <li><Link href="/contato" className="block px-4 py-2 hover:bg-blue-700 w-full text-center" onClick={toggleMenu}>Contato</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  )
}

export default MobileMenu

