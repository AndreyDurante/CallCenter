import { FaArrowLeft } from "react-icons/fa";
import PendingCalls from "../components/PendingCalls"

const ConsultarPage = () => {
    return (
        <>
        <main className="h-screen bg-gray-200 flex justify-center items-center flex-col w-full">
        <a href="/" className="text-2xs w-8/12 flex items-center gap-2"><FaArrowLeft /> Voltar</a>
            <h3 className="text-4xl p-5">Chamados pendentes</h3>
            <section id="lista-chamados" className="rounded-2xl bg-blue-400 w-8/12 min-h-8/12">
                <PendingCalls></PendingCalls>
            </section>
        </main>
        </>
    )
}

export default ConsultarPage