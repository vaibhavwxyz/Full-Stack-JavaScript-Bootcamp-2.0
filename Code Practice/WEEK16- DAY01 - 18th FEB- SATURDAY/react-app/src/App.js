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
  const [name, setName] = useState(() => "antman");
  const onAddName = () => {
    setHero([...hero, name]);
    setName("");
  };

  return (
    <>
      <ul>
        {hero.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onAddName}>Add value</button>
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
