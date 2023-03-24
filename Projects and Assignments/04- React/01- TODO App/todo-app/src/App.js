import { useState, useEffect } from "react";
import "./index.css";

const getLocalListData = () => {
  let list = localStorage.getItem("todo");

  if (list) {
    return JSON.parse(localStorage.getItem("todo"));
  } else {
    return [];
  }
};

function App() {
  const [task, setTask] = useState("");
  const [listData, setListData] = useState(getLocalListData());
  const [isEdited, setIsEdited] = useState(false);
  const [finalEdit, setFinalEdit] = useState(0);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(listData));
    // console.log(listData);
  }, [listData]);

  function addTask() {
    // setListData(...listData, task);
    // console.log(listData); // this will might cause problem because in react it will work asychronically.
    if (task.length > 0) {
      setListData((listData) => {
        const updateList = [...listData, task];
        // console.log(updateList);
        setTask("");
        return updateList;
      });
    }
  }

  function editTask(i) {
    setTask(listData[i]);
    setIsEdited((prev) => !prev);
    setFinalEdit(i);
  }

  function updateTask() {
    const tempArr = [...listData];
    if (task.length > 0) {
      tempArr[finalEdit] = task;
      setListData(tempArr);
    }
    // if (task.length > 0) {
    //   setListData((listData) => {
    //     const updateList = [...listData, task];
    //     // console.log(updateList);
    //     setTask("");
    //     return updateList;
    //   });
    // }
    setTask("");
    setIsEdited(false);
    // console.log(finalEdit);
    // console.log(tempArr);
  }

  function removeTask(i) {
    const updateListData = listData.filter((elem, id) => {
      return i !== id;
    });
    setListData(updateListData);
  }

  function removeAll() {
    setListData([]);
  }

  return (
    <>
      <div className="flex max-w-2xl mx-auto flex-col mt-20 items-center space-y-5">
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
          {isEdited ? (
            <button
              className="active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-1 bg-indigo-600 focus:ring-indigo-400 focus:ring-offset-1 dark:hover:bg-indigo-700 dark:hover:text-gray-100 disabled:opacity-50 dark:focus:ring-indigo-400 disabled:pointer-events-none dark:focus:ring-offset-gray-900 dark:bg-indigo-600 text-white hover:bg-indigo-700 h-10 py-2 px-4"
              onClick={() => updateTask()}
            >
              Update
            </button>
          ) : (
            <button
              className="active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-1 bg-indigo-600 focus:ring-indigo-400 focus:ring-offset-1 dark:hover:bg-indigo-700 dark:hover:text-gray-100 disabled:opacity-50 dark:focus:ring-indigo-400 disabled:pointer-events-none dark:focus:ring-offset-gray-900 dark:bg-indigo-600 text-white hover:bg-indigo-700 h-10 py-2 px-4"
              onClick={addTask}
            >
              Add
            </button>
          )}
        </div>

        <p className="text-white">Here is you list</p>
        {listData !== [] &&
          listData.map((data, i) => {
            return (
              <>
                <p key={i} className="flex justify-center items-start gap-2">
                  <div className="w-[14rem] sm:w-[15rem] md:w-[20rem] xl:w-[24rem] 2xl:w-[32rem] text-left text-white inline-flex items-center rounded-md text-sm font-medium transition-colors bg-[#515151] hover:bg-[#434343] hover:cursor-default py-2 px-4 min-h-[2.5rem]">
                    {data}
                  </div>
                  <button
                    className="text-white active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none bg-[#1cae02] dark:hover:text-gray-100 text-white hover:bg-[#178407] h-10 py-2 px-4 "
                    onClick={() => editTask(i)}
                  >
                    edit
                  </button>
                  <button
                    className="text-white active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-[#e44f54] hover:bg-[#d03237] h-10 py-2 px-4"
                    onClick={() => removeTask(i)}
                  >
                    remove
                  </button>
                </p>
              </>
            );
          })}
        {listData.length >= 1 && (
          <button
            onClick={removeAll}
            className="text-white active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-1 bg-[#ef767a] focus:ring-indigo-400 focus:ring-offset-1 dark:hover:bg-[#d03237] dark:hover:text-gray-100 disabled:opacity-50 dark:focus:ring-indigo-400 disabled:pointer-events-none dark:focus:ring-offset-gray-900 dark:bg-[#e44f54] text-white hover:bg-[#d03237] h-10 py-2 px-4"
          >
            Remove All
          </button>
        )}
      </div>
    </>
  );
}

export default App;
