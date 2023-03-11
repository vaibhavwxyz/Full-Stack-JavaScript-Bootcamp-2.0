import React, { useContext } from "react";
import ChildA from "./ChildA";

export const data = useContext();

const UseContext = () => {
  const Lname = "shinde";
  return (
    <data.Provider value={Lname}>
      <div>
        <ChildA />
      </div>
    </data.Provider>
  );
};

export default UseContext;
