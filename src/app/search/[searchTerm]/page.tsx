import Results from "@/components/Results";

// predefine object structure for the given 'props' object
type SearchPageProps = {
  // contains dynamic route parameter from the current URL (names must match!!)
  params: { searchTerm: string };
};

// destructure given 'props' object
export default async function SearchPage({ params }: SearchPageProps) {
  // retrieve current route parameter from the URL
  const searchTerm = params.searchTerm;

  // GET request handler function
  // with Server Components you get request memorization, caching and revalidation features out of the box
  const fetchData = async () => {
    try {
      // create a GET HTTP request to the speficified URL using the Fetch API
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`,
      );

      // parse the response body from the fetch request as JSON
      const data = await res.json();

      // retrieve and return the main data of the parsed API response object
      const movies = data.results;
      return movies;
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
  const movies = await fetchData();
  console.log(movies);

  return (
    <div>
      {!movies ? (
        <h1 className="pt-6 text-center">No movies found</h1>
      ) : movies.length === 0 ? (
        <h1 className="pt-6 text-center">No movies found</h1>
      ) : (
        <Results movies={movies} />
      )}
    </div>
  );
}
