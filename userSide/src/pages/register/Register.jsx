import { useRef } from "react"
import { useState } from "react"
import "./register.scss"

export default function Register() {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value);
    };
    const handleFinish = () => {
        setPassword(passwordRef.current.value);
    };
    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <button className="loginButton">Log In</button>
                </div>
            </div>
            <div className="container">
                <div className="logoWrapper">
                    <img
                        className="logo"
                        src="https://www.charrmello.com/assets/icons/Logo%20Img.png"
                        alt=""
                    />
                    <img
                        className="logoText"
                        src="https://www.charrmello.com/assets/icons/LogoTitle.png"
                        alt=""
                    />
                </div>
                <h1>Your New Audio Cinema</h1>
                <h2>Join when you need. Cancel when you want.</h2>
                {!email ? (
                    <div className="input">
                        <input
                            className="inputField" type="email" placeholder="Enter Your Email (Please, lol)"
                            ref={emailRef}
                        />
                        <button className="registerButton" onClick={handleStart}>
                            Sign Up
                        </button>
                    </div>
                ) : (
                    <form className="input">
                        <input
                            className="inputField" type="password" placeholder="Okay, Enter a Password"
                            ref={passwordRef}
                        />
                        <button className="registerButton" onClick={handleFinish}>
                            Enter Charrmello!
                        </button>
                    </form>
                )}
                <p>
                    *Anyone who signs up during the Charrmello Alpha Release gets an extra 6 Months Free.
                    We’ll let you know via email when you signup. Also, our brading will be GREEN not orange.
                </p>
            </div>
        </div>
    )
}
