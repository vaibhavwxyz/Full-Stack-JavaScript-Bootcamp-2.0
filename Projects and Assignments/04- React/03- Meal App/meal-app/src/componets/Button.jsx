import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Button() {
  return (
    <button>
      <FontAwesomeIcon icon={faUser} />
      Login
    </button>
  );
}

export default Button;
