export default async function criarChamado(dados) {
    const resposta = await fetch ("chamados", {
        method : "POST",
        headers: {
           "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
    })
    
    if (!resposta.ok) {
        throw new Error("Não foi possível criar o chamado.");
    }

    return resposta.json();
}