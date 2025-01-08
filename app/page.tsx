import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Bem-vindo à Value Engigeering</h1>
        <p className="text-xl mb-6">Especialistas em value engineering, avaliações, perícias e engenharia.</p>
        <Link href="/contato" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
          Entre em contato
        </Link>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {['Value Engineering', 'Avaliações', 'Perícias', 'Engenharia'].map((service) => (
            <div key={service} className="bg-white shadow rounded p-6 transition duration-300 ease-in-out hover:shadow-lg hover:scale-102">
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Por que escolher a Value Engigeering?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Experiência', 'Qualidade', 'Inovação'].map((reason) => (
            <div key={reason} className="flex flex-col items-center text-center">
              <div className="bg-blue-100 rounded-full p-4 mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{reason}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Projetos Recentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white shadow rounded overflow-hidden transition duration-300 ease-in-out hover:shadow-lg hover:scale-102">
              <Image
                src={`/placeholder.svg?height=200&width=300&text=Projeto ${i}`}
                alt={`Projeto ${i}`}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Projeto {i}</h3>
                <p>Breve descrição do projeto e seus resultados.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

