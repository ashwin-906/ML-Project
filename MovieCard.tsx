import { Movie } from "@/lib/movieData";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface MovieCardProps {
  movie: Movie;
  similarity?: number;
  onClick: (movie: Movie) => void;
  selected?: boolean;
}

export function MovieCard({ movie, similarity, onClick, selected }: MovieCardProps) {
  return (
    <div
      onClick={() => onClick(movie)}
      className={`cursor-pointer rounded-lg overflow-hidden border transition-all hover:shadow-lg hover:-translate-y-1 ${
        selected ? "ring-2 ring-primary border-primary" : "border-border"
      }`}
    >
      <div className="relative h-44 overflow-hidden">
        <img src={movie.poster} alt={movie.title} className="w-full h-full object-cover" />
        {similarity !== undefined && (
          <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
            {(similarity * 100).toFixed(0)}% match
          </div>
        )}
        <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-background/80 backdrop-blur-sm text-foreground text-xs font-semibold px-2 py-1 rounded">
          <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
          {movie.rating}
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-sm text-foreground truncate">{movie.title}</h3>
        <p className="text-xs text-muted-foreground mt-0.5">{movie.year}</p>
        <div className="flex flex-wrap gap-1 mt-2">
          {movie.genres.slice(0, 2).map(g => (
            <Badge key={g} variant="secondary" className="text-[10px] px-1.5 py-0">
              {g}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
