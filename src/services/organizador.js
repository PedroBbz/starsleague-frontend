export async function getOrganizador(){
    try {
        const response = await fetch("http://localhost:8080/organizadores")
        if (!response.ok){
            throw new Error(`Erro HTTP Status: ${response.status}`)
        }
        
    } catch (error) {
        console.error("Erro ao acessar a API de organizadores", error)
        return [] // Retorna uma lista vazia ichinuj
    }
}
