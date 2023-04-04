import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MealCard({ recipe }) {
  console.log(recipe);
  return (
    <Card className="active:scale-[0.99] transition-all ease-in-out sm:hover:drop-shadow-xl sm:cursor-pointer">
      <CardMedia
        sx={{ height: 175 }}
        image={recipe.strMealThumb}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {recipe.strMeal}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Category: {recipe.strCategory}
        </Typography>
      </CardContent>
    </Card>
  );
}
