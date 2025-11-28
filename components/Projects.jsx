export default function Projects() {
  const projects = [
    {
      name: "VoiceAgent",
      desc: "Automated voice-based form filling with LLM-powered intent recognition.",
      tools: "Python, FastAPI, Next.js, Pipecat, Gemini API, WebSocket"
    },
    {
      name: "LinkFlow",
      desc: "Automated LinkedIn engagement bot for intelligent networking.",
      tools: "Python, Selenium, Groq API, WebDriver Manager"
    },
    {
      name: "PolicyBot",
      desc: "HR Policy document-aware chatbot for internal queries.",
      tools: "Python, Flask, HuggingFace, Groq API, Pinecone"
    },
    {
      name: "EmoScan",
      desc: "Sentiment classification system using ML & DL approaches.",
      tools: "Python, TF-IDF, Logistic Regression, Keras, LSTM, Hyperparameter Tuning"
    },
    {
      name: "AI Tax Assistant",
      desc: "AI-powered assistant for tax queries and ready-to-file returns.",
      tools: "Python, FastAPI, OpenAI API, LangChain"
    }
  ];

  return (
    <section id="work" className="py-20 px-6 bg-slate-950">
      <div className="container mx-auto max-w-5xl text-center">
        <h3 className="section-title mb-6">Work</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, index) => (
            <div
              key={p.name}
              className={`card ${index === projects.length - 1 ? 'md:col-span-2 mx-auto' : ''}`}
            >
              <h4 className="text-xl font-semibold text-white mb-2">{p.name}</h4>
              <p className="text-slate-300 mb-2">{p.desc}</p>
              <span className="text-sm text-slate-400">{p.tools}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
