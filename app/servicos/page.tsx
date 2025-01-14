import Image from 'next/image'

const services = [
  {
    title: 'Value Engineering',
    description: 'Otimizamos projetos para maximizar o valor e minimizar custos sem comprometer a qualidade.',
    image: '/image.jpg'
  },
  {
    title: 'Avaliações',
    description: 'Realizamos avaliações precisas de propriedades e ativos para diversos fins.',
    image: '/image.jpg'
  },
  {
    title: 'Perícias',
    description: 'Oferecemos serviços de perícia técnica para resolver disputas e esclarecer questões complexas.',
    image: '/image.jpg'
  },
  {
    title: 'Engenharia',
    description: 'Fornecemos soluções de engenharia inovadoras para uma variedade de projetos e desafios.',
    image: '/image.jpg'
  }
]

export default function Servicos() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Nossos Serviços</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow rounded-lg overflow-hidden transition duration-300 ease-in-out hover:shadow-lg hover:scale-102">
            <Image
              src={service.image}
              alt={service.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

