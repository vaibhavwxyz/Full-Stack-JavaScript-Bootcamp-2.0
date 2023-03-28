import { useState, useEffect } from "react";
import "./index.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function App() {
  const choice = ["rock", "paper", "scissor"];

  const [userChoice, setUserChoice] = useState("rock");
  const [computerChoice, setComputerChoice] = useState("rock");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState("Let's Play");
  const [gameStart, setGameStart] = useState(false);

  const computerSelect = () => {
    setComputerChoice(choice[Math.floor(Math.random() * 3)]);
  };

  const rockOnClick = () => {
    setUserChoice("rock");
    computerSelect();
    setGameStart(true);
  };

  const paperOnClick = () => {
    setUserChoice("paper");
    computerSelect();
    setGameStart(true);
  };

  const scissorOnClick = () => {
    setUserChoice("scissor");
    computerSelect();
    setGameStart(true);
  };

  const reset = () => {
    setUserChoice("rock");
    setComputerChoice("paper");
    setUserScore(0);
    setComputerScore(0);
    setResult("Play");
  };

  const rules = () => {
    if (userChoice === computerChoice) {
      setResult("It's a Draw!! 🏳️");
    } else if (
      (userChoice === "rock" && computerChoice === "scissor") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissor" && computerChoice === "paper")
    ) {
      setUserScore(userScore + 1);
      setResult("You Won!! 🥳");
    } else {
      setComputerScore(computerScore + 1);
      setResult("You Lost!! 😖");
    }
  };

  useEffect(() => {
    if (gameStart) rules();
  }, [userChoice, computerChoice]);

  // const reset = () => window.location.reload();

  return (
    <>
      <div className="p-5 space-y-12 text-white">
        {/* tittle */}
        <div>
          <h1 className="mx-auto text-center text-2xl mb-2">
            Rock! Paper! Scissor!
          </h1>
          <img
            src="https://cdn-icons-png.flaticon.com/512/6688/6688560.png"
            alt="img"
            className="w-16 mx-auto"
          ></img>
        </div>
        {/* scorecard */}
        <div className="flex justify-between items-center">
          <h2>My Score - {userScore}</h2>
          <h2>Computer Score - {computerScore}</h2>
        </div>
        {/* result */}
        <div className="mx-auto text-center">
          <h3 className="mb-2">{result}</h3>
          <Button variant="outlined" onClick={reset}>
            Reset
          </Button>
        </div>
        {/* choice */}
        <div className="flex justify-between px-10 items-center">
          {/* your choice */}
          <div className="flex flex-col items-center gap-2">
            <h3>Your choice</h3>
            <div className="rounded-full w-fit p-5 hover:bg-[#374151] bg-[#111827]">
              <img
                src={`../assets/${userChoice}.png`}
                alt="user-choice"
                className="w-10 sm:w-16"
              />
            </div>
          </div>
          {/* computer choice */}
          <div className="flex flex-col items-center gap-2">
            <h3>computer Choice</h3>
            <div className="rounded-full w-fit p-5 hover:bg-[#374151] bg-[#111827]">
              <img
                src={`../assets/${computerChoice}.png`}
                alt="computer-choice"
                className="w-10 sm:w-16"
              />
            </div>
          </div>
        </div>
        {/* lock your choice */}
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-center mb-2">Lock Your Choice</h3>
          <div className="space-x-2 ">
            <button
              className="hover:bg-[#374151] bg-[#111827] sm:active:scale-95 rounded-full p-5"
              onClick={rockOnClick}
            >
              <img
                src="../assets/rock.png"
                alt="rock"
                className="w-10 sm:w-16"
              />
            </button>
            <button
              className="hover:bg-[#374151] bg-[#111827] sm:active:scale-95 rounded-full p-5"
              onClick={paperOnClick}
            >
              <img
                src="../assets/paper.png"
                alt="paper"
                className="w-10 sm:w-16"
              />
            </button>
          </div>
          <button
            className="hover:bg-[#374151] bg-[#111827] sm:active:scale-95 rounded-full p-5"
            onClick={scissorOnClick}
          >
            <img
              src="../assets/scissor.png"
              alt="paper"
              className="w-10 sm:w-16"
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
