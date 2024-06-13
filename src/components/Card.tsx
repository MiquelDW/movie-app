import { Movie } from "@/app/page";
import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ movie }: { movie: Movie }) {
  return (
    // use the 'group' utility class to apply styles to child elements when the parent element is in a certain state (in this case, a hover state)
    <div className="group cursor-pointer rounded-lg transition-shadow duration-200 sm:m-2 sm:border sm:border-slate-400 sm:shadow-md sm:hover:shadow-slate-400">
      <Link href={`/movie/${movie.id}`}>
        {/* Movie poster Section */}
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
          alt="Movie Poster"
          width={500}
          height={300}
          // image element will change its style when the parent <div> is being hovered over because of the 'group' utility class
          className="transition-opacity duration-300 group-hover:opacity-75 sm:rounded-t-lg"
        />

        {/* Movie overview + title Section */}
        <div className="p-2">
          <p className="text-md line-clamp-2">{movie.overview}</p>
          {/* handle title overflow with 'truncate' tailwindcss prop (e.g. on small screen sizes) */}
          <h2 className="truncate text-lg font-bold">
            {movie.title || movie.original_title || movie.name}
          </h2>
          <p className="flex items-center">
            {movie.release_date || movie.first_air_date}
            <FiThumbsUp className="ml-3 mr-1 h-5" />
            {movie.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
