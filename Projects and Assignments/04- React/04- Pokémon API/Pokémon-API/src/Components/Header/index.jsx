import Logo from "../../assets/pokemon.svg";
import "./index.css";

export default function Index() {
  return (
    <div>
      <img className="bg-[#f0f8ff]" src={Logo} alt="logo" width="25%" />
    </div>
  );
}
