

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
export function SelectDemo() {
  return (
    <div className="flex w-11/12 flex-col gap-2">
      <label htmlFor="ticket-type" className="ps-1 text-xl">
        Tipo de chamado
      </label>
      <select
        id="ticket-type"
        name="ticket-type"
        defaultValue=""
        className="w-full bg-gray-200 border-2 border-solid border-gray-400 h-12 rounded-xl ps-3.5"
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
