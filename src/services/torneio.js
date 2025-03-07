export async function getTorneio(){
    try {
        const response = await fetch("http://localhost:8080/Torneioes")
        if (!response.ok){
            throw new Error(`Erro HTTP Status: ${response.status}`)
        }
        
    } catch (error) {
        console.error("Erro ao acessar a API de Torneioes", error)
        return [] // Retorna uma lista vazia ichinuj
    }
}