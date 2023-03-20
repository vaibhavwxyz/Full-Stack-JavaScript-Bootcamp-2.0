import { useState } from "react";
import "./index.css";

function App() {
  const [task, setTask] = useState("");
  const [listData, setListData] = useState([]);

  function addTask() {
    // setListData(...listData, task);
    // console.log(listData); // this will might cause problem because in react it will work asychronically.
    setListData((listData) => {
      const updateList = [...listData, task];
      // console.log(updateList);
      setTask("");
      return updateList;
    });
  }

  function removeTask(i) {
    const updateListData = listData.filter((elem, id) => {
      return i != id;
    });
    setListData(updateListData);
  }

  function removeAll() {
    setListData([]);
  }

  return (
    <>
      <div className="flex flex-col mt-20 items-center space-y-5">
        <div className="text-3xl font-bold text-center text-[#fefefe]">
          TODO LIST
        </div>
        <div className="flex w-full justify-center items-center space-x-2">
          <input
            type="text"
            placeholder="Add Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex h-10 rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
          />
          <button
            className="active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-1 bg-indigo-600 focus:ring-indigo-400 focus:ring-offset-1 dark:hover:bg-indigo-700 dark:hover:text-gray-100 disabled:opacity-50 dark:focus:ring-indigo-400 disabled:pointer-events-none dark:focus:ring-offset-gray-900 dark:bg-indigo-600 text-white hover:bg-indigo-700 h-10 py-2 px-4"
            onClick={addTask}
          >
            Add
          </button>
        </div>

        <p className="list-heading">Here is you list</p>
        {listData != [] &&
          listData.map((data, i) => {
            return (
              <>
                <p key={i} className="flex justify-center items-center gap-2">
                  <div className="text-white">{data}</div>
                  <button className="remove" onClick={() => removeTask(i)}>
                    remove
                  </button>
                </p>
              </>
            );
          })}
        {listData.length >= 1 && (
          <button onClick={removeAll}>Remove All</button>
        )}
      </div>
    </>
  );
}

export default App;
