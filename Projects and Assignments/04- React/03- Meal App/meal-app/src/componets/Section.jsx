import React from "react";
import MealCard from "./MealCard";

const Section = ({ recipes }) => {
  return (
    <div>
      {recipes.map((recipe, idx) => {
        return <MealCard key={idx} recipe={recipe} />;
      })}
    </div>
  );
};

export default Section;
