import { PlusIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const CustomForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({
      name: task,
      checked: false,
      id: Date.now(),
    });
    setTask("");
  };

  return (
    <form className="lg:p-20" onSubmit={handleFormSubmit}>
      <div className="flex flex-col gap-y-5">
        <h1 className="text-center text-2xl font-bold">My Task List</h1>
        <div className="flex gap-x-2 justify-center items-center">
          <input
            type="text"
            id="task"
            className="px-2 border-[2px] outline-none drop-shadow-xl rounded-full max-w-xs placeholder:text-blue-500"
            value={task}
            onInput={(e) => setTask(e.target.value)}
            autoFocus
            required
            maxLength={60}
            placeholder="Enter Task"
          />
          <button className="h-10 w-10" aria-label="Add Task" type="submit">
            <PlusIcon className="h-6 w-6 text-blue-500" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default CustomForm;
