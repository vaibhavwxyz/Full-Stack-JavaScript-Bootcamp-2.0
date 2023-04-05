import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import fetchMealItems from "../api/api";
import axios from "axios";
let URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const SearchBar = ({ recipes, setRecipes }) => {
  const [search, setSearch] = useState("");

  const searchRecpie = async () => {
    if (search.length > 0) {
      const result = await axios.get(URL + search);
      const data = await result.data;
      console.log(data);
      setRecipes(data.meals);
    }

    if (recipes.length <= 20 && search == "") {
      const data = fetchMealItems().then((data) => {
        // console.log(data);
        setRecipes(data.meals);
      });
    }
  };

  return (
    // <form >
    <div className="mb-5 bg-[#fee5e5] text-[#ef4f5f] placeholder:text-[#ef4f5f] rounded-full max-w-2xl flex justify-between items-center py-2 px-4">
      <input
        type="text"
        placeholder="Search any recipe"
        className="bg-[#fee5e5] text-[#ef4f5f] placeholder:text-[#ef4f5f] px-1 rounded-full outline-none text-lg w-full"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={searchRecpie}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default SearchBar;
