import "./Footer.css";
import React from "react";
import logo from "../../assets/wtf_logo.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
import { IoLocationSharp, IoCall, IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="social-section flex-center flex-grow-1x">
        <img src={logo} alt="logo" className="footer-logo " />
        <div className="social-logo-container">
          <i className="social flex-center pointer">
            <img src={instagram} alt="instagram" className="social-logo" />
          </i>
          <i className="social flex-center pointer">
            <img src={facebook} alt="facebook" className="social-logo" />
          </i>
          <i className="social flex-center pointer">
            <img src={linkedin} alt="linkedin" className="social-logo" />
          </i>
        </div>
      </section>
      <section className="quick-links-section flex-grow-1x">
        <h2 className="link-title">Quick Links</h2>
        <ul>
          <li className="link pointer">About</li>
          <li className="link pointer">FAQ</li>
          <li className="link pointer">Privacy Policy</li>
          <li className="link pointer">WTF in News</li>
          <li className="link pointer">Terms & Conditions</li>
          <li className="link pointer">Refund & Cancellation</li>
        </ul>
      </section>
      <section className="quick-links-section flex-grow-1x">
        <h2 className="link-title">Explore</h2>
        <ul>
          <li className="link pointer">Arenas</li>
          <li className="link pointer">Studios</li>
          <li className="link pointer">Nutrition</li>
        </ul>
      </section>
      <section className="quick-links-section flex-grow-1x">
        <h2 className="link-title">Contact</h2>
        <ul>
          <li className="contact-list-item">
            <IoLocationSharp className="contact-icon" size={20} />
            <p className="link pointer">
              Ro: S1502, Amrapali Silicon city, SEctor 76, Noida, Uttar Pradesh,
              India
            </p>
          </li>
          <li className="contact-list-item">
            <IoLocationSharp className="contact-icon" size={20} />
            <p className="link pointer">
              Ho: C-86 B, Ground Floor, Sector 8, Noida, Uttar Pradesh, India
            </p>
          </li>
          <li className="contact-list-item">
            <IoCall className="contact-icon" size={20} />
            <p className="link pointer">+919090639005</p>
          </li>
          <li className="contact-list-item">
            <IoMail className="contact-icon" size={20} />
            <p className="link pointer">support@wtfup.me</p>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
