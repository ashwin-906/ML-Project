const metrics = [
  { value: "85%", label: "Precision@5", desc: "Relevant movies in top 5 results" },
  { value: "78%", label: "Recall@10", desc: "Relevant movies retrieved" },
  { value: "0.91", label: "Avg Cosine Sim", desc: "Average similarity score" },
  { value: "4,803", label: "Movies", desc: "In TMDB dataset" },
];

export function MetricsSection() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Results & Accuracy</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <div className="text-4xl md:text-5xl font-black">{m.value}</div>
              <div className="text-sm font-semibold mt-2 opacity-90">{m.label}</div>
              <div className="text-xs mt-1 opacity-70">{m.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
