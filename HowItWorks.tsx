import { Database, Filter, GitBranch, BarChart3, Cpu, Sparkles } from "lucide-react";

const steps = [
  { icon: Database, title: "Data Collection", desc: "Load TMDB 5000 movies & credits datasets" },
  { icon: Filter, title: "Preprocessing", desc: "Merge, clean, and extract features" },
  { icon: GitBranch, title: "Feature Engineering", desc: "Create tags from genres, cast, keywords" },
  { icon: Cpu, title: "Vectorization", desc: "CountVectorizer converts text to vectors" },
  { icon: BarChart3, title: "Similarity", desc: "Cosine similarity between all movies" },
  { icon: Sparkles, title: "Recommend", desc: "Return top 5 most similar movies" },
];

export function HowItWorks() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-2">How It Works</h2>
        <p className="text-center text-muted-foreground mb-10">Our content-based filtering pipeline</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center p-4 rounded-lg bg-card border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs font-bold text-primary mb-1">Step {i + 1}</span>
              <h3 className="font-semibold text-sm text-foreground">{s.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
