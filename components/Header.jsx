export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <div className="container mx-auto flex justify-between items-center py-3">
        <h1 className="text-lg md:text-xl font-bold text-white">Ferdous Hasan</h1>
        <nav>
          <ul className="flex gap-4 md:gap-6 text-slate-300">
            <li><a href="#home" className="hover:text-primary transition-transform duration-300 hover:scale-110">Home</a></li>
            <li><a href="#expertise" className="hover:text-primary transition-transform duration-300 hover:scale-110">Expertise</a></li>
            <li><a href="#projects" className="hover:text-primary transition-transform duration-300 hover:scale-110">Projects</a></li>
            <li><a href="#experience" className="hover:text-primary transition-transform duration-300 hover:scale-110">Experience</a></li>
            <li><a href="#contact" className="hover:text-primary transition-transform duration-300 hover:scale-110">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
