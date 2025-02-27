import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import equiposData from "../data/equipos"; // Archivo con los datos de los equipos
import "../../src/styles/participants.css"; // Ubicación correcta

export default function Participants() {
  const [order, setOrder] = useState("default");
  const [equipos, setEquipos] = useState([...equiposData]); // Estado inicial con equipos
  const navigate = useNavigate(); // Para redirigir a la página principal

  useEffect(() => {
    let sortedTeams = [...equipos]; // Clonamos el estado actual

    if (order === "participaciones") {
      sortedTeams.sort((a, b) => b.participaciones - a.participaciones);
    } else if (order === "titulos") {
      sortedTeams.sort((a, b) => b.titulos - a.titulos);
    } else {
      sortedTeams = [...equiposData]; // Si es "default", vuelve al original
    }

    setEquipos(sortedTeams);
  }, [order]); // Se ejecuta cuando cambia `order`

  return (
    <div className="participants-container">
      <h1>Equipos Participantes</h1>
      
      <div className="filters">
        <label>Ordenar por: </label>
        <select onChange={(e) => setOrder(e.target.value)} value={order}>
          <option value="default">Por defecto</option>
          <option value="participaciones">Participaciones</option>
          <option value="titulos">Títulos</option>
        </select>
      </div>

      <div className="cards">
        {equipos.map((team) => (
          <div className="card" key={team.codigo || team.nombre}>
            <img src={`/images/equipos/${team.nombre}.jpeg`} alt={team.nombre} />
            <h2>{team.nombre}</h2>
            <p><strong>Código:</strong> {team.codigo || "No disponible"}</p>
            <p><strong>Mejor ubicación:</strong> {team.titulos > 0 ? "Campeón" : "Fase de Grupos"}</p>
            <p><strong>Participaciones:</strong> {team.participaciones}</p>
            <p><strong>Títulos:</strong> {team.titulos}</p>
          </div>
        ))}
      </div>

      {/* Botón para regresar a la página principal */}
      <button className="back-button" onClick={() => navigate("/")}>
        Volver a Inicio
      </button>
    </div>
  );
}
