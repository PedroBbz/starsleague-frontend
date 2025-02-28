import NavbarOrganizador from '../../components/NavBarOrganizador'
import './perfilConfi.css'
import master from '../../assets/master.png'
import lol from '../../assets/lol.jpg'
import dbz from '../../assets/dbz.jpg'
import tekken from '../../assets/tekken.jpg'
import mais from '../../assets/mais.png'
import zoio from '../../assets/zoio.png'
import brazil from '../../assets/brazil.png'
import teemo from '../../assets/teemo.jpg'

function PerfilConfig() {

  return (
    <div className="perfil-container">

      <div className="navPerfil">
        <NavbarOrganizador />
      </div>


      {/* Div das config do perfil abaixo da navbar */}
      <div className="conteudo">


        {/* Div da foto de perfil */}
        <div className="foto">
          <img src={teemo} alt="foto perfil" />
        </div>


        {/* Começo da DIV Configurações */}
        <div className="configuracoes">

          <div className="textoConfig">
            <h1>CONFIGURAÇÕES DE CONTA</h1>
          </div>



          <div class="inputFoto">
            <p>Trocar foto de perfil</p>
            <input type="file" id="file-upload" />
            <label for="file-upload">Carregar Arquivo</label>
          </div>

          <div className="inputNome">
            <p>Nome: Junichi Matsudara</p>
            <input type="text" placeholder='Trocar o nome visível no site' />
          </div>


          <div className="localizacao">
            <p>País</p>
            <select name="" id="opcoesConfig">
              <option value="1">Brasil</option>
              <option value="2">Estados Unidos</option>
              <option value="2">Japão</option>
              <option value="2">Reino Unido</option>
              <option value="2">Canadá</option>
              <option value="2">Argentina</option>
            </select>
          </div>

          <div className="botaosalvar">
            <button>Salvar</button>
          </div>

        </div>
      </div>
      {/* Fim da div conteúdo */}

      <div className="divContasEDelete">

        <div className="contas">

          <div className="textoConta">
            <h1>Contas e jogos sincronizados no site</h1>
          </div>

          <div className="jogosConta">

              <img src={lol} alt="" />

              <img src={tekken} alt="" />
    
              <img src={dbz} alt="" />
  
              <img src={mais} alt="" />
          </div>

        </div>


        <div className="deletarConta">
          <button>DELETAR CONTA</button>
        </div>

      </div>





    </div>



  )
}

export default PerfilConfig