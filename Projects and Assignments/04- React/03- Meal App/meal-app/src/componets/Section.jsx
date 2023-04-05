import React from "react";
import MealCard from "./MealCard";

const Section = ({ recipes }) => {
  return (
    <div className="grid grid-cols-3 gap-5 ">
      {recipes &&
        recipes.map((recipe, idx) => {
          return <MealCard key={idx} recipe={recipe} />;
        })}
    </div>
  );
};

export default Section;
