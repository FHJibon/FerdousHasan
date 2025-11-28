export default function Intro() {
  return (
    <section id="home" className="min-h-[70vh] flex flex-col justify-center items-center text-center bg-gradient-to-b from-slate-950 via-slate-900 to-black">
      <h2 className="text-5xl md:text-6xl font-extrabold mb-4 text-white tracking-tight">Ferdous Hasan</h2>
      <p className="text-sm uppercase tracking-widest text-slate-400">AI Engineer</p>
      <p className="mt-4 text-lg md:text-xl text-slate-300 max-w-2xl">I build end-to-end machine learning and LLM-powered systems and production-ready AI solutions that deliver measurable business value</p>
      <div className="mt-6 flex gap-3">
        <a href="#work" className="btn">View Work</a>
        <a href="#contact" className="btn-ghost">Contact</a>
      </div>
    </section>
  );
}
