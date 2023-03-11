import React from "react";
import ChildTwo from "./ChildTwo";

const ChildOne = ({ fName }) => {
  return (
    <div>
      <ChildTwo fName={fName} />
    </div>
  );
};

export default ChildOne;
