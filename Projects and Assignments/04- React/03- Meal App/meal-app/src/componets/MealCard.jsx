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
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
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
