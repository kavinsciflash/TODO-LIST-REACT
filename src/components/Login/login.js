import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomSnackbar from '../utilities/Snackbar';

function Login() {
    const navigate = useNavigate();
    const [signUpEmail, setSignUpEmail] = useState('');
    const [signInEmail, setSignInEmail] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');
    const [signInPassword, setSignInPassword] = useState('');
    const [snackbar, setSnackBar] = useState({ message : "", status: 'error', state: false})

    React.useEffect(() => {
        const sign_in_btn = document.querySelector("#sign-in-btn");
        const sign_up_btn = document.querySelector("#sign-up-btn");
        const container = document.querySelector(".container");

        sign_up_btn.addEventListener("click", () => {
            container.classList.add("sign-up-mode");
        });

        sign_in_btn.addEventListener("click", () => {
            container.classList.remove("sign-up-mode");
        });
    }, []);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    const validatePassword = (password) => {
        return password.length >= 6; // Minimum password length
    }

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        if (validateEmail(signUpEmail) && validatePassword(signUpPassword)) {
            setSnackBar({ message : "signup successful!", status: 'success', state:true});
            // Proceed with sign up logic
        } else {
            setSnackBar({ message : "Invalid email or password (Password must be at least 6 characters)", status: 'error', state:true});
        }
    }

    const handleSignInSubmit = (e) => {
        e.preventDefault();
        if (validateEmail(signInEmail) && validatePassword(signInPassword)) {
            setSnackBar({ message : "Login successful!", status: 'success', state:true});
            navigate('/todo')
            // Proceed with sign in logic
        } else {
            setSnackBar({ message : "Invalid email or password (Password must be at least 6 characters)", status: 'error', state:true});
        }
    }

    const handleSetOpen = () => {
        setSnackBar({ message : "", status: 'success', state:false});
    }

    return (
        <>
            <div className="container">
                <div className="forms-container">
                    <div className="signin-signup">
                        <form className="sign-in-form" onSubmit={handleSignInSubmit}>
                            <h2 className="title">Sign in</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input
                                    type="text"
                                    placeholder="Email"
                                    value={signInEmail}
                                    onChange={(e) => setSignInEmail(e.target.value)}
                                />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={signInPassword}
                                    onChange={(e) => setSignInPassword(e.target.value)}
                                />

                            </div>
                            <input type="submit" value="Login" className="btn solid" />
                            <p className="social-text">Or Sign in with social platforms</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-google"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </form>
                        <form className="sign-up-form" onSubmit={handleSignUpSubmit}>
                            <h2 className="title">Sign up</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={signUpEmail}
                                    onChange={(e) => setSignUpEmail(e.target.value)}
                                />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={signUpPassword}
                                    onChange={(e) => setSignUpPassword(e.target.value)}
                                />
                            </div>
                            <input type="submit" className="btn" value="Sign up" />
                            <p className="social-text">Or Sign up with social platforms</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-google"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New here ?</h3>
                            <p>
                                Register to explore the project
                            </p>
                            <button className="btn transparent" id="sign-up-btn">
                                Sign up
                            </button>
                        </div>
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>One of us ?</h3>
                            <p>
                                Use the app for a great experience.
                            </p>
                            <button className="btn transparent" id="sign-in-btn">
                                Sign in
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .error {
                    color: red;
                    text-align: left;
                    font-size: 0.7rem;
                    margin-left: 25px; /* Adjust as needed to position the error message */
                }
            `}</style>

            {
                !snackbar.state == "" && <CustomSnackbar open={snackbar} setOpen={handleSetOpen}/>
            }
        </>
    )
}

export default Login;
