import "./login.scss"

export default function Login() {
    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img
                        className="logo"
                        src="https://www.charrmello.com/assets/icons/Logo%20Img.png"
                        alt=""
                    />
                </div>
            </div>
            <div className="container">
                <form>
                    <h1>Log In</h1>
                    <input type="email" placeholder="Enter Email" />
                    <input type="password" placeholder="Enter Password" />
                    <button className="loginButton">Enter</button>
                    <span>
                        New here? <b>Sign Up</b>
                    </span>
                    <small>
                        This page is protected by Google reCAPCHA to ensure
                        <br /> 
                        you're not a random bot. <b>Learn more</b>.
                    </small>
                </form>
            </div>
        </div>
    );
}
