import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { signout } from "../auth/index";
import { API } from "../backend";
import axios from "axios";
export const Profile = () => {
  const localUser = JSON.parse(localStorage.getItem("localUser"));
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllUsers = async () => {
      const res = await axios.get(`${API}/allUsers`);
      console.log(res.data);
      const isExist = res.data.find((user) => user.email == localUser?.email);
      console.log(isExist);
      if (isExist == undefined) {
        signout(() => {
          //clear localStorage
          localStorage.removeItem("localUser");
          navigate("/home");
        });
      }
    };
    fetchAllUsers();
  }, []);

  console.log(localUser);

  const handleclick = () => {
    navigate("/home");
  };

  return (
    <div className="flex mx-auto my-auto justify-center items-center w-[27.875rem] h-[23.5625rem] border-4 border-blue-600">
      <div className="flex justify-center items-center flex-col">
        <div className="">
          <img
            class="inline-block mt-4 h-[8rem] w-[8rem] rounded-full ring-2 ring-black"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div className="flex justify-center items-center  flex-col mt-4">
          <div className="flex justify-center   flex-col my-3">
            <h3 className="text-bold text-xl">
              username : {localUser?.userName}
            </h3>
            <h3 className="text-bold text-xl">email : {localUser?.email}</h3>
            <h3 className="text-bold text-xl">
              admin : {localUser?.admin === true ? "true" : "false"}
            </h3>
          </div>
          <Button onClick={handleclick} text="Home" />
        </div>
      </div>
    </div>
  );
};
