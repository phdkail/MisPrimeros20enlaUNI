import { useState } from "react";
import campeonatos from "../data/campeonatos"; // Importar los datos
import "../styles/championships.css"; // Importar los estilos

export default function Championships() {
  const [order, setOrder] = useState("default");

  const sortedChampionships = [...campeonatos].sort((a, b) => {
    if (order === "fecha") return b.id - a.id; // Ordenar por fecha
    return 0;
  });

  return (
    <div className="championships-container">
      <h1>Campeonatos</h1>

      <div className="filters">
        <label>Ordenar por: </label>
        <select onChange={(e) => setOrder(e.target.value)} value={order}>
          <option value="default">Por defecto</option>
          <option value="fecha">Más recientes</option>
        </select>
      </div>

      <div className="cards">
        {sortedChampionships.map((event) => (
          <div className="card" key={event.id}>
            <img src={event.flyer} alt={event.nombre} />
            <h2>{event.edicion}</h2>
            <p><strong>Organizador:</strong> {event.organizador}</p>
            <p><strong>Motivo:</strong> {event.motivo}</p>
            <p><strong>🏆 Campeón:</strong> {event.campeon}</p>
            <p><strong>🥈 Subcampeón:</strong> {event.subcampeon}</p>
            <p><strong>🥉 Tercer Lugar:</strong> {event.tercerLugar}</p>
            <p><strong>⚽ Goleador:</strong> {event.goleador.nombre} ({event.goleador.equipo})</p>
            <p><strong>🌟 Mejor Jugador:</strong> {event.mejorJugador.nombre} ({event.mejorJugador.equipo})</p>
            <p><strong>🧤 Mejor Arquero:</strong> {event.mejorArquero.nombre} ({event.mejorArquero.equipo})</p>
          </div>
        ))}
      </div>
    </div>
  );
}
