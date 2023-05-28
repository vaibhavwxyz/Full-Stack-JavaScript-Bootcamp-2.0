import { useState } from "react";
import Card from "./Card";
import WithButtonInput from "./WithButtonInput";

const Body = () => {
  const [movies, setMovies] = useState([]);
  console.log(movies);

  return (
    <div className="bg-black px-48 py-20">
      <WithButtonInput setMovies={setMovies} />
      <div className="grid grid-cols-4 gap-5 py-10">
        {movies.map((movie) => {
          return <Card cardData={movie} />;
        })}
      </div>
    </div>
  );
};

export default Body;
