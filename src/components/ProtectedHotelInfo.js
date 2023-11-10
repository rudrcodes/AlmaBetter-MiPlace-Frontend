import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Home from "../pages/Home";
export const ProtectedHotelInfo = (props) => {
  const indiHotelState = useSelector((state) => state.indiHotelInfoFeature);
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    if (indiHotelState.hotel_id === "") {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Component />
    </div>
  );
};
