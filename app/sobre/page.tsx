import Image from 'next/image'

export default function Sobre() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Sobre a Value Engineering</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <p className="text-lg mb-4">
            A Value Engineering é uma empresa líder em soluções de engenharia, especializada em value engineering, avaliações, perícias e projetos de engenharia inovadores.
          </p>
          <p className="text-lg mb-4">
            Fundada em [ano], nossa equipe de engenheiros altamente qualificados tem se dedicado a oferecer serviços de excelência, combinando experiência técnica com uma abordagem centrada no cliente.
          </p>
          <p className="text-lg">
            Nossa missão é proporcionar soluções que otimizem o valor, reduzam custos e melhorem a eficiência dos projetos de nossos clientes, sempre com um compromisso inabalável com a qualidade e a inovação.
          </p>
        </div>
        <div>
          <Image
            src="/placeholder.svg?height=400&width=600&text=Equipe Value Engineering"
            alt="Equipe Value Engineering"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      
      <h2 className="text-3xl font-semibold mb-6">Nossa Equipe</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {['João Silva', 'Maria Oliveira', 'Carlos Santos'].map((name, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-6 text-center">
            <Image
              src={`/placeholder.svg?height=150&width=150&text=${name}`}
              alt={name}
              width={150}
              height={150}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="text-gray-600">Cargo na empresa</p>
          </div>
        ))}
      </div>
    </div>
  )
}

