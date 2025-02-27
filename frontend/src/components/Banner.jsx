import { Link } from "react-router-dom"; // ✅ Importamos Link para la navegación
import bannerImg from "../assets/logo.png";

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>Mis Primeros 20 en la UNI</h1>
        <p>¡Bienvenidos al evento que busca confraternizar a todos los amigos de la UNI!</p>
        
        {/* ✅ Enlace a la página "DelEvento" */}
        <Link to="/about">
          <button>Conoce Más</button>
        </Link>
      </div>

      <img src={bannerImg} alt="Banner" />
    </div>
  );
}
