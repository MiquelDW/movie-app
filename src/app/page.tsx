import Results from "@/components/Results";

// predefine object structure for each Movie object
export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
};

// retrieve the API KEY from the environmental variable
const API_KEY = process.env.API_KEY;

type HomeProps = {
  // contains query parameters of the current URL
  searchParams: { genre: string };
};

export default async function Home({ searchParams }: HomeProps) {
  // retrieve the current value of query paremeter "genre" from the current URL
  // if there's not a query parameter present (e.g. when app starts), use "fetchTrending" genre value for the API
  const genre = searchParams.genre || "fetchTrending";

  // GET request handler function
  // with Server Components you get request memorization, caching and revalidation features out of the box
  const fetchData = async () => {
    try {
      // create a GET HTTP request to the speficified URL using the Fetch API
      const res = await fetch(
        `https://api.themoviedb.org/3${genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week"}?api_key=${API_KEY}&language=en-US&page=1`,
        {
          // revalidate the static page in the background every 1000s (ISR).
          // after the time period expires, the next request will trigger a revalidation. The stale page is still served to the user while the revalidation occurs in the background.
          // once the page is revalidated and regenerated, the new version replaces the old one in the cache. Subsequent requests after this revalidation will receive the updated page.
          next: { revalidate: 1000 },
        },
      );

      // handles HTTP errors that the Fetch API itself does not treat as errors
      if (!res.ok) {
        // throw new error to catch block with a message indicating the HTTP status
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      // parse the response body from the fetch request as JSON
      const data = await res.json();

      // retrieve and return the main data of the parsed API response object
      const results = data.results;
      return results;
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
  const movies: Movie[] = await fetchData();

  // return an error if no movie data has been fetched ('movies' is empty)
  if (!movies) {
    return <h1 className="text-red-400">An Error occured!</h1>;
  }

  // test if fetching was succesfull
  const titles = movies?.map((movie: Movie) => {
    return movie.original_title;
  });
  console.log(titles);
  console.log(movies);

  // otherwise, display the fetched movies data
  return (
    <div>
      <Results movies={movies} />
    </div>
  );
}
