export default async function excluirChamado(idPassado) {
    const resposta = await fetch (`chamados/${idPassado}`, {
        method : "DELETE",
    })
    
    if (!resposta.ok) {
        throw new Error("Não foi possível excluir o chamado.");
    }

    return resposta.json();
}