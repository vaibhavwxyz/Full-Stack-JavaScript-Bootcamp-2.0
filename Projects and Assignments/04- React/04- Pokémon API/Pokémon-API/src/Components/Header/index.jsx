import Logo from "../../assets/pokemon.svg";
import "./index.css";

export default function Index() {
  return (
    <div className="bg-[#f0f8ff]">
      <img src={Logo} alt="logo" width="25%" />
      <div>
        <input type="text" onChange={(e) => setPokemonName(e.target.value)} />
        <button onClick={searchPokemon}>
          <SearchIcon />
          Search
        </button>
      </div>
    </div>
  );
}
