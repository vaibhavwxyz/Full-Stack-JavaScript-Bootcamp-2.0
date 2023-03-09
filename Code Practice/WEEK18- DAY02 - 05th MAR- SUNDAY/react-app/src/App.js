import Child1 from "./Child1";

function App() {
  const fName = "Vaibhav";

  return (
    <div>
      <h1>
        <Child1 fName={fName} />
      </h1>
    </div>
  );
}

export default App;
