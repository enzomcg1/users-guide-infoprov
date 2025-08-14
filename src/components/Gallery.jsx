import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: '/galeria/gallery1.jpeg',
      alt: 'Proyecto 1 - Diseño Web',
      title: 'Diseño Web Moderno',
      category: 'Diseño'
    },
    {
      src: '/galeria/gallery2.jpeg',
      alt: 'Proyecto 2 - Desarrollo Frontend',
      title: 'Interfaz de Usuario',
      category: 'Desarrollo'
    },
    {
      src: '/galeria/gallery3.jpeg',
      alt: 'Proyecto 3 - Herramientas de Contenido',
      title: 'Dashboard de Contenido',
      category: 'Herramientas'
    },
    {
      src: '/galeria/gallery4.jpeg',
      alt: 'Proyecto 4 - Landing Page',
      title: 'Landing Page Optimizada',
      category: 'Diseño'
    },
    {
      src: '/galeria/gallery5.jpeg',
      alt: 'Proyecto 5 - Aplicación Web',
      title: 'Aplicación Web Completa',
      category: 'Desarrollo'
    }
  ];

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Galería de Proyectos
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Explora algunos de nuestros trabajos más recientes. Cada proyecto 
            representa nuestra pasión por el diseño, desarrollo y herramientas 
            que transforman ideas en realidades digitales.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-white"
              onClick={() => openModal(image, index)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <ImageIcon size={16} />
                    <span className="text-sm font-medium bg-white/20 px-2 py-1 rounded-full">
                      {image.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                  <p className="text-sm text-white/80">Click para ver más</p>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X size={32} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative"
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium bg-white/20 text-white px-3 py-1 rounded-full">
                    {selectedImage.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {currentIndex + 1} de {images.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery; 