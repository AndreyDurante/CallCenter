import { useState } from "react";
import { FaRegCheckCircle, FaTrash } from "react-icons/fa";
import { BsFillPencilFill } from "react-icons/bs";
import atualizarChamado from "../services/AtualizarChamado";

const PendingCalls = ({ callType, description, idPassado, aoExcluir, aoAtualizar, aoConcluir }) => {
  const [editando, setEditando] = useState(false);
  const [descricaoEditada, setDescricaoEditada] = useState(description);
  const [salvando, setSalvando] = useState(false);

  function iniciarEdicao() {
    setDescricaoEditada(description);
    setEditando(true);
  }

  async function salvarDescricao() {
    if (salvando) return;

    try {
      setSalvando(true);
      await atualizarChamado(idPassado, { descricao: descricaoEditada });
      aoAtualizar(idPassado, descricaoEditada);
      setEditando(false);
    } catch (erro) {
      console.error("Erro ao atualizar descrição:", erro);
      alert(erro.message || "Não foi possível atualizar a descrição.");
    } finally {
      setSalvando(false);
    }
  }

  return (
    <article className="my-3 flex w-full flex-col gap-3 rounded-xl bg-gray-300 p-3 sm:my-4 sm:gap-4 sm:p-5">
      <h3 className="min-w-0 break-words text-lg font-semibold text-gray-900 sm:text-xl">{callType}</h3>
      <div className="flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:items-center">
        <div className="min-h-12 min-w-0 flex-1 rounded-xl bg-white p-3">
          {editando ? (
            <input
              autoFocus
              aria-label="Editar descrição do chamado"
              className="w-full bg-transparent text-base outline-none"
              value={descricaoEditada}
              disabled={salvando}
              onChange={(evento) => setDescricaoEditada(evento.target.value)}
              onKeyDown={(evento) => {
                if (evento.key === "Enter") {
                  evento.preventDefault();
                  salvarDescricao();
                } else if (evento.key === "Escape") {
                  setDescricaoEditada(description);
                  setEditando(false);
                }
              }}
            />
          ) : (
            <p className="whitespace-pre-wrap break-words text-base">{description}</p>
          )}
        </div>

        <div className="flex shrink-0 items-center justify-end gap-2 sm:justify-center">
          <button onClick={() => aoConcluir(idPassado)}type="button" aria-label="Concluir chamado" className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-blue-300 cursor-pointer hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700">
            <FaRegCheckCircle className="size-5" />
          </button>
          <button type="button" aria-label="Editar descrição" onClick={iniciarEdicao} className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-blue-300 cursor-pointer hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700">
            <BsFillPencilFill className="size-5" />
          </button>
          <button type="button" onClick={() => aoExcluir(idPassado)} aria-label="Excluir chamado" className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-blue-300 cursor-pointer hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700">
            <FaTrash className="size-5" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default PendingCalls;
