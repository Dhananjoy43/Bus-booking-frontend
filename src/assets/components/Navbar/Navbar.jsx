import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../../App.css";
import "./Navbar.css";
import { FiLogIn } from "react-icons/fi";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="left">
        <img src="images/logo.png" alt="logo" />
        <span>Ticket.com</span>
      </div>
      <div className="right">
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/offers"}>Offers</NavLink>
          </li>
          <li>
            <NavLink to={"/support"}>Support</NavLink>
          </li>
        </ul>
        <button
          className="btn-primary align-center"
          onClick={() => {
            navigate("/login");
          }}
        >
          <span>Login</span>
          <FiLogIn className="icon" />
        </button>
      </div>
    </nav>
  );
}
