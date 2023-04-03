import React from "react";
import MealCard from "./MealCard";

const Section = ({ recipes }) => {
  return (
    <div style={{ display: "flex" }}>
      {recipes.map((recipe, idx) => {
        return <MealCard key={idx} recipe={recipe} />;
      })}
    </div>
  );
};

export default Section;
