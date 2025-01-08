import { MapPin } from 'lucide-react'

const Location = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <MapPin className="mr-2" /> Nossa Localização
      </h2>
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1498209666406!2d-46.65429378502164!3d-23.56500968468039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1637176018191!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          className="w-full h-full rounded-lg"
        ></iframe>
      </div>
      <p className="text-lg">
        Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100
      </p>
    </div>
  )
}

export default Location

