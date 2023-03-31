import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <nav className="nav-container">
      <div className="logo-wrapper"></div>
      <div className="btn-wrapper">
        <button className="login">
          <FontAwesomeIcon icon={faUtensils} /> login
        </button>
      </div>
    </nav>
  );
}

export default Nav;
