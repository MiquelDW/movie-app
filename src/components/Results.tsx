import { Movie } from "@/app/page";

export default function Movies({ movies }: { movies: Movie[] }) {
  return (
    <div>
      {movies.map((movie: Movie) => (
        <div key={movie.id}>
          <h2>{movie.original_title}</h2>
        </div>
      ))}
    </div>
  );
}
