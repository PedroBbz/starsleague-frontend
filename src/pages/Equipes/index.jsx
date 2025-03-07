import { useEffect, useState } from "react";
import axios from "axios";
import './equipes.css'
import NavbarOrganizador from "../../components/NavBarOrganizador";
import { Link } from 'react-router-dom'







function MostrarEquipes() {
  const [equipes, setEquipes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/equipes")
      .then(response => setEquipes(response.data))
      .catch(error => console.error("Erro ao buscar equipes:", error));
  }, []);

  return (
    <div className="container-equipes">

      <NavbarOrganizador />





      {/* Div de participações em torneios */}
      <div className="equipes">
        <h1>Equipes </h1>
      </div>

      <div>

        {equipes.map((equipe) => (
          <div className="equipe-card" key={equipe.id}>
            <div className="listaequipes">
              <div className="imagem">
                <img src={equipe.image} alt="" />
              </div>

              <div className="conteudoEquipe">
                <h2>{equipe.nome_equipe}</h2>
                <p>Equipe formada por {equipe.n_participantes} pessoas</p>

              </div>

              <div className="opcaosEquipe">
                <Link to='/participantes'>
                  <button type='button' className="botaoopcaoequipe">VER PARTICIPANTES</button>
                </Link>
              </div>
            </div>
          </div>
        ))}


      </div>
    </div>


  );
};

export default MostrarEquipes;