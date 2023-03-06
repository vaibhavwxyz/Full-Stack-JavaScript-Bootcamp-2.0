import { useState } from "react";

function UseState1({ data }) {
  const [value, setValue] = useState(data);

  function increment() {
    setValue(value + data);
  }
  function decrement() {
    setValue(value - data);
  }

  return (
    <div>
      <button onClick={decrement}>Decrement</button>
      {value}
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default UseState1;
