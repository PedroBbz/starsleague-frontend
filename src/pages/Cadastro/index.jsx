import './styles.css'
import { Link, useNavigate } from 'react-router-dom'

//TELA DE CADASTRO


function Cadastro() {


  const navigate = useNavigate();


  return (

    <div className="cadastro-container">


      <div className="telaCadastro">
        <h2 id='CSC'>Crie sua conta</h2>

        {/* Botao Login e Cadastro */}
        <div className="botoesCadastro">

          <button id='login' onClick={() => navigate("/login")}>Login</button>

          <button type='submit' id='cadastro' >Cadastro</button>
        </div>

        {/* Email e senha */}
        <div className="inputsCadastro">
          <input placeholder="Endereço de e-mail" type="email" required />
          <input placeholder="Senha" type="password" />
        </div>

        {/* Opção Participante ou organizador */}
        <select name="" id="opcoes">
          <option value="1">Participante</option>
          <option value="2">Organizador</option>
        </select>

        {/* Botão Criar */}
        <Link to="/organizador">
          <div className="botaoLog">
            <button class="button button-item">
              <span class="button-bg">
                <span class="button-bg-layers">
                  <span class="button-bg-layer button-bg-layer-1 -purple"></span>
                  <span class="button-bg-layer button-bg-layer-2 -turquoise"></span>
                  <span class="button-bg-layer button-bg-layer-3 -yellow"></span>
                </span>
              </span>
              <span class="button-inner">

                <span class="button-inner-static">Criar</span>
                <span type='button' class="button-inner-hover">Criar</span>
              </span>
            </button>
          </div>
        </Link>



      </div>
      {/* Fim da Div Tela Cadastro */}


    </div>
    // Fim da div container
  )
}

export default Cadastro
