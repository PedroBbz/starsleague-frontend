import './equipe.css'
import { Link } from 'react-router-dom'
import NavbarOrganizador from '../../components/NavBarOrganizador'
import mais from '../../assets/mais.png'
import axios from 'axios'
import { useState } from 'react'


function CriarEquipe() {

    //Armazena os valores do formulário
    const [equipe, setEquipe] = useState({
        nome_equipe: "",
        n_participantes: "",
        torneioId: "",
        image: null
    });


    //Vai atualizar os dados quando você digitar
    const handleChange = (e) => {
        setEquipe({ ...equipe, [e.target.name]: e.target.value });

    };


    //Isso aqui é pra salvar a imagem no banco de dados tlgdd
    const handleImageChange = (e) => {
        setEquipe({ ...equipe, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("nome_equipe", equipe.nome_equipe);
        formData.append("n_participantes", equipe.n_participantes);
        formData.append("torneioId", equipe.torneioId);
        formData.append("image", equipe.image);

        console.log("Enviando os seguintes dados:", Object.fromEntries(formData.entries()));

        try {
            await axios.post("http://localhost:8080/equipes", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            alert("Equipe criada com sucesso!");
        } catch (error) {
            console.error("Erro ao criar equipe:", error);
            alert("Erro ao criar equipe.");
        }
    };



    return (
        <div className="Equipe-container">
            <div className="navPerfil">
                <NavbarOrganizador />
            </div>

            <div className="textoCriar">
                <h1>CRIAR NOVA EQUIPE</h1>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="opcoesEquipe">
                    <div className="imagemEquipe">
                        <img src={mais} alt="imagem" />
                    </div>

                    <div className="inputsEquipe">
                        <div className="inputFotoEquipe">
                            <p>Adicionar foto personalizada para a equipe</p>
                            <input 
                                type="file" 
                                id="Equipe-imagem" 
                                name="imagem"
                                onChange={handleImageChange} 
                            />
                            <label htmlFor="Equipe-imagem">Carregar Arquivo</label>
                        </div>

                        <div className="custom-select">
                            <label htmlFor="selecaojogo">Torneio que a equipe será inserida</label>
                            <select 
                                id="selecaojogo" 
                                name="torneioId" 
                                value={equipe.torneioId} 
                                onChange={handleChange}
                            >
                                <option value="" disabled>Selecionar Torneio</option>
                                <option value="1">Torneio de League of Legends</option>
                                <option value="2">Torneio de Tekken</option>
                            </select>
                        </div>

                        <div className="input-Equipe">
                            <input 
                                type="text" 
                                name="nome_equipe" 
                                placeholder="Nome da Equipe" 
                                value={equipe.nome_equipe} 
                                onChange={handleChange}
                            />
                        </div>

                        <div className="input-Equipe">
                            <input 
                                type="text" 
                                name="n_participantes" 
                                placeholder="Quantidade de jogadores na Equipe" 
                                value={equipe.n_participantes} 
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

                <div className="botoesEquipe">
                <button type="submit" onClick={handleSubmit} className='botoesEquipe'>Criar</button>

                    <Link to="/organizador">
                    <button className='botoesEquipe' id='cancelar'>Cancelar</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default CriarEquipe