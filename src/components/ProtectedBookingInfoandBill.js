import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Home from "../pages/Home";
export const ProtectedBookingInfoandBill = (props) => {
  const indiHotelState = useSelector((state) => state.indiHotelInfoFeature);
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    if (indiHotelState.hotel_id === "" || indiHotelState.currency==="") {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Component />
    </div>
  );
};
