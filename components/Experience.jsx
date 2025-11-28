export default function Experience() {
  const experiences = [
    {
      role: "AI Developer",
      company: "Softvence Agency",
      duration: "Nov 2025 - Present",
      location: "Dhaka, Bangladesh",
      bullets: [
        "Develop advanced agentic AI systems and automation bots.",
        "Build multi-agent architectures enabling autonomous workflows.",
        "Deploy production-grade AI solutions using LLMs and vector DBs."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-slate-900">
      <div className="container mx-auto max-w-4xl">
        <h3 className="section-title mb-6 text-center">Experience</h3>
        {experiences.map((exp) => (
          <div key={exp.role} className="card mb-6">
            <h4 className="text-xl font-semibold text-white">{exp.role} — {exp.company}</h4>
            <p className="text-slate-400">{exp.duration} | {exp.location}</p>
            <ul className="list-disc ml-6 mt-2 text-slate-300">
              {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
