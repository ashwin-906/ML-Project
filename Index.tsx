import { useState } from "react";
import { movies, getRecommendations, Movie } from "@/lib/movieData";
import { MovieCard } from "@/components/MovieCard";
import { HowItWorks } from "@/components/HowItWorks";
import { MetricsSection } from "@/components/MetricsSection";
import { TechStack } from "@/components/TechStack";
import { Film, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Index() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const recommendations = selectedMovie ? getRecommendations(selectedMovie.id) : [];

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 h-14 flex items-center gap-2">
          <Film className="w-6 h-6 text-primary" />
          <span className="font-bold text-foreground text-lg">MovieRec</span>
          <span className="text-xs text-muted-foreground ml-1">ML Recommendation System</span>
        </div>
      </nav>

      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Movie Recommendation System
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            A content-based filtering engine built with Python, Scikit-learn & NLP.
            Select a movie below to get personalized recommendations powered by cosine similarity.
          </p>
          <Button variant="outline" size="sm" onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}>
            Try the Demo <ArrowDown className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </section>

      <section id="demo" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-2">Interactive Demo</h2>
          <p className="text-muted-foreground mb-6">Click any movie to see its recommendations</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-10">
            {movies.map((m) => (
              <MovieCard key={m.id} movie={m} onClick={setSelectedMovie} selected={selectedMovie?.id === m.id} />
            ))}
          </div>
          {selectedMovie && (
            <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="border border-border rounded-lg p-6 bg-card">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  Recommendations for "{selectedMovie.title}"
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Based on genres, cast, and keyword similarity using cosine distance
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {recommendations.map((r) => (
                    <MovieCard key={r.movie.id} movie={r.movie} similarity={r.similarity} onClick={setSelectedMovie} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <HowItWorks />
      <MetricsSection />
      <TechStack />

      <footer className="border-t border-border py-8 bg-card">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Movie Recommendation System — A Machine Learning Project</p>
          <p className="text-xs mt-1">Built with TMDB 5000 Dataset • Content-Based Filtering • Cosine Similarity</p>
        </div>
      </footer>
    </div>
  );
}
