import.meta.env.MODE;
export const MovieCard = (props) => {
  const { title, id, release_date, overview, poster_path } = props.movie;
  //   const API_KEY = process.env.TMDB_API;
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 p-2 rounded-0 ">
      <div>
        <div className="card rounded-0">
          <img
            src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
            className="card-img-top rounded-0"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title ">{title.slice(0, 30)}</h5>
            <p>{release_date}</p>
            <p className="card-text">{overview.slice(0, 100)}...</p>
            {/* <a
              href={`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`}
              className="btn btn-info rounded-0"
            >
              detailes
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};
