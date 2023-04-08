// 2nd parameter of Fetch is a object

const getDadJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const jsonJokeData = await response.json();
  console.log(jsonJokeData.joke);
};

getDadJoke();

const getSpacecrafts = async () => {
  const response = await fetch("https://isro.vercel.app", {
    method: "GET",
    headers: {
      Accept: "/api/spacecrafts",
    },
  });
  const jsonSpacecraftsData = await response.json();
  console.log(jsonSpacecraftsData);
};

getSpacecrafts();
