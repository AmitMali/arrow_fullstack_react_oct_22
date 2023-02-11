import axios from "axios";
import { useEffect, useState } from "react";
const API_KEY = "70e19cb63bb0d8ad2cc6aae2ad43c451";
import { MovieCard } from "./MovieCard";

const AllSeries = () => {
  const [allSeries, setAllSeries] = useState([]);
  const getAllSeries = async () => {
    let result = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    setAllSeries(result.data.results);
  };

  useEffect(() => {
    // console.log(allMovies);
    getAllSeries();
  }, []);
  return (
    <div className="container">
      <div className="row py-4">
        {allSeries.map((movie) => {
          return <MovieCard movie={movie} key={movie.id} />;
        })}
      </div>
    </div>
  );
};

export default AllSeries;
