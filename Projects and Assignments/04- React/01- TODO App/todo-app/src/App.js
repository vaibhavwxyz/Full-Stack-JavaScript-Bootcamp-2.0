import React, { useState } from "react";
import CustomForm from "./components/CustomForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };
  return (
    <>
      <CustomForm addTask={addTask} />
      {tasks && <TaskList tasks={tasks} />}
    </>
  );
}

export default App;
