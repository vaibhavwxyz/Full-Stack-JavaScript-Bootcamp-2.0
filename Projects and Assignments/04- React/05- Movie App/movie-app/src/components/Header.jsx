import logo from "../assets/logo.png";
import WithButtonInput from "./WithButtonInput";

const Header = () => {
  return (
    <div className="px-48 py-2 flex bg-black justify-between items-center">
      <div className="flex gap-20 items-center">
        <img className="w-48" src={logo} alt="logo" />
        <ul className="flex gap-5">
          <li className="text-[#808080] md:hover:cursor-pointer">Home</li>
          <li className="text-[#808080] md:hover:cursor-pointer">Movies</li>
          <li className="text-[#808080] md:hover:cursor-pointer">TV Shows</li>
          <li className="text-[#808080] md:hover:cursor-pointer">Watchlist</li>
        </ul>
      </div>
      <div>
        <WithButtonInput />
      </div>
    </div>
  );
};

export default Header;
