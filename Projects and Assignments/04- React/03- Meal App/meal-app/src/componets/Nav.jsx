import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

function Nav() {
  return (
    <nav className="flex justify-between p-4 2xl:px-48 2xl:py-5">
      <div className="uppercase font-extrabold text-[#ef4f5f] 2xl:text-3xl tracking-wide">
        <FontAwesomeIcon icon={faUtensils} className="mr-2" />
        Meal.db
      </div>
      <Button data="Login" />
    </nav>
  );
}

export default Nav;
