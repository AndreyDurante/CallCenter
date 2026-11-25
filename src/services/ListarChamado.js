export default async function listarChamado(){
    const resposta = await fetch("/chamados", {
        method : "GET"
    })

    if (!resposta.ok) {
        throw new Error("Não foi possível criar o chamado.");
    }

    return resposta.json();
}