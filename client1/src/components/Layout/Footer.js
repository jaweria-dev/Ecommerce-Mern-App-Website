import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="bg-dark text-light p-3">
        <h4 className="text-center">
          All right reserved &copy; Jaweria Ahmed Siddiqui
        </h4>
        <p className="text-center mt-3">
          <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
          <Link to="/policy">Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
