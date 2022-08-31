import "./Card.css";
import React from "react";
import { IoStar, IoStarOutline, IoNavigate } from "react-icons/io5";

const Card = ({
  gym_name,
  rating,
  cover_image,
  address1,
  address2,
  distance_text,
  duration_text,
  plan_duration,
  plan_price,
}) => {
  const defaultImg =
    "https://images.pexels.com/photos/949132/pexels-photo-949132.jpeg?auto=compress&cs=tinysrgb&w=600";
  const coverImg = cover_image || defaultImg;
  const roundedRating = Math.floor(rating);

  return (
    <article className="card br-2x">
      <div className="badge">
        <p>FREE</p>
      </div>
      <img src={coverImg} alt="gym cover" className="card-img" />
      <section className="card-detail">
        <h1 className="card-title">{gym_name}</h1>
        <div className="rating-container">
          {[...Array(5)].map((_, i) =>
            i + 1 <= roundedRating ? (
              <IoStar className="rating" key={i} />
            ) : (
              <IoStarOutline className="rating" key={i} />
            )
          )}
        </div>
        <p className="card-description mg-top-1x">
          {`${address2}, ${address1}`}
        </p>
        <p className="card-description mg-top-1x flex-center">
          <IoNavigate color="green" size={21} className="navigate-icon" />
          {`${duration_text} away | ${distance_text}`}
        </p>
        <div className="card-btn-container">
          <p className="card-price">
            ₹ {plan_price || 3600} for {plan_duration || 3} months
          </p>
          <button className="card-btn br-2x pointer">Book Now</button>
        </div>
      </section>
    </article>
  );
};

export default Card;
