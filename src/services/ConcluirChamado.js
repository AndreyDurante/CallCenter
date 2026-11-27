export default async function concluirChamado(id, dados) {
  const resposta = await fetch(`/chamados/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  });

  if (!resposta.ok) {
    throw new Error("Não foi possível concluir o chamado.");
  }

  return resposta.json();
}
