import NavbarOrganizador from '../../components/NavBarOrganizador'
import './styles.css'
import { Link } from 'react-router-dom'
function Organizador() {


  return (

    <div className='organizador-container'>
      <NavbarOrganizador />

      {/* Conteúdo do */}
      <div className="textorganizador">
        <h1>Crie competições
          <br />
          sem complicações
        </h1>


        <Link to='/criar-torneio'>
        <button className='botaoorg'>Criar torneio</button>
        </Link>

        <Link to='/criar-equipe'>
        <button className='botaoorg'>Crie equipes</button>
        </Link>


      </div>

    </div>

  )
}

export default Organizador

