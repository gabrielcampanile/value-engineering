import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Value Engineering</h3>
            <p>CNPJ: 00.000.000/0001-00</p>
            <p>contato@valueengineering.com</p>
            <p>(00) 0000-0000</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:underline">Início</Link></li>
              <li><Link href="/servicos" className="hover:underline">Nossos Serviços</Link></li>
              <li><Link href="/sobre" className="hover:underline">Sobre Nós</Link></li>
              <li><Link href="/contato" className="hover:underline">Contato</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300">Facebook</a>
              <a href="#" className="hover:text-blue-300">LinkedIn</a>
              <a href="#" className="hover:text-blue-300">Instagram</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white mt-8 pt-4 flex flex-col items-center gap-2 md:flex-row md:justify-center md:gap-4">
          <p>&copy; 2025 Value Engineering</p>
          <p>
            Todos os direitos reservados® 
          </p>
          <p>
            Desenvolvido por <a href="https://www.linkedin.com/in/gabriel-belchior-campanile/" target="_blank" className="hover:underline"> Gabriel Belchior</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

