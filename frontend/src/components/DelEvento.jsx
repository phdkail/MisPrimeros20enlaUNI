import "../styles/delEvento.css"; // Importamos los estilos

export default function DelEvento() {
  return (
    <div className="del-evento-container">
      <h1>Origen del Campeonato "Mis Primeros 20 en la UNI"</h1>
      
      <div className="event-description">
        <p>
          El campeonato <strong>"Mis Primeros 20 en la UNI"</strong> nació como una iniciativa para conmemorar
          los 20 años de ingreso de varias promociones a la Universidad Nacional de Ingeniería (UNI) - Facultad de Ingeniería Civil.
          Lo que comenzó como una idea para reencontrarse con los amigos de promoción, 
          se transformó en un evento deportivo donde la integración y la camaradería son los principales protagonistas.
        </p>
        
        <p>
          Con el paso del tiempo, este torneo ha crecido y ha permitido reunir a distintos compañeros 
          de diferentes facultades y generaciones. Más que una simple competencia, 
          es una oportunidad para compartir anécdotas, fortalecer amistades y recordar los años universitarios con nostalgia y alegría.
        </p>

        <p>
          El evento ha tenido un impacto positivo, promoviendo el espíritu deportivo, 
          la sana competencia y la unión entre distintas promociones. 
          Cada edición busca mantener vivo el sentido de pertenencia y la amistad entre los participantes.
        </p>
      </div>
    </div>
  );
}
