import Container from "./Container";

const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-slate-950/70 backdrop-blur-lg border-b border-slate-800">
      <Container>
        <div className="flex h-20 items-center justify-between">

          <h1 className="text-2xl font-bold text-white">
            PK.
          </h1>

          <nav className="hidden md:flex items-center gap-10">

            <a href="#" className="text-slate-300 hover:text-indigo-400">
              About
            </a>

            <a href="#" className="text-slate-300 hover:text-indigo-400">
              Experience
            </a>

            <a href="#" className="text-slate-300 hover:text-indigo-400">
              Projects
            </a>

            <a href="#" className="text-slate-300 hover:text-indigo-400">
              Contact
            </a>

          </nav>

        </div>
      </Container>
    </header>
  );
};

export default Navbar;