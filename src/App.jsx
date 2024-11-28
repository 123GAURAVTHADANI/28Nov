import { useState } from "react";
import "./App.css";

function App() {
  // true means light
  const [theme, setTheme] = useState(true);
  const handleBtnClick = () => {
    setTheme(!theme);
  };
  // if the theme is light u want to make the btn bgColor as blue
  return (
    <div
      style={{
        backgroundColor: theme ? "white" : "black",
        color: theme ? "green" : "purple",
      }}
    >
      {/* if theme is light (true) show paragraph else do
      dont show the para
      */}
      {theme ? <p>Light</p> : <p>Dark!</p>}
      <button
        style={{ backgroundColor: theme ? "" : "blue" }}
        onClick={handleBtnClick}
      >
        Toggle!
      </button>
    </div>
  );
}

export default App;
// <button style={background-color:"blue";}>
