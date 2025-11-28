export default function Skills() {
  const skills = [
    "Python", "SQL", "FastAPI", "Flask", "HTML", "CSS", "Next.js", "PostgreSQL","Pinecone", "FAISS", "ChromaDB", "TF-IDF", "Logistic Regression", "Keras", "LSTM", "HuggingFace Transformers", "Vercel", "Docker", "Git", "GitHub", "LLMs", "RAG Systems", "AI Agents"
  ];

  return (
    <section id="expertise" className="py-20 px-6 bg-slate-900">
      <div className="container mx-auto max-w-4xl text-center">
        <h3 className="section-title mb-6">Expertise</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span key={skill} className="px-3 py-1 rounded-full bg-slate-800/60 text-slate-200 text-sm border border-slate-700">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
