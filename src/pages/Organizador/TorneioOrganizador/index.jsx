import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import './torneioOrg.css'
import NavbarOrganizador from "../../../components/NavBarOrganizador";








function MostrarTorneios() {
  const [torneios, setTorneios] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/torneios")
      .then(response => setTorneios(response.data))
      .catch(error => console.error("Erro ao buscar torneios:", error));
  }, []);

  return (
    <div className="container-torneios">

      <NavbarOrganizador />





      {/* Div de participações em torneios */}
        <div className="torneios">
          <h1>Torneios </h1>
        </div>
      
      <div>
    
      {torneios.map((torneio) => (
        <div className="torneio-card" key={torneio.id}>
          <div className="listatorneios">
            <div className="imagem">
              <img src={torneio.image} alt="" />
            </div>

            <div className="conteudoTorneio">
              <h2>{torneio.nome_torneio}</h2>
              <p>Tipo de entrada: {torneio.entrada}</p>
              <p>Chave de {torneio.n_de_equipes} equipes</p>

            </div>

            <div className="opcaos">
              <Link to='/equipes'>
              <button type='button' className="botaoopcaotorneio">VER EQUIPES</button>
              </Link>
            </div>
          </div>
        </div>
      ))}


    </div>
    </div>


  );
};

export default MostrarTorneios;