import React from "react";
import ChildOne from "./ChildOne";

const UseContext = () => {
  const fName = "vaibhav";
  return (
    <div>
      <ChildOne fName={fName} />
    </div>
  );
};

export default UseContext;
