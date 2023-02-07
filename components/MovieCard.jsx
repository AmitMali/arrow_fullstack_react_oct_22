export const MovieCard = (props) => {
  const { title, id, release_date, backdrop_path, overview } = props.movie;
  const API_KEY = "70e19cb63bb0d8ad2cc6aae2ad43c451";
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 p-2 rounded-0 ">
      <div>
        <div className="card rounded-0">
          <img
            src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
            className="card-img-top rounded-0"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title ">{title.slice(0, 30)}</h5>
            <p>{release_date}</p>
            <p className="card-text">{overview.slice(0, 100)}...</p>
            <a
              href={`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`}
              className="btn btn-primary rounded-0"
            >
              detailes
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};