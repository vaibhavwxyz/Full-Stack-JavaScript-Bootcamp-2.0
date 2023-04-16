import Logo from "../../assets/pokemon.svg";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useState } from "react";

export default function Index() {
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
    <div className=" flex items-center justify-between max-w-6xl mx-auto py-16">
      <img src={Logo} alt="logo" width="25%" />
      <div className="flex items-center space-x-2">
        <input
          type="text"
          onChange={(e) => setPokemonName(e.target.value)}
          placeholder="Search Your Pokémon"
          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700  dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 lg:w-96"
        />
        <button
          className="active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-indigo-600 dark:hover:bg-indigo-700 dark:hover:text-gray-100 disabled:opacity-50 dark:focus:ring-indigo-400 disabled:pointer-events-none dark:focus:ring-offset-gray-900 dark:bg-indigo-600 text-white hover:bg-indigo-700 h-10 py-2 px-4"
          onClick={searchPokemon}
        >
          <SearchIcon />
        </button>
      </div>
    </div>
  );
}
