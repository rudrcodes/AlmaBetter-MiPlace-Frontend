import React, { useState } from "react";
import image from "../images/reception.webp";
import { signup } from "../auth/index";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const [SingupError, setSingupError] = useState("");
  const { name, email, password, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    if (values.name == " " || values.email == "" || values.password == "") {
      alert("Enter All the values!");
      return;
    }
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password })
      .then((user) => {
        // if(user.err)
        console.log("user", user);
        // if(!user.ok)
        if (user) {
          if (user.err) {
            setSingupError(user.err);

            setValues({
              ...values,
              error: user.err,
              success: true,
            });
          } else if (user.error) {
            setSingupError(user.error);

            setValues({
              ...values,
              error: user.error,
              success: true,
            });
          } else {
            alert("Signup Success ✅")
            setValues({
              ...values,
              name: "",
              email: "",
              password: "",
              error: "",
              success: true,
            });
          }
        } else alert("Undefined user");
      })
      .catch((err) => {
        setSingupError(err);
        console.log("Error in signup", err);
      });
  };

  console.log(values);

  return (
    <div className="bg-blue-500 sm-a51:bg-red-500 sm-a71:bg-green-500 font-mullish">
      <ToastContainer />
      <div
        id="signin"
        className="bg-white p-4 pl-40 font-mullish rounded-lg shadow-md flex justify-center items-center gap-4  mx-auto"
      >
        <img
          src={image}
          alt="Book Hotels fast and easy with Hotels"
          className="w-1/2"
        />
        <div className="flex-1 flex flex-col gap-2">
          <h1 className="text-3xl font-semibold">
            Book Hotels Fast and Easy With Hotels
          </h1>
          <input
            class="in"
            type="text"
            placeholder="Name"
            value={name}
            id="placeholder1"
            onChange={handleChange("name")}
            className="p-2 border border-gray-300 rounded-md w-1/2"
          />

          <input
            class="in"
            type="email"
            placeholder="Enter you e-mail"
            value={email}
            id="placeholder2"
            onChange={handleChange("email")}
            className="p-2 border border-gray-300 rounded-md w-1/2"
          />

          <input
            class="in"
            type="password"
            placeholder="Password"
            value={password}
            id="placeholder3"
            onChange={handleChange("password")}
            className="p-2 border border-gray-300 rounded-md w-1/2"
          />
          {values.error && (
            <>
              <span className="text-red-500 ">Error : {values.error}. </span>
              <span className="text-blue-800 ">
                Hint : Remember the Email must be unique.
              </span>
            </>
          )}

          <button
            onClick={onSubmit}
            id="register"
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md w-1/3"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
