// always use 'import type' for importing types when isolatedModules is enabled. This avoids conflicts and helps TypeScript understand that the import is only for type-checking purposes
import type { Movie } from "@/app/page";
import Image from "next/image";

type MovieProps = {
  // contains dynamic route parameter from the current URL (names must match!!)
  params: { id: string };
};

export default async function Movie({ params }: MovieProps) {
  // retrieve current route parameter from the URL
  const movieId = params.id;

  // GET request handler function
  // with Server Components you get request memorization, caching and revalidation features out of the box
  const fetchData = async () => {
    try {
      // create a GET HTTP request to the speficified URL using the Fetch API
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${process.env.API_KEY}`,
      );

      // handles HTTP errors that the Fetch API itself does not treat as errors
      if (!res.ok) {
        // throw new error to catch block with a message indicating the HTTP status
        throw new Error(`HTTP error! Status: ${res.status} ${res.statusText}`);
      }

      // parse the response body from the fetch request as JSON
      const data = await res.json();
      return data;
    } catch (err) {
      // handle both network errors and HTTP errors
      if (err instanceof Error) {
        console.log(err.message);
      } else {
        console.log("An unknown error occured");
      }
    }
  };

  // fetch data from the specified URL / API
  const movie: Movie = await fetchData();
  console.log(movie);

  return (
    <div className="w-full">
      {movie ? (
        <div className="mx-auto flex max-w-6xl flex-col content-center p-4 md:flex-row md:space-x-6 md:p-8">
          {/* Left Section */}
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
            alt="Movie Poster"
            width={500}
            height={300}
            // image max-width = 100% (500px) and height is also 100%
            className="h-full max-w-full rounded-lg"
          />

          {/* Right Section */}
          <div className="p-2">
            <h2 className="mb-3 text-lg font-bold">
              {movie.title ||
                movie.name ||
                movie.original_name ||
                movie.original_title}
            </h2>
            <p className="mb-3 text-lg">{movie.overview}</p>
            <p>
              <span className="mr-1 font-semibold">Date Released:</span>
              {movie.release_date || movie.first_air_date}
            </p>
            <p className="mb-3">
              <span className="mr-1 font-semibold">Rating:</span>
              {movie.vote_count}
            </p>
          </div>
        </div>
      ) : (
        <h1 className="mt-10 text-center text-lg">
          This movie cannot be shown.
        </h1>
      )}
    </div>
  );
}
