import { PlusIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const CustomForm = () => {
  const [task, setTask] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <form className="todo" onSubmit={handleFormSubmit}>
      <p>{task}</p>
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input"
          value={task}
          onInput={(e) => setTask(e.target.value)}
          autoFocus
          required
          maxLength={60}
          placeholder="Enter Task"
        />
        <label htmlFor="task" className="label">
          Enter Task
        </label>
      </div>
      <button className="btn" aria-label="Add Task" type="submit">
        <PlusIcon className="h-6 w-6 text-blue-500" />
      </button>
    </form>
  );
};

export default CustomForm;
