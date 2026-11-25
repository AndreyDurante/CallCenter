import LoginButton from "./LoginButton.jsx";

const Header = () => {
  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-20 px-3 pt-3 sm:px-6 sm:pt-5">
        <article className="mx-auto flex w-full max-w-5xl items-center justify-between gap-3 rounded-2xl bg-white/90 p-3 shadow-sm backdrop-blur-md sm:gap-6 sm:px-6 sm:py-4">
          <div id="logo" className="shrink-0 rounded-xl bg-blue-700 p-2 text-lg font-bold text-white sm:text-2xl">CallCenter<span className="text-blue-300">Pro</span></div>
          <nav className="flex items-center gap-2 text-sm sm:gap-6 sm:text-lg">
            <a href="/consultar" className="hover:scale-110 duration-200 ease-in">Consultar</a>
          </nav>
          <LoginButton></LoginButton>
        </article>
      </header>
    </>
  );
};

export default Header;
