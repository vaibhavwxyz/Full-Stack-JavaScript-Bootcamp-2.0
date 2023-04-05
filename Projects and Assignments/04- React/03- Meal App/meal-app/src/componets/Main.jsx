import { useState, useEffect } from "react";
import fetchMealItems from "../api/api";
import Nav from "./Nav";
import Section from "./Section";
import SearchBar from "./SearchBar";

function Main() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const data = fetchMealItems().then((data) => {
      // console.log(data);
      setRecipes(data.meals);
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <Nav />
      <SearchBar recipes={recipes} setRecipes={setRecipes} />
      <Section recipes={recipes} />
    </div>
  );
}

export default Main;
