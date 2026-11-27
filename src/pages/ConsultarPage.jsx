import { FaArrowLeft } from "react-icons/fa";
import PendingCalls from "../components/PendingCalls"
import { useEffect, useState } from "react";
import listarChamado from "../services/ListarChamado";
import excluirChamado from "../services/ExcluirChamado";
import atualizarChamado from "../services/AtualizarChamado";

const ConsultarPage = () => {
    const [ChamadosListados, setChamadosListados] = useState([]);

    useEffect(() => {
        async function carregarChamados() {
            try {
                const listaChamados = await listarChamado();
                setChamadosListados(listaChamados);
            } catch (erro) {
                console.error("Erro ao carregar chamados:", erro);
            }
        }

        carregarChamados();
    }, []);

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

    const handleAtualizarDescricao = (id, novaDescricao) => {
        setChamadosListados((chamadosAtuais) =>
            chamadosAtuais.map((chamado) =>
                chamado._id === id ? { ...chamado, descricao: novaDescricao } : chamado
            )
        );
    };

    const handleConcluirChamado = async (id) => {
        try {
            await atualizarChamado(id, { status_concluido: true });

            setChamadosListados((chamadosAtuais) =>
            chamadosAtuais.filter((chamado) => chamado._id !== id)
            );
        } catch (erro) {
            console.error("Erro ao concluir chamado:", erro);
            alert("Não foi possível concluir o chamado.");
        }
    };

    return (
        <>
        <main className="min-h-screen w-full bg-gray-200 px-4 pb-8 pt-24 sm:px-6 sm:pt-28">
          <div className="mx-auto w-full max-w-5xl">
            <a href="/" className="inline-flex min-h-11 items-center gap-2 rounded-lg px-2 text-sm font-medium text-gray-700 hover:bg-gray-300 focus-visible:outline-2 focus-visible:outline-blue-700 sm:text-base"><FaArrowLeft /> Voltar</a>
            <h3 className="py-5 text-2xl font-semibold sm:py-7 sm:text-4xl">Chamados pendentes</h3>
            <section id="lista-chamados" className="min-h-40 rounded-2xl bg-blue-400 p-3 sm:p-5">
                {ChamadosListados.filter((chamadoCerto)=> chamadoCerto.status_concluido !== true).map((chamado) => (
                    <PendingCalls
                        key={chamado._id}
                        callType={chamado.titulo}
                        description={chamado.descricao}
                        idPassado={chamado._id}
                        aoExcluir={handleExcluirChamado}
                        aoAtualizar={handleAtualizarDescricao}
                        aoConcluir={handleConcluirChamado}
                    />
                ))
                }
                
            </section>
          </div>
        </main>
        </>
    )
}

export default ConsultarPage
