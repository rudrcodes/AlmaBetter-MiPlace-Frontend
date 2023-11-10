import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Home from "../pages/Home";
export const ProtectedSearchResults = (props) => {
  const enteredHotelDetailsFeature = useSelector(
    (state) => state.enteredHotelDetailsFeature
  );
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    if (enteredHotelDetailsFeature.city === "") {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Component />
    </div>
  );
};
