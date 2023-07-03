import { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { FiLogIn } from "react-icons/fi";
import Navbar from "../../components/Navbar/Navbar";

import "./Signup.css";
import "../../../App.css";

export default function Signup() {
    // importing env variables
    const SERVER = import.meta.env.VITE_REACT_APP_SERVER_ADDRESS;

    // Controlling Sign Up form
    const [signupForm, setSignupForm] = useState({
        name: "",
        mobile: "",
        email: "",
        password: "",
        cpassword: "",
    });

    let name, value;
    const handleSignupInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setSignupForm({ ...signupForm, [name]: value });
    };

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${SERVER}/signup`, signupForm);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }

        // axios
        //     .post(`${SERVER}/signup`, signupForm)
        //     .then((res) => {
        //         console.log(res.data);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
    };

    return (
        <section className="loginSection">
            <Navbar />
            <div className="center-container">
                <div className="signupContainer">
                    <h2>Sign Up</h2>
                    <form method="POST">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter your name"
                            value={signupForm.name}
                            onChange={handleSignupInputs}
                        />
                        <input
                            type="text"
                            name="mobile"
                            id="mobile"
                            placeholder="Enter your mobile number"
                            value={signupForm.mobile}
                            onChange={handleSignupInputs}
                        />
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            value={signupForm.email}
                            onChange={handleSignupInputs}
                        />
                        <input
                            type="text"
                            name="password"
                            id="password"
                            placeholder="Enter your pasword"
                            value={signupForm.password}
                            onChange={handleSignupInputs}
                        />
                        <input
                            type="text"
                            name="cpassword"
                            id="cpassword"
                            placeholder="Conform password"
                            value={signupForm.cpassword}
                            onChange={handleSignupInputs}
                        />
                        <button
                            className="btn-primary align-center"
                            onClick={handleSignup}
                        >
                            <span>Sign Up</span>
                            <FiLogIn className="icon" />
                        </button>
                    </form>

                    <ul>
                        <li>
                            Already have an account?
                            <NavLink className="link_text" to={"/login"}>
                                login
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
