import { useState, useEffect } from "react";
import fetchMealItems from "../api/api";
import Nav from "./Nav";
import Section from "./Section";

function Main() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const data = fetchMealItems().then((data) => {
      console.log(data);
      setRecipes(data.meals);
    });
  }, []);

  return (
    <>
      <Nav />
      <Section recipes={recipes} />
    </>
  );
}

export default Main;
