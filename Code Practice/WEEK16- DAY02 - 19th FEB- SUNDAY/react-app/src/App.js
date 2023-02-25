import React, { useState } from "react";
import Card from "./card";
import Axios from "axios";

function App() {
  const [details, setDetails] = useState({});
  const fetchDetails = async () => {
    const { data } = await Axios.get("https://randomuser.me/api");
    console.log("RESPONSE", data);
    const details = data.results[0];
    setDetails(details);
  };
  let list = ["vaibhav", "sai", "prashant"];

  return (
    <>
      <div>App</div>
      <Card myname="vaibhav" list={list} details={details} />
      <button onClick={fetchDetails}>get details</button>
    </>
  );
}

export default App;
