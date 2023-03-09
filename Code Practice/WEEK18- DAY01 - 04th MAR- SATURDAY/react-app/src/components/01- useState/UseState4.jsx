import { useState } from "react";

const UseState4 = () => {
  const [details, setDetails] = useState({ counter: 0, name: "" });

  function oneUp() {
    // setDetails({ counter: details.counter + 1 });
    setDetails((prev) => ({
      ...prev,
      counter: prev.counter + 1,
    }));
  }

  console.log(details);

  return (
    <div>
      <input
        type="text"
        placeholder="type anything"
        onChange={(e) => {
          setDetails(e.target.value);
        }}
      ></input>
      <h1>
        {details.name} has been clicked {details.counter} times
      </h1>
      <button onClick={oneUp}>click me</button>
      {/* <button onClick={reset}>reset</button> */}
    </div>
  );
};

export default UseState4;
