const items = [
  { label: "Selecione o tipo de chamado", value: null },
  { label: "Suporte de informática", value: "suporte-informatica" },
  { label: "Acesso a sistemas e contas", value: "acesso-sistemas" },
  { label: "Computador ou equipamento", value: "computador-equipamento" },
  { label: "Internet ou rede", value: "internet-rede" },
  { label: "Telefonia", value: "telefonia" },
  { label: "Instalação ou atualização de software", value: "software" },
  { label: "Manutenção do escritório", value: "manutencao-escritorio" },
  { label: "Materiais de escritório", value: "materiais-escritorio" },
  { label: "Solicitação administrativa", value: "solicitacao-administrativa" },
]
export function SelectDemo({ tipoChamado, setTipoChamado }) {
  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor="ticket-type" className="ps-1 text-base font-medium sm:text-lg">
        Tipo de chamado
      </label>
      <select
        id="ticket-type"
        name="ticket-type"
        value={tipoChamado}
        onChange={(event) => setTipoChamado(event.target.value)}
        className="h-12 w-full rounded-xl border-2 border-solid border-gray-400 bg-white px-3.5 text-base"
      >
        {items.map((item) => (
          <option
            key={item.value ?? "placeholder"}
            value={item.value ?? ""}
            disabled={item.value === null}
          >
            {item.label}
          </option>
        ))}
      </select>
    </div>
  )
}
