import './torneio.css'
import { Link } from 'react-router-dom'
import NavbarOrganizador from '../../components/NavBarOrganizador'

import mais from '../../assets/mais.png'

function CriarTorneio() {

    return (
        <div className="torneio-container">

            <div className="navPerfil">
                <NavbarOrganizador />
            </div>


            <div className='textoCriar'>
                <h1>CRIAR NOVO TORNEIO</h1>
            </div>

            <div className="opcoesTorneio">

                <div className="imagemTorneio">
                    <img src={mais} alt="imagem" />
                </div>

                <div className="inputsTorneio">

                    <div class="inputFotoTorneio">
                        <p>Adicionar foto personalizada para o torneio</p>
                        <input type="file" id="torneio-imagem" />
                        <label for="torneio-imagem">Carregar Arquivo</label>
                    </div>

                    <div class="custom-select">
                        <label for="selecaojogo">Jogo a ser disputado no torneio</label>
                        <select id="selecaojogo">
                            <option value="" disabled selected>Selecionar Jogo</option>
                            <option value="1">League of Legends</option>
                            <option value="2">Call of Duty</option>
                            <option value="3">Street Fighter</option>
                        </select>
                    </div>

                    <div class="custom-select">
                        <label for="chaveamento">Estilo de Chaveamento do Torneio</label>
                        <select id="chaveamento">
                            <option value="" disabled selected>Selecionar Chaveamento</option>
                            <option value="1">Chaveamento Personalizado #1</option>
                        </select>
                    </div>

                    <div class="custom-select">
                        <label for="chaveamento">Quantidade de equipes no torneio</label>
                        <select id="chaveamento">
                            <option value="" disabled selected>Selecionar tamanho para equipes</option>
                            <option value="1">4</option>
                            <option value="2">8</option>
                            <option value="3">16</option>
                        </select>
                    </div>




                    <div class="custom-select">
                        <label for="chaveamento">Tipo de entrada</label>
                        <select id="chaveamento">
                            <option value="" disabled selected>Selecionar o tipo de entrada</option>
                            <option value="1">Gratuita</option>
                            <option value="2"></option>
                        </select>
                    </div>

                    <div className="input-torneio">
                        <input type="text" placeholder='Nome do torneio' />

                    </div>

                    <div className="input-torneio">
                        <input type="text" placeholder='Observações do torneio' />

                    </div>

                </div>


              


            </div>


            <div className="botoesTorneio">
                    <button type='submit'>Criar</button>

                    <Link to='/organizador'>
                    <button type='button'>Cancelar</button>
                    </Link>
            </div>








        </div>





    )
}

export default CriarTorneio