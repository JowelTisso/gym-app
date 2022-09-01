import "./Home.css";
import React from "react";
import { useEffect } from "react";
import { GET } from "../../utils/axios";
import { API } from "../../utils/Constant";
import banner from "../../assets/banner.png";
import { Card, Filter, Search } from "../../components";
import { useState } from "react";
import { IoSettings, IoBug, IoMedal, IoShieldCheckmark } from "react-icons/io5";

const Home = () => {
  const [gymData, setGymData] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await GET(API.NEAREST_GYM);
      console.log(res);
      setGymData(res.data.data);
    })();
  }, []);

  const Content = () => {
    return (
      <section className="content-section">
        {gymData.map((gym) => (
          <Card key={gym.user_id} {...gym} />
        ))}
      </section>
    );
  };

  const HighlightCard = ({ title, Icon }) => {
    return (
      <article className="highlight-card flex-center">
        <Icon size={30} color="white" />
        <p className="highlight-card-title">{title}</p>
      </article>
    );
  };

  const Highlight = () => {
    return (
      <section className="highlight">
        <h1 className="highlight-title">WTF Fitness Experience?</h1>
        <section className="section-container mg-top-1x">
          <div className="section-question">
            <div className="highlight-bar"></div>
            <p className="highlight-sub-title">@ your regular gym cost?</p>
          </div>
          <div className="section-icon">
            <HighlightCard title={"Modern Equipments"} Icon={IoSettings} />
            <HighlightCard title={"Skilled Trainer"} Icon={IoBug} />
            <HighlightCard title={"Top class Ambiance"} Icon={IoMedal} />
            <HighlightCard title={"Sanitized GYMS"} Icon={IoShieldCheckmark} />
          </div>
        </section>
      </section>
    );
  };

  return (
    <div className="wrapper">
      <img src={banner} alt="banner" className="banner" />
      <Search />
      <main className="main-section">
        <Filter />
        <Content />
      </main>
      <Highlight />
    </div>
  );
};

export default Home;
