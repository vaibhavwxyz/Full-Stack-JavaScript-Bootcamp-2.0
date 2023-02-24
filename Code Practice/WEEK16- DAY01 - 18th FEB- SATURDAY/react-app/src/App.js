import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(100);
  function oneUp() {
    setCount(count + 1);
  }
  return (
    <div>
      <button onClick={oneUp}>Count: {count}</button>
    </div>
  );
}

function Superhero() {
  const [hero, setHero] = useState(["superman", "thor", "batman", "spiderman"]);

  return (
    <>
      <ul>
        {hero.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    </>
  );
}

function App() {
  return (
    <>
      <h1>Hello to React</h1>
      <Counter />
      <Counter />
      <Counter />
      <Superhero />
    </>
  );
}

export default App;
