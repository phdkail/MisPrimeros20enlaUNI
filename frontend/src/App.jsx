import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner"; // 🔹 El banner SIEMPRE estará presente arriba
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // 🔹 El footer SIEMPRE estará presente abajo
import Participants from "./components/Participants";
import Championships from "./components/Championships"; // ✅ Nueva Sección de Campeonatos
import ContactCard from "./components/ContactCard"; // ✅ Agregado aquí
import DelEvento from "./components/DelEvento"; // ✅ Importamos el nuevo componente
import ImageCarousel from "./components/ImageCarousel"; // ✅ Importamos el carrusel
import Resultados from "./components/Resultados"; // ✅ Importamos el nuevo componente

import "./styles/navbar.css";
import "./styles/banner.css";
import "./styles/footer.css";
import "./styles/championships.css"; // ✅ Importamos los estilos de Campeonatos
import "./styles/contactCard.css"; // ✅ Importamos estilos de ContactCard
import "./styles/participants.css"; // ✅ Importamos estilos de Participants
import "./styles/delEvento.css"; // ✅ Importamos los estilos de DelEvento
import "./styles/imageCarousel.css"; // ✅ Importamos los estilos del carrusel
import "./styles/resultados.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Banner />

        <div className="content">
          <Routes>
            {/* ✅ En la ruta "/" se muestra el carrusel */}
            <Route
              path="/"
              element={
                <>
                  <ImageCarousel />
                  <h2>...</h2>
                </>
              }
            />
            <Route path="/about" element={<DelEvento />} /> {/* ✅ Ruta agregada */}
            <Route path="/teams" element={<Participants />} />
            <Route path="/championships" element={<Championships />} /> {/* ✅ Nueva Ruta */}
            <Route path="/results" element={<Resultados />} /> {/* ✅ Nueva Ruta */}
            <Route path="/contact" element={<ContactCard />} /> {/* ✅ Enlazamos ContactCard aquí */}
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
