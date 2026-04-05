const tools = [
  { name: "Python", desc: "Core programming language for ML pipeline", color: "bg-blue-500" },
  { name: "Pandas", desc: "Data manipulation and analysis", color: "bg-emerald-500" },
  { name: "NumPy", desc: "Numerical computing and arrays", color: "bg-cyan-500" },
  { name: "Scikit-learn", desc: "ML algorithms & cosine similarity", color: "bg-orange-500" },
  { name: "NLTK", desc: "Text processing & stemming", color: "bg-purple-500" },
  { name: "Streamlit", desc: "Web application deployment", color: "bg-red-500" },
];

export function TechStack() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-2">Tech Stack</h2>
        <p className="text-center text-muted-foreground mb-10">Tools & technologies powering the system</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {tools.map((t) => (
            <div key={t.name} className="border border-border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <div className={`w-10 h-10 ${t.color} rounded-lg mx-auto mb-3 flex items-center justify-center text-white font-bold text-lg`}>
                {t.name[0]}
              </div>
              <h3 className="font-semibold text-sm text-foreground">{t.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
