import myCust from "./PropDrilling";
import { Cards } from "./Cards";

function App() {
  const user = {
    fName: "vaibhav",
    lName: "shinde",
    email: "vaibhawxyz@gmail.com",
    mobile: 9595103720,
    address: {
      city: "pune",
      state: "maharastra",
    },
  };

  function formatName(user) {
    return user.fName + " " + user.lName;
  }
  function formatAddress(user) {
    return user.address.city + ", " + user.address.state;
  }

  const customer = {
    fName: "sai",
    lName: "maddilwar",
    email: "saimaddilwar18@gmail.com",
    mobile: 9823526519,
    address: {
      city: "basmath",
      state: "maharastra",
    },
  };

  return (
    <div className="App text-center p-10">
      <h1 className="text-cyan-600 font-bold text-4xl">
        Hello, {formatName(user)}
      </h1>
      <h2 className="text-red-400 font-semibold">
        How's the weather in {formatAddress(user)}?
      </h2>
      <myCust />
      <Cards fName="prashant" />
      <Cards fName="vinya" />
      <Cards fName="sujit" />
    </div>
  );
}

export default App;
