// import movie from "../../assets/Data/movies.json";
import "../Body/Styles/body.css";
import "./Styles/Movie.css";
function Movie(props) {
  console.log(">props", props);
  return (
    <div className={props.isWidthChange ? "containerChanged" : "container"}>
      {/* {movie.movies.map((item, index) => {
        return (
          index !== 1 && (
            <div className="card">
              {item.title}
              <div className="cast">
                {item &&
                  item.cast &&
                  item.cast.map((item) => {
                    return <h6>{item.name}</h6>;
                  })}
              </div>
            </div>
          )
        );
      })} */}
      {props?.movies?.map((item) => {
        return (
          <div>
            <h3>{item.title}</h3>
          </div>
        );
      })}
    </div>
  );
}
export default Movie;
