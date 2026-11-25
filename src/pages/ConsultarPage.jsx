import { FaArrowLeft } from "react-icons/fa";
import PendingCalls from "../components/PendingCalls"
import { useEffect, useState } from "react";
import listarChamado from "../services/ListarChamado";
import excluirChamado from "../services/ExcluirChamado";

const ConsultarPage = () => {
    const [ChamadosListados, setChamadosListados] = useState([]);
    const handleExcluirChamado = async (id) => {
        try {
            await excluirChamado(id);

            setChamadosListados((chamadosAtuais) =>
            chamadosAtuais.filter((chamado) => chamado._id !== id)
            );
        } catch (erro) {
            console.error("Erro ao excluir chamado:", erro);
            alert("Não foi possível excluir o chamado.");
        }
    };
    return (
        <>
        <main className="h-screen bg-gray-200 flex justify-center items-center flex-col w-full">
        <a href="/" className="text-2xs w-8/12 flex items-center gap-2"><FaArrowLeft /> Voltar</a>
            <h3 className="text-4xl p-5">Chamados pendentes</h3>
            <section id="lista-chamados" className="rounded-2xl bg-blue-400 w-8/12 min-h-8/12">
                {useEffect (() => {
                    async function carregarChamados() {
                    try {
                    const listaChamados = await listarChamado();
                    setChamadosListados(listaChamados);
                    } catch (erro) {
                    console.error("Erro ao carregar chamados:", erro);
                    }}
                    carregarChamados();
                }, [])}

                {ChamadosListados.map((chamado) => (
                    <PendingCalls
                        key={chamado._id}
                        callType={chamado.titulo}
                        description={chamado.descricao}
                        idPassado={chamado._id}
                        aoExcluir={handleExcluirChamado}
                    />
                ))
                }
                
            </section>
        </main>
        </>
    )
}

export default ConsultarPage