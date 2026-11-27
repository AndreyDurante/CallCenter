import { useState } from 'react';
import './App.css'
import Header from './components/Header'
import Input from './components/Input'
import { SelectDemo } from './components/SelectDemo'
import criarChamado from "./services/CriarChamado.js";

function App() {

  const [tipoChamado, setTipoChamado] = useState("");
  const [descricao, setDescricaoChamado] = useState("");


  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      if (descricao.length <= 4 || descricao.length > 50) {
            alert("Número de caracteres inválido");
            return
        }
        await criarChamado({
          titulo: tipoChamado,
          descricao,
        });

        setTipoChamado("");
        setDescricaoChamado("");
        alert("Chamado criado!");
      } catch (erro) {
        alert(erro.message);
      }
    };
  return (
    <>
    <section id='criar' className='min-h-screen bg-blue-200 flex flex-col justify-center items-center px-4 pt-24 pb-8 sm:px-6'>
      <Header/>
      <main id='espaco-criar' className='flex w-full max-w-xl flex-col items-center gap-6 rounded-3xl bg-gray-200 p-5 shadow-sm sm:p-8'>
        <article className='flex min-h-14 w-full items-center justify-center rounded-xl bg-blue-700 p-3 text-center text-xl text-white sm:text-2xl'>
          <h2>Crie um chamado</h2>
        </article>
        <form onSubmit={handleSubmit} className='flex w-full flex-col gap-6'>
          <div className='flex flex-col gap-5'>
            <SelectDemo
            tipoChamado={tipoChamado}
            setTipoChamado={setTipoChamado}
            />
            <Input
            titulo = "Descrição"
            holder = "Insira uma descrição"
            descricao={descricao}
            setDescricaoChamado={setDescricaoChamado}
            />
          </div>
      <div className='flex w-full justify-stretch sm:justify-end'>
        <button className='w-full rounded-xl bg-blue-700 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 sm:w-auto sm:text-lg' type='submit'>Enviar chamado</button>
      </div>
        </form>
      </main>
    </section>
    </>
  )
}

export default App
