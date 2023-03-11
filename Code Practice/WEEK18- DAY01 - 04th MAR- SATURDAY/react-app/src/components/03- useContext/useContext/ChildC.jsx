import React, { useContext } from "react";
import { data } from "./UseContext";

const ChildC = () => {
  const surname = useContext(data);
  console.log(surname);
  return (
    <div>
      <h1>Hello, mr. {surname}</h1>
    </div>
  );
};

export default ChildC;
