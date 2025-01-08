import Link from 'next/link'
import Logo from './Logo'
import MobileMenu from './MobileMenu'

const Header = () => {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Logo className="w-10 h-10" />
          <span className="text-xl font-bold">Value Engineering</span>
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:underline">Início</Link></li>
            <li><Link href="/servicos" className="hover:underline">Nossos Serviços</Link></li>
            <li><Link href="/sobre" className="hover:underline">Sobre Nós</Link></li>
            <li><Link href="/contato" className="hover:underline">Contato</Link></li>
          </ul>
        </nav>
        <MobileMenu />
      </div>
    </header>
  )
}

export default Header

