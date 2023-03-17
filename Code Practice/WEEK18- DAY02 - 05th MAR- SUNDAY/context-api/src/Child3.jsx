import React from "react";
import { data } from "./App";

const Child3 = () => {
  return (
    <>
      <data.Consumer>
        {(fName) => {
          return <h1>Hey, {fName}</h1>;
        }}
      </data.Consumer>
    </>
  );
};

export default Child3;
