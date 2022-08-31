import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
    </Routes>
  );
};

export default AllRoutes;
