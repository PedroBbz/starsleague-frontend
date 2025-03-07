import { useState, useEffect } from "react";
import axios from "axios";
import './participanteequipe.css'

function SelecionarParticipantes() {
    const [participantes, setParticipantes] = useState([]);
    const [equipes, setEquipes] = useState([]);
    const [equipeId, setEquipeId] = useState("");
    const [participanteId, setParticipanteId] = useState("");
    const [selecionados, setSelecionados] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/participantes")
            .then(response => setParticipantes(response.data))
            .catch(error => console.error("Erro ao buscar participantes:", error));


        axios.get("http://localhost:8080/equipes")
            .then(response => setEquipes(response.data))
            .catch(error => console.error("Erro ao buscar equipes:", error));

    }, []);

    const handleSelection = (id) => {
        setParticipanteId(id); // Define o participante selecionado
    };

    const handleSubmit = () => {
        if (!participanteId || !equipeId) {
            console.error("Erro: participanteId ou equipeId estão vazios!");
            return;
        }
    
        axios.post(`http://localhost:8080/api/participante-equipe/${participanteId}/${equipeId}`, null)
            .then(() => alert("Participante adicionado com sucesso!"))
            .catch(error => console.error("Erro ao adicionar participante:", error));
    };
    return (
        <div className="selecaoParticipante-container">
            <h1>Selecionar Participantes</h1>

            <div className="selecaoEquipeopt">
                <select onChange={(e) => setEquipeId(e.target.value)}>
                    <option value="">Selecione uma equipe</option>
                    {equipes.map(equipe => (
                        <option key={equipe.id} value={equipe.id}>
                            {equipe.nome_equipe}
                        </option>
                    ))}
                </select>
            </div>


            <div className="listadeparticipantes">
                <ul>
                    {participantes.map(p => (
                        <li key={p.id}>
                            <input
                                type="radio"
                                name="participante" // Vai permitir só uma seleção por vez, é o jeito que está funcionando por enquanto
                                checked={participanteId === p.id}
                                onChange={() => handleSelection(p.id)}
                            />
                            {p.nome}
                        </li>
                    ))}
                </ul>
            </div>

            <button onClick={handleSubmit} disabled={!equipeId}>Adicionar à Equipe</button>
        </div>
    );
}

export default SelecionarParticipantes;