import { useState } from "react";
import axios from "axios";
import "./App.css";
import { Progress } from "antd";

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState({});

  const searchPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        console.log(response);
        setPokemon({
          name: pokemonName,
          species: response.data.species.name,
          img: response.data.sprites.front_default,
        });
        console.log(pokemon);
      });
  };

  return (
    <div>
      <h1>Pokémon Stats</h1>
      <input type="text" onChange={(e) => setPokemonName(e.target.value)} />
      <button onClick={searchPokemon}>Search</button>
      <div
        style={{
          width: 170,
        }}
      >
        <Progress percent={30} size="small" strokeColor={"#414141"} />
        <Progress percent={50} size="small" status="active" />
        <Progress percent={70} size="small" status="exception" />
        <Progress percent={100} size="small" />
      </div>
    </div>
  );
}

export default App;
