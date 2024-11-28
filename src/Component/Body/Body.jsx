import "./Styles/Body.css";
import Movie from "../Movie/Movie";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
function Body() {
  const [isWidthChange, setWidthChange] = useState(false);
  const [movies, setMovies] = useState([]);
  // useEffect(callback , dependencyArray)
  useEffect(() => {
    // console.log("Hi>>>");
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);
  // console.log(">>products", movies);

  return (
    <div>
      <Header setWidthChange={setWidthChange} isWidthChange={isWidthChange} />
      <Movie isWidthChange={isWidthChange} />
      {movies?.map((item) => {
        return (
          <div>
            <h3>{item.title}</h3>
          </div>
        );
      })}
    </div>
  );
}
export default Body;

// falsy values : undefined , false, 0
