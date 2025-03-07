export async function getParticipantes(){
    try {
        const response = await fetch("http://localhost:8080/participantes")
        if (!response.ok){
            throw new Error(`Erro HTTP Status: ${response.status}`)
        }
        
    } catch (error) {
        console.error("Erro ao acessar a API de participantes", error)
        return [] // Retorna uma lista vazia ichinuj
    }
}

  