import Image from 'next/image'

const Gallery = () => {
  const images = [
    { src: '/placeholder.svg?height=300&width=400&text=Projeto 1', alt: 'Projeto 1' },
    { src: '/placeholder.svg?height=300&width=400&text=Projeto 2', alt: 'Projeto 2' },
    { src: '/placeholder.svg?height=300&width=400&text=Projeto 3', alt: 'Projeto 3' },
    { src: '/placeholder.svg?height=300&width=400&text=Projeto 4', alt: 'Projeto 4' },
    { src: '/placeholder.svg?height=300&width=400&text=Projeto 5', alt: 'Projeto 5' },
    { src: '/placeholder.svg?height=300&width=400&text=Projeto 6', alt: 'Projeto 6' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-6">Galeria de Projetos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative aspect-w-4 aspect-h-3">
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery

