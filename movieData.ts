export interface Movie {
  id: number;
  title: string;
  genres: string[];
  overview: string;
  rating: number;
  year: number;
  poster: string;
  cast: string[];
  keywords: string[];
}

export const movies: Movie[] = [
  { id: 1, title: "The Dark Knight", genres: ["Action", "Crime", "Drama"], overview: "When the menace known as the Joker wreaks havoc on Gotham, Batman must accept one of the greatest tests to fight injustice.", rating: 9.0, year: 2008, poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300&h=450&fit=crop", cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"], keywords: ["superhero", "gotham", "joker", "batman"] },
  { id: 2, title: "Inception", genres: ["Action", "Sci-Fi", "Thriller"], overview: "A thief who steals corporate secrets through dream-sharing technology is given the task of planting an idea into the mind of a CEO.", rating: 8.8, year: 2010, poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop", cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"], keywords: ["dream", "subconscious", "heist", "mind"] },
  { id: 3, title: "Interstellar", genres: ["Adventure", "Drama", "Sci-Fi"], overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.", rating: 8.6, year: 2014, poster: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=300&h=450&fit=crop", cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"], keywords: ["space", "wormhole", "time", "survival"] },
  { id: 4, title: "The Matrix", genres: ["Action", "Sci-Fi"], overview: "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.", rating: 8.7, year: 1999, poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=450&fit=crop", cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"], keywords: ["virtual reality", "hacker", "chosen one", "simulation"] },
  { id: 5, title: "Pulp Fiction", genres: ["Crime", "Drama"], overview: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.", rating: 8.9, year: 1994, poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop", cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"], keywords: ["crime", "nonlinear", "gangster", "redemption"] },
  { id: 6, title: "Avatar", genres: ["Action", "Adventure", "Sci-Fi"], overview: "A paraplegic Marine dispatched to Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.", rating: 7.9, year: 2009, poster: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=300&h=450&fit=crop", cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"], keywords: ["alien", "planet", "nature", "technology"] },
  { id: 7, title: "The Prestige", genres: ["Drama", "Mystery", "Sci-Fi"], overview: "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion.", rating: 8.5, year: 2006, poster: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=300&h=450&fit=crop", cast: ["Christian Bale", "Hugh Jackman", "Scarlett Johansson"], keywords: ["magic", "rivalry", "obsession", "twist"] },
  { id: 8, title: "Batman Begins", genres: ["Action", "Crime", "Drama"], overview: "After training with his mentor, Batman begins his fight to free Gotham City from corruption.", rating: 8.2, year: 2005, poster: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=300&h=450&fit=crop", cast: ["Christian Bale", "Michael Caine", "Liam Neeson"], keywords: ["superhero", "gotham", "origin", "batman"] },
  { id: 9, title: "Fight Club", genres: ["Drama"], overview: "An insomniac office worker and a devil-may-care soap maker form an underground fight club.", rating: 8.8, year: 1999, poster: "https://images.unsplash.com/photo-1549558549-415fe4c37b60?w=300&h=450&fit=crop", cast: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"], keywords: ["identity", "anarchy", "masculinity", "twist"] },
  { id: 10, title: "The Shawshank Redemption", genres: ["Drama"], overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.", rating: 9.3, year: 1994, poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=450&fit=crop", cast: ["Tim Robbins", "Morgan Freeman"], keywords: ["prison", "hope", "friendship", "redemption"] },
  { id: 11, title: "Memento", genres: ["Mystery", "Thriller"], overview: "A man with short-term memory loss attempts to track down his wife's murderer.", rating: 8.4, year: 2000, poster: "https://images.unsplash.com/photo-1518676590747-1e3dcf5a1e88?w=300&h=450&fit=crop", cast: ["Guy Pearce", "Carrie-Anne Moss", "Joe Pantoliano"], keywords: ["memory", "revenge", "nonlinear", "mystery"] },
  { id: 12, title: "Star Wars: A New Hope", genres: ["Action", "Adventure", "Sci-Fi"], overview: "Luke Skywalker joins forces with a Jedi Knight to save the galaxy from the Empire's world-destroying battle station.", rating: 8.6, year: 1977, poster: "https://images.unsplash.com/photo-1472457897821-70d561d6bca1?w=300&h=450&fit=crop", cast: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"], keywords: ["space", "jedi", "empire", "hero"] },
];

// Simple content-based recommendation using tag similarity
function computeSimilarity(a: Movie, b: Movie): number {
  const tagsA = new Set([...a.genres, ...a.keywords, ...a.cast].map(t => t.toLowerCase()));
  const tagsB = new Set([...b.genres, ...b.keywords, ...b.cast].map(t => t.toLowerCase()));
  let intersection = 0;
  tagsA.forEach(t => { if (tagsB.has(t)) intersection++; });
  const union = new Set([...tagsA, ...tagsB]).size;
  return union === 0 ? 0 : intersection / union;
}

export function getRecommendations(movieId: number, count = 5): { movie: Movie; similarity: number }[] {
  const target = movies.find(m => m.id === movieId);
  if (!target) return [];
  return movies
    .filter(m => m.id !== movieId)
    .map(m => ({ movie: m, similarity: computeSimilarity(target, m) }))
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, count);
}
