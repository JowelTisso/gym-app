import "./Home.css";
import React from "react";
import { useEffect } from "react";
import { GET } from "../../utils/axios";
import { API } from "../../utils/Constant";
import Header from "../../components/Header/Header";
import banner from "../../assets/banner.png";

const Home = () => {
  useEffect(() => {
    // (async () => {
    //   const res = await GET(API.NEAREST_GYM);
    //   console.log(res);
    // })();
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Home;
