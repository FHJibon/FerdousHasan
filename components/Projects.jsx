export default function Projects() {
  const projects = [
    {
      name: "VoiceAgent",
      desc: "Automated voice-based form filling with LLM-powered intent recognition.",
      tools: "Python, FastAPI, Next.js, Pipecat, Gemini API, WebSocket",
      link: "https://github.com/FHJibon/VoiceAgent"
    },
    {
      name: "LinkFlow",
      desc: "Automated LinkedIn engagement bot for intelligent networking.",
      tools: "Python, Selenium, Groq API, WebDriver Manager",
      link: "https://github.com/FHJibon/LinkFlow"
    },
    {
      name: "PolicyBot",
      desc: "HR Policy document-aware chatbot for internal queries.",
      tools: "Python, Flask, HuggingFace, Groq API, Pinecone",
      link: "https://github.com/FHJibon/PolicyBot"
    },
    {
      name: "AI Tax Assistant",
      desc: "AI-powered assistant for tax queries and ready-to-file returns.",
      tools: "Python, FastAPI, OpenAI API, LangChain",
      link: "https://taxassistant.online"
    }
  ];
  const githubUrl = "https://github.com/FHJibon";

  return (
    <section id="projects" className="py-20 px-6 bg-slate-950">
      <div className="container mx-auto max-w-5xl text-center">
        <h3 className="section-title mb-6">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6 justify-items-center">
          {projects.map((p, index) => (
            <div
              key={p.name}
              className="card group transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-white mb-2 inline-block underline decoration-indigo-400 group-hover:text-indigo-400 transition-colors duration-200"
              >
                {p.name}
              </a>
              <p className="text-slate-300 mb-2">{p.desc}</p>
              <span className="text-sm text-slate-400">{p.tools}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
