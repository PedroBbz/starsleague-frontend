import './styles.css'
import { useNavigate } from 'react-router-dom'


function NavbarHome() {

  const navigate = useNavigate();

  return (

    <header className='faixa'>

      <nav>
        <div className="botoes-home">
          <button>Sobre nós</button>
          <button onClick={() => navigate("/login")}>Entrar</button>
        </div>

      </nav>

    </header>

  )
}

export default NavbarHome