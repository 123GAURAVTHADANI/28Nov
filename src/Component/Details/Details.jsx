import { useState } from "react";
import "./Styles/Details.css";
function Details(props) {
  const [counter, setCounter] = useState(0);
  const handleCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <div
      className="details__container"
      style={{ backgroundColor: props.theme ? "white" : "purple" }}
    >
      <h4>{counter}</h4>
      <button onClick={handleCounter}>Increment</button>
      {props.theme ? props.title1 : props.title2}
    </div>
  );
}

// <div style={background-color:black;}
export default Details;
