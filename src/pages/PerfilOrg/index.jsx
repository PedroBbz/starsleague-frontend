import NavbarOrganizador from '../../components/NavBarOrganizador'
import './perfilOrg.css'
import master from '../../assets/master.png'
import lol from '../../assets/lol.jpg'
import dbz from '../../assets/dbz.jpg'
import tekken from '../../assets/tekken.jpg'
import mais from '../../assets/mais.png'
import zoio from '../../assets/zoio.png'
import brazil from '../../assets/brazil.png'
import teemo from '../../assets/teemo.jpg'

function PerfilOrg() {

  return (
    <div className="perfil-container">

      <div className="navPerfil">
        <NavbarOrganizador />
      </div>
      {/* Div que rege toda a página, abaixo da navbar */}
      <div className="conteudoPerfil">


        <div className="informacoesPerfil">

          {/* Div da foto de perfil */}
          <div className="fotoperfil">

            <img src={teemo} alt="nao foi" />

          </div>


          {/* Div com o nome do usuario e os jogos do lado da foto de perfil */}
          <div className="jogos">
            <div className="nomePerfil">
              <h2>
                <img src={brazil} alt="" />Junichi Matsudara
              </h2>
            </div>


            <div className="fotojogos">

              <div className="item">
                <img src={lol} alt="" />
              </div>
              <div className="item">
                <img src={tekken} alt="" />
              </div>
              <div className="item">
                <img src={dbz} alt="" />
              </div>
              <div className="item">
                <img src={mais} alt="" />
              </div>

            </div>
          </div>

        </div>

        {/* Div de participações em torneios */}
        <div className="participacoes">
          <div className="torneios">
            <h1>Torneios Participados </h1>
          </div>
        </div>



        {/* Começo da barra do torneio */}
        <div className="listatorneios">
          <div className="imagem">
            <img src={lol} alt="" />
          </div>

          <div className="conteudoTorneio">
            <ul>
              <li><h2>Torneio de LOL</h2></li>
              <div className="posicoes">
                <li>Qualificação 1º Lugar</li>
                <li>Chave de 16 equipes</li>
              </div>
            </ul>
          </div>

          <div className="iconsTorneio">
            <img src={zoio} alt="" />
          </div>
        </div>
        {/* Fim da barra do torneio */}

        <div className="listatorneios">
          <div className="imagem">
            <img src={tekken} alt="" />
          </div>

          <div className="conteudoTorneio">
            <ul>
              <li><h2>Torneio de Tekken</h2></li>
              <div className="posicoes">
                <li>Qualificação 30º Lugar</li>
                <li>Chave de 16 equipes</li>
              </div>
            </ul>
          </div>

          <div className="iconsTorneio">
            <img src={zoio} alt="" />
          </div>


        </div>




      </div>








    </div>
  )
}

export default PerfilOrg