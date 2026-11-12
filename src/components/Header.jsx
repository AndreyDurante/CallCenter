const Header = () => {
  return (
    <>
      <main className="fixed left-1/2 -translate-x-1/2 top-5 h-1/12 w-7/12 mx-auto">
        <article className="flex justify-between bg-amber-400 h-full items-center p-7 rounded-2xl">
          <div id="logo">Logo</div>
          <nav className="flex gap-12">
            <a href="">Início</a>
            <a href="">Criar</a>
            <a href="">Consultar</a>
          </nav>
          <div id="login">login</div>
        </article>
      </main>
    </>
  );
};

export default Header;
