import { useState } from "react";
import CustomForm from "./components/CustomForm";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      <CustomForm />
    </div>
  );
}

export default App;
