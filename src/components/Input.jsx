const Input = ({titulo, holder, setDescricaoChamado, descricao}) => {
    return (
        <>
        <div className="flex w-full flex-col justify-start">
            <label className="p-1 text-base font-medium sm:text-lg">
                {titulo}
            </label>
            <input type="text" placeholder={holder} className="h-12 w-full rounded-xl border-2 border-solid border-gray-400 bg-white px-3.5 text-base"
            value={descricao}
            onChange={(event) => setDescricaoChamado(event.target.value)}
            />
        </div>
        </>
    )
}

export default Input
