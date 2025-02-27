import { useState, useEffect } from "react";
import "../styles/imageCarousel.css"; // Importamos los estilos

// Rutas de las imágenes desde public/images
const images = [
  "/images/campeonatos/campeonato1.png",
  "/images/campeonatos/campeonato2.png",
  "/images/campeonatos/campeonato3.png",
  "/images/campeonatos/campeonato4.png",
  "/images/campeonatos/campeonato5.png",
  "/images/equipos/Sport La Mona.jpeg",
  "/images/equipos/Purito FG.jpeg",
  "/images/equipos/Azules y Cremas.jpeg",
  "/images/equipos/Amigos de Mera.jpeg",
  "/images/equipos/Chistes.jpeg",
  "/images/equipos/Jauría FC.jpeg",
  "/images/equipos/Cachimbos.jpeg",
  "/images/equipos/Cirrosos.jpeg",
  "/images/equipos/Real FIC.jpeg",
  "/images/equipos/No Fear.jpeg",
  "/images/equipos/Botados.jpeg",
  "/images/equipos/Newpy.jpeg",
  "/images/equipos/Virginia FC.jpeg",
  "/images/equipos/Geopersis.jpeg",
  "/images/equipos/Scalogno FC.jpeg",
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambia la imagen automáticamente cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Función para avanzar a la siguiente imagen
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Función para retroceder a la imagen anterior
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      {/* Botón para ir a la imagen anterior */}
      <button className="carousel-btn prev" onClick={prevImage}>
        ❮
      </button>

      {/* Imagen del carrusel */}
      <div className="carousel-image">
        <img src={images[currentIndex]} alt={`Imagen ${currentIndex + 1}`} />
      </div>

      {/* Botón para ir a la siguiente imagen */}
      <button className="carousel-btn next" onClick={nextImage}>
        ❯
      </button>
    </div>
  );
}
