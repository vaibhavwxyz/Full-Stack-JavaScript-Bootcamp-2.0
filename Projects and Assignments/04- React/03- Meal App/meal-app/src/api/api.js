import axios from "axios";

const fetchMealItems = async () => {
  const recipes = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=m"
  );

  const result = recipes.data;

  return result;
};

export default fetchMealItems;
