import './App.css'
import Header from './components/Header'
import Input from './components/Input'
import { SelectDemo } from './components/SelectDemo'

function App() {
    const handleSubmit = (event) => {
    event.preventDefault();
    alert('Chamado enviado!');
  };
  return (
    <>
    <section id='criar' className='h-screen bg-blue-200 flex justify-center items-center pt-12'>
      <Header/>
      <main id='espaco-criar' className='flex flex-col justify-center items-center h-9/12 w-7/12 mx-auto bg-gray-200 rounded-3xl gap-5'>
        <article className='h-2/12 bg-blue-300 w-11/12 rounded-xl p-2 text-2xl justify-center items-center flex mt-5'>
          <h2>Crie um chamado</h2>
        </article>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5 justify-start w-full ps-8'>

        <SelectDemo/>
        <Input
        titulo = "Título"
        holder = "Insira informação"
        />
      <div className='flex justify-start items-start w-11/12 h-2/12'>
        <button className='bg-blue-400 px-7 py-3 text-xl rounded-xl' type='submit'>Enviar chamado.</button>
      </div>
        </form>
      </main>
    </section>
    </>
  )
}

export default App
