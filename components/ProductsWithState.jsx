import { MovieCard } from "./MovieCard.jsx";
import { useState, useEffect } from "react";
export const ProductsWithState = () => {
  const [allMovies, setAllMovies] = useState([]);
  const API_KEY = "70e19cb63bb0d8ad2cc6aae2ad43c451";
  async function fetchData() {
    return await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    )
      .then((data) => data.json())
      .then((movies) => setAllMovies(movies.results));
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row py-4">
        {allMovies.map((movie) => {
          console.log(movie);
          return (
            <>
              <MovieCard movie={movie} key={movie.id} />
            </>
          );
        })}
      </div>
    </div>
  );
};
