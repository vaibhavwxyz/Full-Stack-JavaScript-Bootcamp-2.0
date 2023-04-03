import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Button({ data }) {
  return (
    <button className="text-[#ef4f5f] border-[#ef4f5f] border-[1.2px] rounded-full px-5 py-2 flex items-center justify-center font-medium sm:hover:bg-[#ef4f5f] sm:hover:text-white transition-all duration-200 ease-in-out">
      <FontAwesomeIcon icon={faUser} className="mr-2" />
      {data}
    </button>
  );
}

export default Button;
