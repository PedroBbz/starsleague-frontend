import './torneio.css'
import { Link } from 'react-router-dom'
import NavbarOrganizador from '../../components/NavBarOrganizador'
import axios from 'axios'
import { useState } from 'react'

import mais from '../../assets/mais.png'

function CriarTorneio() {


    //Armazena os valores do formulário
    const [torneio, setTorneio] = useState({
        nome_torneio: "",
        n_de_equipes: "",
        jogo: "",
        entrada: "",
        chaveamento: "",
        gratuito: "",

        image: null
    });


    //Vai atualizar os dados quando você digitar
    const handleChange = (e) => {
        setTorneio({ ...torneio, [e.target.name]: e.target.value });

    };


    const handleImageChange = (e) => {
        setTorneio({ ...torneio, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("nome_torneio", torneio.nome_torneio);
        formData.append("n_de_equipes", torneio.n_de_equipes);
        formData.append("jogo", torneio.jogo);
        formData.append("entrada", torneio.entrada);
        formData.append("chaveamento", torneio.chaveamento);
        formData.append("tipo_sala", torneio.tipo_sala);
        formData.append("image", torneio.image);


        // 🔍 Verificar se os dados estão corretos
        for (let [key, value] of formData.entries()) {
            console.log(`${key}:`, value);
        }


        try {
            await axios.post("http://localhost:8080/torneios", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            alert("Torneio criado com sucesso!");
        } catch (error) {
            console.error("Erro ao criar torneio:", error);
            alert("Erro ao criar torneio.");
        }
    };





    return (
        <div className="torneio-container">
            <div className="navPerfil">
                <NavbarOrganizador />
            </div>

            <div className="textoCriar">
                <h1>CRIAR NOVO TORNEIO</h1>
            </div>

            <div className="opcoesTorneio">
                <div className="imagemTorneio">
                    <img src={mais} alt="imagem" />
                </div>

                <div className="inputsTorneio">
                    <div className="inputFotoTorneio">
                        <p>Adicionar foto personalizada para o torneio</p>
                        <input type="file" id="torneio-imagem" onChange={handleImageChange} />
                        <label htmlFor="torneio-imagem">Carregar Arquivo</label>
                    </div>

                    <div className="custom-select">
                        <label htmlFor="selecaojogo">Jogo a ser disputado no torneio</label>
                        <select id="selecaojogo" name="jogo" onChange={handleChange}>
                            <option value="">Selecionar Jogo</option>
                            <option value="League of Legends">League of Legends</option>
                            <option value="Call of Duty">Call of Duty</option>
                            <option value="Street Fighter">Tekken</option>
                        </select>
                    </div>

                    <div className="custom-select">
                        <label htmlFor="chaveamento">Estilo de Chaveamento do Torneio</label>
                        <select id="chaveamento" name="chaveamento" onChange={handleChange}>
                            <option value="">Selecionar Chaveamento</option>
                            <option value="Personalizado">Chaveamento Personalizado</option>
                            <option value="Automatico">Chaveamento Automático</option>
                        </select>
                    </div>

                    <div className="custom-select">
                        <label htmlFor="n_de_equipes">Quantidade de equipes no torneio</label>
                        <select id="n_de_equipes" name="n_de_equipes" onChange={handleChange}>
                            <option value="">Selecionar tamanho para equipes</option>
                            <option value="Individual">Individual</option>
                            <option value="4">4</option>
                            <option value="8">8</option>
                            <option value="16">16</option>
                        </select>
                    </div>

                    <div className="custom-select">
                        <label htmlFor="entrada">Tipo de entrada</label>
                        <select id="entrada" name="entrada" onChange={handleChange}>
                            <option value="">Selecionar o tipo de entrada</option>
                            <option value="Gratuita">Gratuita</option>
                            <option value="Paga">Paga</option>
                        </select>
                    </div>

                    <div className="custom-select">
                        <label htmlFor="tipo_sala">Tipo de Sala</label>
                        <select id="tipo_sala" name="tipo_sala" onChange={handleChange}>
                            <option value="">Selecionar o tipo de sala</option>
                            <option value="1">Pública</option>
                            <option value="2">Privada</option>
                        </select>
                    </div>

                    <div className="input-torneio">
                        <input type="text" name="nome_torneio" placeholder="Nome do torneio" onChange={handleChange} />
                    </div>
                </div>
            </div>

            <div className="botoesTorneio">
                <Link to='/torneio-org'>
                <button type="submit" onClick={handleSubmit} className='botoesTorneio'>Criar</button>
                </Link>
                <Link to="/organizador">
                <button className='botoesTorneio' id='cancelar'>Cancelar</button>
                </Link>
            </div>
        </div>



    )
}

export default CriarTorneio