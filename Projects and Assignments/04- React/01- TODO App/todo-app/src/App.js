import React, { useState } from "react";
import CustomForm from "./components/CustomForm";

function App() {
  const [count, setCount] = useState(0);
  const addTask = (task) => {
    console.log(task);
  };
  return (
    <>
      <CustomForm addTask={addTask} />
    </>
  );
}

export default App;
