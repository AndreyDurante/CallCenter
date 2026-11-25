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
    <section id='criar' className='h-screen bg-blue-200 flex justify-center items-center pt-12'>
      <Header/>
      <main id='espaco-criar' className='flex flex-col justify-between items-center h-6/12 w-3/12 mx-auto rounded-3xl gap-5 bg-gray-200'>
        <article className='h-2/12 bg-blue-700 text-white w-11/12 rounded-xl p-2 text-2xl justify-center items-center flex mt-5'>
          <h2>Crie um chamado</h2>
        </article>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5 justify-around w-full ps-8 h-12/12'>
          <div className=''>
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
      <div className='flex justify-center items-start w-11/12 h-2/12'>
        <button className='bg-blue-700 text-white bg px-7 py-3 text-xl rounded-xl' type='submit'>Enviar chamado</button>
      </div>
        </form>
      </main>
    </section>
    </>
  )
}

export default App
