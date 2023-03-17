import Child1 from "./Child1";
import { createContext } from "react";

const data = createContext();

function App() {
  const fName = "Vaibhav";
  // create, provider, consumer

  return (
    <>
      <data.Provider value={fName}>
        <Child1 />
      </data.Provider>
    </>
  );
}

export default App;
export { data };
