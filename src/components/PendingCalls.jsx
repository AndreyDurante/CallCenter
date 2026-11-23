import { FaRegCheckCircle } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { BsFillPencilFill } from "react-icons/bs";

const PendingCalls = () => {
    return(
        <>
        <main className="bg-gray-300 h-3/12 w-11/12 my-2 mt-7 mx-auto flex justify-start flex-col gap-4 rounded-xl">
            <h3 className="text-xl text-black ms-4 mt-2 w-3/12">Tipo do Chamado</h3>
            <div className="flex w-full items-center gap-2 px-2">
                <article className="min-w-0 h-full flex-1 rounded-xl bg-white pt-2"></article>
                <div className="flex shrink-0 items-center gap-2">
                    <button type="button" aria-label="Concluir chamado" className="flex size-10 shrink-0 items-center justify-center rounded bg-blue-300">
                        <FaRegCheckCircle className="size-5"/>
                    </button>
                    <button type="button" aria-label="Editar chamado" className="flex size-10 shrink-0 items-center justify-center rounded bg-blue-300">
                        <BsFillPencilFill className="size-5"/>
                    </button>
                    <button type="button" aria-label="Excluir chamado" className="flex size-10 shrink-0 items-center justify-center rounded bg-blue-300">
                        <FaTrash className="size-5"/>
                    </button>
                </div>
            </div>
        </main>
        </>
    )
}

export default PendingCalls
