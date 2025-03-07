import { useState, useEffect } from "react";
import axios from "axios";
import './equipetorneio.css'

function SelecionarEquipes() {
    const [equipes, setEquipes] = useState([]);
    const [torneioId, setTorneioId] = useState("");
    const [selecionadas, setSelecionadas] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/equipes")
            .then(response => setEquipes(response.data))
            .catch(error => console.error("Erro ao buscar equipes:", error));
    }, []);

    const handleSelection = (id) => {
        setSelecionadas(prev =>
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
    };

    const handleSubmit = () => {
        axios.post(`http://localhost:8080/torneios/${torneioId}/adicionar-equipes`, selecionadas)
            .then(() => alert("Equipes adicionadas com sucesso!"))
            .catch(error => console.error("Erro ao adicionar equipes:", error));
    };

    return (
        <div className="selecaoTorneio-container">
            <h1>Selecionar Equipes</h1>
            <select onChange={(e) => setTorneioId(e.target.value)}>
                <option value="">Selecione um torneio</option>
                {/* Aqui você pode buscar torneios e popular as opções */}
                <option value="1">Torneio X</option>
                <option value="2">Torneio Y</option>
            </select>

            <ul>
                {equipes.map(equipe => (
                    <li key={equipe.id}>
                        <input
                            type="checkbox"
                            checked={selecionadas.includes(equipe.id)}
                            onChange={() => handleSelection(equipe.id)}
                        />
                        {equipe.nome_equipe}
                    </li>
                ))}
            </ul>

            <button onClick={handleSubmit} disabled={!torneioId}>Adicionar ao Torneio</button>
        </div>
    );
}

export default SelecionarEquipes;