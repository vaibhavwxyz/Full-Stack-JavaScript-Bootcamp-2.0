import React from "react";
import UseState1 from "./components/01- useState/UseState1";
import UseState2 from "./components/01- useState/UseState2";
import UseState3 from "./components/01- useState/UseState3";
import UseState4 from "./components/01- useState/UseState4";
import UseEffect1 from "./components/02- useEffect/UseEffect1";
import UseEffect2 from "./components/02- useEffect/UseEffect2";
import UseEffect3 from "./components/02- useEffect/UseEffect3";
import UseContext from "./components/03- useContext/prop-drilling/PropDrilling";

import UseRef from "./components/04- useRef/UseRef";

function App() {
  return (
    <>
      {/* <UseState1 />
      <UseState2 data={1} />
      <UseState2 data={5} /> */}
      {/* <UseState3 /> */}
      {/* <UseState4 /> */}
      {/* <UseEffect1 /> */}
      {/* <UseEffect2 /> */}
      {/* <UseEffect3 /> */}
      <UseContext />
      {/* <UseRef /> */}
    </>
  );
}

export default App;
