import { useState } from "react"

const Input = ({titulo, holder, setDescricaoChamado, descricao}) => {

    const [valido, setValido] = useState(true)

    function verificarTamanho(descricao) {
        if (descricao.length <= 4 || descricao.length > 50) {
            return false
        }
        return true
    }

    return (
        <>
        <div className="flex w-full flex-col justify-start">
            <label className="p-1 text-base font-medium sm:text-lg">
                {titulo}
            </label>
            <input type="text" placeholder={holder} className={`h-12 w-full rounded-xl border-2 border-solid border-gray-400 bg-white px-3.5 text-base ${valido ? "border-gray-400" : "border-red-500"}`}
            
            value={descricao}
            onChange={(event) => {

                setDescricaoChamado(event.target.value);

                if (!verificarTamanho(event.target.value)) {
                    setValido(false);
                } else {
                    setValido(true);
                };
            }}
            />
            {!valido ? <p>A descrição deve ter entre 5 e 50 caracteres.</p> : null}
        </div>
        </>
    )
}

export default Input
