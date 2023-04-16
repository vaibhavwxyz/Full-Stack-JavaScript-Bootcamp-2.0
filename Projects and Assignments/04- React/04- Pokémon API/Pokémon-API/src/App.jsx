import { useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./Components/Header";

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
    <div className="bg-[#f0f8ff]">
      <Header />
      <h1>Pokémon Stats</h1>
    </div>
  );
}

export default App;
