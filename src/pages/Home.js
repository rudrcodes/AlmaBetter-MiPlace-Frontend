import React, { useEffect } from "react";
import { Popularplace } from "../components/Popularplace";
import { MostSearchedLocations } from "../components/MostSearchedLocations";
import { signout } from "../auth/index";

import Testimonial from "../components/Testimonial.jsx";
import { API } from "../backend";
import HomeCard from "../components/HomeCard";
import { useDispatch, useSelector } from "react-redux";

import { setEnteredHotelDetails } from "../redux-features/enteredHotelDetailsSlice";
import { useNavigate } from "react-router";
import axios from "axios";

function Home() {
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
  useEffect(() => {
    if (localUser?.userName.length == 0) {
      signout(() => {
        localStorage.removeItem("localUser");

        navigate("/home");
      });
    }
    console.log(localUser);
  }, [localUser]);
  const dispatch = useDispatch();

  console.log("API IS", API);
  return (
    <div>
      <HomeCard />
      <MostSearchedLocations />

      <Popularplace />
      <Testimonial />
    </div>
  );
}

export default Home;
