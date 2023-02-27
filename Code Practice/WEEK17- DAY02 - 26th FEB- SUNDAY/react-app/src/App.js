import myCust from "./PropDrilling";

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
    <div className="App">
      <h1>Hello, {formatName(user)}</h1>
      <h2>How's the weather in {formatAddress(user)}</h2>
      <myCust />
    </div>
  );
}

export default App;
