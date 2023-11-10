import React from "react";
import { GoAlertFill } from "react-icons/go";
import { Link } from "react-router-dom";
function ErrorScreen() {
  return (
    <div className=" h-screen w-full flex justify-center items-center p-4 font-mullish">
      <div className="  flex justify-center items-center flex-col">
        <GoAlertFill className="text-5xl m-2" />
        <p className="w-96 text-center text-lg text-gray-600 m-2">
          We had some trouble loading this page. Please refresh the page to try
          again or get in touch if the problem sticks around! Or try checking
          the URL entered.
        </p>
        <div className="flex justify-center items-center m-2">
          <Link
            to="/emailuscontactus"
            className="bg-[#fff] px-2 m-2 w-48 py-2 text-black text-semibold text-lg rounded-md hover:bg-gray-300 transition-all duration-500 ease-in border-2 border-gray-400 "
          >
            <button className="w-full text-bold ">Contact Support ☎️</button>
          </Link>
          <Link
            to="/"
            className="bg-[#196680] px-2 m-2 w-48 py-2 text-white  text-semibold text-lg rounded-md hover:bg-sky-600 transition-all duration-500 ease-in"
          >
            <button
              className="w-full "
              // onClick={() => window.location.reload()}
            >
              Go to home page 🏠
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorScreen;
