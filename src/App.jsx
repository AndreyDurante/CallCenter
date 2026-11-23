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
      <main id='espaco-criar' className='flex flex-col justify-between items-center h-6/12 w-3/12 mx-auto rounded-3xl gap-5 bg-gray-200'>
        <article className='h-2/12 bg-blue-300 w-11/12 rounded-xl p-2 text-2xl justify-center items-center flex mt-5'>
          <h2>Crie um chamado</h2>
        </article>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5 justify-around w-full ps-8 h-12/12'>
          <div className=''>
            <SelectDemo/>
            <Input
            titulo = "Título"
            holder = "Insira informação"
            />
          </div>
      <div className='flex justify-center items-start w-11/12 h-2/12'>
        <button className='bg-blue-400 bg px-7 py-3 text-xl rounded-xl' type='submit'>Enviar chamado</button>
      </div>
        </form>
      </main>
    </section>
    </>
  )
}

export default App
