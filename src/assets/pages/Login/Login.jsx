import { useNavigate } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import "./Login.css";
import "../../../App.css";

export default function Login() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Login</h1>
      <button
        className="btn-primary align-center"
        onClick={() => {
          navigate("/signup");
        }}
      >
        <span>Sign up</span>
        <FiLogIn className="icon" />
      </button>
    </>
  );
}
