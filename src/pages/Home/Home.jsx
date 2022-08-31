import "./Home.css";
import React from "react";
import { useEffect } from "react";
import { GET } from "../../utils/axios";
import { API } from "../../utils/Constant";

const Home = () => {
  useEffect(() => {
    // (async () => {
    //   const res = await GET(API.NEAREST_GYM);
    //   console.log(res);
    // })();
  }, []);

  return <div>Home</div>;
};

export default Home;
