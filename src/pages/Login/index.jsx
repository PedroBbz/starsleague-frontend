import './styles.css'
import { Link, useNavigate } from 'react-router-dom'

// TELA DE LOGIN


function Login() {

  const navigate = useNavigate();

  return (

    <div className="login-container">


      <div className="telaLogin">


        {/* CSC significava Crie Sua Conta */}
        <h2 id='CSC'>Iniciar Sessão</h2>

        {/* Botao Login e Cadastro */}
        <div className="botoesLogin">


          <button type='submit' id='login2'>Login</button>


          <button id='cadastro2' onClick={() => navigate("/cadastro")}>Cadastro</button>

        </div>

        {/* Email e senha */}
        <div className="inputsLogin">
          <input placeholder="Endereço de e-mail" type="email" required />
          <input placeholder="Senha" type="password" />
          <div className="registar">
            <a href="#">Esqueceu a senha?</a>
          </div>
        </div>


        {/* Botão Criar */}
        <Link to='/organizador'>
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
              <span class="button-inner-static">Entrar</span>
              <span class="button-inner-hover">Entrar</span>
            </span>
          </button>
        </div>
        </Link>



        <div className='lembreDeMim'>
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>
        </div>







      </div>
      {/* Fim da Div Tela Login */}


    </div>
    // Fim da div container
  )
}

export default Login
