import { useState } from "react";
import Modal from "react-modal";
import resultados from "../data/resultados";
import "../styles/resultados.css"; // Importamos estilos

Modal.setAppElement("#root");

export default function Resultados() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="resultados-container">
      <h1>Resultados de los Campeonatos</h1>

      <div className="resultados-grid">
        {resultados.map((evento) => (
          <div key={evento.id} className="resultado-card">
            <img
              src={evento.imagen}
              alt={`Resultado ${evento.id}`}
              className="resultado-img"
              onClick={() => openModal(evento.imagen)}
            />
            <h2>{evento.evento}</h2>
            <p><strong>Organizador:</strong> {evento.organizador}</p>
            <p><strong>Campeón:</strong> {evento.campeon}</p>
            <p><strong>Equipos Participantes:</strong></p>
            <ul>
              {evento.participantes.map((team, index) => (
                <li key={index}>{team}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Modal para ver la imagen en grande */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <button className="modal-close" onClick={closeModal}>X</button>
        <img src={selectedImage} alt="Imagen ampliada" className="modal-image" />
      </Modal>
    </div>
  );
}
