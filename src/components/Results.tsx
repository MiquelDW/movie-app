import { Movie } from "@/app/page";
import Card from "./Card";

export default function Movies({ movies }: { movies: Movie[] }) {
  return (
    <div className="mx-auto w-full max-w-6xl py-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {movies.map((movie: Movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
