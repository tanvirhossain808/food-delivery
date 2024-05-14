/* eslint-disable react/prop-types */
import { useState } from "react";
import "./LoginPopUp.css"
import { assets } from "../../../public/frontend_assets/assets";

const LoginPopUp = ({ setShowLogin }) => {
    const [currenState, setCurrentState] = useState("Sign Up")
    return (
        <div className="login-popup">
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currenState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>

                <div className="login-popup-input">
                    {currenState === "Sign Up" && <input type="text" placeholder="Your name" required />}

                    <input type="email" placeholder="Your email" required />
                    <input type="password" placeholder="password" required />
                </div>
                <button>{currenState === "Sign Up" ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing i agree to the terms of use & privacy policy</p>
                </div>
                {
                    currenState === "Login" ? (<p>Create a new account?<span onClick={() => setCurrentState("Sign Up")}>Click here</span></p>) : (<p>Already have an account?<span onClick={() => setCurrentState("Login")}>Login here</span></p>)
                }


            </form>
        </div>
    );
};

export default LoginPopUp;