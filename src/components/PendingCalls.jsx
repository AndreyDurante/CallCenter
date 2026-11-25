import { useState } from "react";
import { FaRegCheckCircle, FaTrash } from "react-icons/fa";
import { BsFillPencilFill } from "react-icons/bs";
import atualizarChamado from "../services/AtualizarChamado";

const PendingCalls = ({ callType, description, idPassado, aoExcluir, aoAtualizar }) => {
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
    <main className="bg-gray-300 h-3/12 w-11/12 my-2 mt-7 mx-auto flex justify-start flex-col gap-4 rounded-xl">
      <h3 className="text-xl text-black ms-4 mt-2 w-3/12">{callType}</h3>
      <div className="flex w-full items-center gap-2 px-2">
        <article className="min-w-0 h-full flex-1 rounded-xl bg-white pt-2">
          {editando ? (
            <input
              autoFocus
              aria-label="Editar descrição do chamado"
              className="w-full px-2 outline-none"
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
            <p>{description}</p>
          )}
        </article>

        <div className="flex shrink-0 items-center gap-2">
          <button type="button" aria-label="Concluir chamado" className="flex size-10 shrink-0 items-center justify-center rounded bg-blue-300 cursor-pointer">
            <FaRegCheckCircle className="size-5" />
          </button>
          <button type="button" aria-label="Editar descrição" onClick={iniciarEdicao} className="flex size-10 shrink-0 items-center justify-center rounded bg-blue-300 cursor-pointer">
            <BsFillPencilFill className="size-5" />
          </button>
          <button type="button" onClick={() => aoExcluir(idPassado)} aria-label="Excluir chamado" className="flex size-10 shrink-0 items-center justify-center rounded bg-blue-300 cursor-pointer">
            <FaTrash className="size-5" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default PendingCalls;
