const Input = ({titulo, holder}) => {
    return (
        <>
        <main className="flex flex-col justify-start w-11/12 ">
            <article className="p-1 text-xl">
                {titulo}
            </article>
            <input type="text" placeholder={holder} className="w-full bg-gray-200 border-2 border-solid border-gray-400 h-12 rounded-xl p-3.5"/>
        </main>
        </>
    )
}

export default Input