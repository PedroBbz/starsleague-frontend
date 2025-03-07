import { useEffect, useState } from "react";
import axios from "axios";
import './listaparticipantes.css'
import NavbarOrganizador from "../../components/NavBarOrganizador";








function MostrarParticipantes() {
  const [participantes, setParticipantes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/participantes")
      .then(response => setParticipantes(response.data))
      .catch(error => console.error("Erro ao buscar participantes:", error));
  }, []);

  return (
    <div className="container-participantes">

      <NavbarOrganizador />





      {/* Div de participações em torneios */}
      <div className="participantes">
        <h1>Participantes </h1>
      </div>

      <div>

        {participantes.map((participante) => (
          <div className="participante-card" key={participante.id}>
            <div className="listaparticipantes">
              <div className="imagem">
                <img src={participante.image} alt="" />
              </div>

              <div className="conteudoParticipante">
                <h2>{participante.nome}</h2>
              </div>

            </div>
          </div>
        ))}


      </div>
    </div>


  );
};

export default MostrarParticipantes;