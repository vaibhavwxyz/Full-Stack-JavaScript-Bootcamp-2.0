import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [listData, setListData] = useState([]);

  function addTask() {
    // setListData(...listData, task);
    // console.log(listData); // this will might cause problem because in react it will work asychronically.
    setListData((listData) => {
      const updateList = [...listData, task];
      console.log(updateList);
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
      <div className="container">
        <div className="header">TODO LIST</div>
        <input
          type="text"
          placeholder="Add Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn" onClick={addTask}>
          Add
        </button>
        <p className="list-heading">Here is you list</p>
        {listData != [] &&
          listData.map((data, i) => {
            return (
              <>
                <p key={i}>
                  <div className="list-data">{data}</div>
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
