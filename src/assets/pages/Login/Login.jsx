import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { FiLogIn } from "react-icons/fi";
import Navbar from "../../components/Navbar/Navbar";

import "./Login.css";
import "../../../App.css";

export default function Login() {
    const navigate = useNavigate();

    // importing env variables
    const SERVER = import.meta.env.VITE_REACT_APP_SERVER_ADDRESS;

    // Controlling Login Form
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    });

    let name, value;
    const handleLoginInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setLoginForm({ ...loginForm, [name]: value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${SERVER}/login`, loginForm, {
                withCredentials: true,
            });
            console.log(res.status);

            if (res.status === 202) {
                console.log(res);
                window.alert("Login unsuccessful");
            } else {
                console.log("login successful");
                window.alert("Login successful");
                navigate("/");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className="loginSection">
            <Navbar />
            <div className="center-container">
                <div className="loginContainer">
                    <h2>Login</h2>
                    <form method="POST">
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            value={loginForm.email}
                            onChange={handleLoginInputs}
                        />
                        <input
                            type="text"
                            name="password"
                            id="password"
                            placeholder="Enter your pasword"
                            value={loginForm.password}
                            onChange={handleLoginInputs}
                        />
                        <button
                            className="btn-primary align-center"
                            onClick={handleLogin}
                        >
                            <span>Login</span>
                            <FiLogIn className="icon" />
                        </button>
                    </form>

                    <ul>
                        <li>
                            Don't have an account?
                            <NavLink className="link_text" to={"/signup"}>
                                register now
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
