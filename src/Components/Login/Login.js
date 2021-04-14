import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import { userContext } from "../../App";
import loginBg from "../../images/loginbg.png";
import firebaseConfig from "./firebase.config";
import "./Login.css";

const Login = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    var googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase
            .auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                var { displayName, email } = result.user;
                const newUserInfo = { name: displayName, email };
                setLoggedInUser(newUserInfo);
                setUserToken();
                history.replace(from);
            })
            .catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    };

    const setUserToken = () => {
        firebase
            .auth()
            .currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem("token", idToken);
            })
            .catch(function (error) {
                // Handle error
            });
    };

    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-md-6 login-box">
                    <h3 className="text-green text-center mt-3 mb-5">Login</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group login-input">
                            <input
                                name="email"
                                type="text"
                                placeholder="Your email please"
                                className="form-control"
                                {...register("email", { required: true })}
                            />
                            {errors.email && (
                                <span className="text-danger">
                                    email is required
                                </span>
                            )}
                        </div>
                        <div className="form-group login-input">
                            <input
                                name="password"
                                type="password"
                                placeholder="Your password here"
                                className="form-control"
                                {...register("password", { required: true })}
                            />
                            {errors.password && (
                                <span className="text-danger">
                                    password is required
                                </span>
                            )}
                        </div>
                        <p className="text-danger">Forgot your password?</p>
                        <button className="button form-control" type="submit">
                            Login
                        </button>
                    </form>
                    <p className="text-green text-center mt-3">Or</p>
                    <hr />
                    <button
                        className="button form-control"
                        onClick={handleGoogleSignIn}
                    >
                        Continue with google
                    </button>
                </div>
                <div className="col-md-6">
                    <img
                        style={{ width: "500px", marginLeft: "200px" }}
                        src={loginBg}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;
