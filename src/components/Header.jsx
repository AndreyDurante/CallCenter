import { IoPersonCircle } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <main className="fixed left-1/2 -translate-x-1/2 top-5 h-1/12 w-5/12 mx-auto">
        <article className="flex justify-between bg-white/50 backdrop-blur-md h-full items-center p-7 rounded-2xl">
          <div id="logo" className="text-white font-bold bg-blue-700 p-2 rounded-xl text-2xl">CallCenter<span className="text-blue-500">Pro</span></div>
          <nav className="flex gap-12 text-xl">
            <a href="" className="hover:scale-110 duration-200 ease-in">Início</a>
            <a href="" className="hover:scale-110 duration-200 ease-in">Criar</a>
            <a href="" className="hover:scale-110 duration-200 ease-in">Consultar</a>
          </nav>
          <a id="login" className="text-blue-800 bg-blue-700 flex gap-2 justify-center items-center p-2 rounded-xl"> <h3 className="text-2xl text-white font-bold ">Login</h3> <IoPersonCircle  className="text-4xl text-white"/></a>
        </article>
      </main>
    </>
  );
};

export default Header;
