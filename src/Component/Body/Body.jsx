import { useEffect, useState } from "react";
import "./Styles/Body.css";
import axios from "axios";
function Body() {
  const [dogName, setDogChange] = useState("");
  const [dogImage, setDogURL] = useState("");
  const [triggerEffect, setTriggerEffect] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // stopwatch
  const [stopWatch, setStopWatch] = useState(0);

  // useEffect(() => {
  //   // updation
  //   if (triggerEffect >= 1) {
  //     fetch(`https://dog.ceo/api/breed/${dogName}/images/random`)
  //       .then((response) => response.json())
  //       .then((res) => {
  //         if (res.status == "success") {
  //           setDogURL(res.message);
  //           setIsLoading(!isLoading);
  //         } else if (res.status == "error") {
  //           setIsLoading(!isLoading);
  //         }
  //       })
  //       .catch((err) => console.error(err));
  //     // return () => {
  //     //   // clean up the states
  //     //   // when u are coming to this useEffect next Time
  //     //   setDogURL("");
  //     // };
  //   }
  // }, [triggerEffect]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStopWatch((stopWatch) => stopWatch + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [triggerEffect]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(!isLoading);
    setTriggerEffect(triggerEffect + 1);
  };
  const handleDogName = (event) => {
    setDogChange(event.target.value);
  };
  // console.log(">>dogname", dogName);
  return (
    <div>
      <h3>{stopWatch}</h3>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => handleDogName(event)}
          type="text"
          placeholder="Search Dog"
        />
        <button type="submit">Submit</button>
      </form>
      {isLoading && (
        <img src="https://loading.io/assets/mod/spinner/spinner/lg.gif" />
      )}
      {dogImage && <img src={dogImage} alt="preview" />}
    </div>
  );
}
export default Body;
