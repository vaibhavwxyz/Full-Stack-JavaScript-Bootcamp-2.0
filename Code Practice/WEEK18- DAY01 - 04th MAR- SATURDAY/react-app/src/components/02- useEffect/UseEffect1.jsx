import React, { useState, useEffect } from "react";

function UseEffect1() {
  let [count, setCount] = useState(0);
  let [otherCount, setOtherCount] = useState(0);

  useEffect(() => {
    document.title = `${otherCount} new Messages!`;
  }, [otherCount]);

  return (
    <>
      <h1>{count} new Messages!</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount((count = 0))}>Reset</button>
      <h1>{otherCount} new Messages!</h1>
      <button onClick={() => setOtherCount(otherCount + 5)}>
        Increase by 5
      </button>
    </>
  );
}

export default UseEffect1;
