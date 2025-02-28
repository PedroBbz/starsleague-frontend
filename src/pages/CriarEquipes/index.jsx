import './equipe.css'
import { Link } from 'react-router-dom'
import NavbarOrganizador from '../../components/NavBarOrganizador'
import mais from '../../assets/mais.png'


function CriarEquipe() {

    return (
        <div className="Equipe-container">

            <div className="navPerfil">
                <NavbarOrganizador />
            </div>


            <div className='textoCriar'>
                <h1>CRIAR NOVA EQUIPE</h1>
            </div>

            <div className="opcoesEquipe">

                <div className="imagemEquipe">
                    <img src={mais} alt="imagem" />
                </div>

                <div className="inputsEquipe">

                    <div class="inputFotoEquipe">
                        <p>Adicionar foto personalizada para a equipe</p>
                        <input type="file" id="Equipe-imagem" />
                        <label for="Equipe-imagem">Carregar Arquivo</label>
                    </div>

                    <div class="custom-select">
                        <label for="selecaojogo">Torneio que a equipe será inserida</label>
                        <select id="selecaojogo">
                            <option value="" disabled selected>Selecionar Torneio</option>
                            <option value="1">Torneio de League of Legends</option>
                            <option value="2">Torneio de Tekken</option>
                        </select>
                    </div>

                    <div className="input-Equipe">
                        <input type="text" placeholder='Nome da Equipe' />
                    </div>


                    <div className="input-Equipe">
                        <input type="text" placeholder='Quantidade de jogadores na Equipe' />
                    </div>

                </div>

                

              


            </div>


            <div className="botoesEquipe">
                    <button type='submit'>Criar</button>

                    <Link to='/organizador'>
                    <button type='button'>Cancelar</button>
                    </Link>
            </div>








        </div>





    )
}

export default CriarEquipe