
import React, { useState } from "react";
import image from '../images/reception.webp';
import { Navigate } from 'react-router-dom';
import "./styles.css";
import { addUser } from "../redux-features/userSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import { signin, authenticate, isAutheticated } from "../auth/index.js";

const LoginFormComponent = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
    admin: false
  });

  const { email, password, error, loading, didRedirect, admin } = values;
  const { user } = isAutheticated();

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then(data => {
        console.log("signing: ", data)
        // Here I am getting the data of the signed in user and whether they are admin or not

        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          if (data.user.admin) {
            //save this loggedIn user data in localStorage

            console.log("Admin agye");
            setValues({
              ...values,
              admin: data.user.admin,
            });
          }
          authenticate(data, () => {
            localStorage.setItem("localUser", JSON.stringify({
              userName: data.user.name,
              admin: data.user.admin,
              email: data.user.email
            }))
            dispatch(addUser({
              userName: data.user.name,
              admin: data.user.admin,
              email: data.user.email,
            }))
            setValues({
              ...values,
              didRedirect: true
            });
          });
        }
      })
      .catch((err) => console.log("signin request failed", err));
  };

  // console.log(setValues);

  const performRedirect = () => {
    if (didRedirect) {
      if (user && user.role === 1) {
        return < Navigate to="" />;
      } else {
        return < Navigate to="/profile" />;
      }
    }
    if (isAutheticated()) {
      return < Navigate to="/" />;
    }
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };




  return (
    <div id="login" className="bg-white w-[103%] p-4 pl-20 rounded-lg shadow-md flex justify-center items-center gap-4 font-mullish mx-auto">
      <ToastContainer />

      <img
        src={image}
        alt="Book Hotels fast and easy with Hotels"
        className="w-1/2"
      />
      <div className="flex-1 flex flex-col gap-2">
        <h1 className="text-3xl font-semibold md:text-l">Book Hotels fast and easy with Hotels</h1>        <input
          class="in2"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleChange("email")}
          className="p-2 border border-gray-300 rounded-md w-1/2"
        />
        <input
          class="in2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleChange("password")}
          className="p-2 border border-gray-300 rounded-md w-1/2"
        />

        <button onClick={onSubmit} id="btn2" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md w-1/3">

          Login

        </button>

        <section title="Sign In page" description="A page for user to sign in!">
          {loadingMessage()}
          {errorMessage()}

          {performRedirect()}

        </section>
      </div>

    </div>





  );

};


export default LoginFormComponent;