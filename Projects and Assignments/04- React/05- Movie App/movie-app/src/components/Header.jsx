import logo from "../assets/logo.png";
import { SEARCH_MOVIE_URL } from "../constant/URL";
import WithButtonInput from "./WithButtonInput";

const Header = () => {
  const key = SEARCH_MOVIE_URL;
  console.log(key);
  return (
    <div className="px-48 py-2 flex bg-black justify-between items-center">
      <div className="flex gap-10 items-center">
        <img className="w-48" src={logo} alt="logo" />
        <ul className="flex gap-5">
          <li className="text-[#808080] hover:text-white transition-all md:hover:cursor-pointer">
            Home
          </li>
          <li className="text-[#808080] hover:text-white transition-all md:hover:cursor-pointer">
            Movies
          </li>
          <li className="text-[#808080] hover:text-white transition-all md:hover:cursor-pointer">
            TV Shows
          </li>
          <li className="text-[#808080] hover:text-white transition-all md:hover:cursor-pointer">
            Watchlist
          </li>
        </ul>
      </div>
      <div>
        <WithButtonInput />
      </div>
    </div>
  );
};

export default Header;
