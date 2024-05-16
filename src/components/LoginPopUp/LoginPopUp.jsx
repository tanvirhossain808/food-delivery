/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import "./LoginPopUp.css"
import { assets } from "../../../public/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContent";
import axios from "axios";

const LoginPopUp = ({ setShowLogin }) => {
    const { url, setToken } = useContext(StoreContext)


    const [currenState, setCurrentState] = useState("Sign Up")
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const onChangeHandler = (e) => {
        const name = e.target.name
        const value = e.target.value
        setData(data => ({
            ...data, [name]: value
        }))
    }

    const onLogin = async (e) => {
        e.preventDefault()
        let newUrl = url
        if (currenState === "Login") {
            newUrl += "/api/user/login"
        }
        else {
            newUrl += "/api/user/register"
        }

        try {
            const response = await axios.post(newUrl, data)
            if (response.data.success) {
                setToken(response.data.success)
                localStorage.setItem("token", response.data.token)
                setShowLogin(false)
            }
            else {
                alert(response.data.message)
            }

        } catch (error) {
            console.log(error)
        }



    }

    return (
        <div className="login-popup">
            <form className="login-popup-container"
                onSubmit={onLogin}
            >
                <div className="login-popup-title">
                    <h2>{currenState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>

                <div className="login-popup-input">
                    {currenState === "Sign Up" && <input type="text" placeholder="Your name" required
                        name="name"
                        value={data.name}
                        onChange={(onChangeHandler)}

                    />}

                    <input type="email" placeholder="Your email" required name="email" value={data.email} onChange={onChangeHandler} />
                    <input type="password" placeholder="Your password" required name="password" value={data.password} onChange={onChangeHandler} />
                </div>
                <button type="submit">{currenState === "Sign Up" ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox"
                        name="checkbox"
                    // onChange={ }

                    />
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