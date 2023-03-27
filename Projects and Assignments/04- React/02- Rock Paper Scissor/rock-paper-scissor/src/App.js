import { useState } from "react";
import "./index.css";

function App() {
  const choice = ["rock", "paper", "scissor"];

  const [useChoice, setUserChoice] = useState("rock");
  const [computerChoice, setComputerChoice] = useState("rock");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState("Play");

  return (
    <>
      <div className="p-5 space-y-5 text-white">
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
          <h2>My Score - </h2>
          <h2>Computer Score - </h2>
        </div>
        {/* result */}
        <div className="mx-auto text-center">
          <h3>You Win!!</h3>
          <button>Reset</button>
        </div>
        {/* choice */}
        <div>
          {/* your choice */}
          <div>
            <img src="" alt="" />
          </div>
          {/* computer choice */}
          <div>
            <img src="" alt="" />
          </div>
        </div>
        {/* lock your choice */}
        <div>
          <h3 className="text-center">Lock Your Choice</h3>
          <img src={`../`} alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
