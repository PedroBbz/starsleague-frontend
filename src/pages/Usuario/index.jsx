import NavbarUsuario from '../../components/NavBarUsuario'
import './styles.css'

function Usuario() {


  return (

    <div className='usuario-container'>

      <NavbarUsuario />

      {/* Conteúdo do */}
      <div className="textoUsuario">
        <h1>Encare desafios
          <br />
          com facilidade
        </h1>

        <button className='botaoUser'>Participe</button>


      </div>

    </div>

  )
}

export default Usuario

