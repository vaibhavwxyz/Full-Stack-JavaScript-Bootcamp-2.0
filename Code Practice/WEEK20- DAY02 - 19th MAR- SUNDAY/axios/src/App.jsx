import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((resopnse) => {
      console.log(resopnse);
      setData(resopnse.data);
    }, []);
  });

  return (
    <>
      <h1>
        {data.map((data) => {
          return <h1> {data.name}</h1>;
        })}
      </h1>
    </>
  );
}

export default App;
