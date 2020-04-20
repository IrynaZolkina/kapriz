import React from "react";

import "./homepage.css";
import "../footer/footer.css";

import Directory from "../../directory/Directory";
import Slider from "../../utilities/slider/Slider";
import Footer from "../footer/Footer";

const Homepage = () => (
  <div className="homepage1">
    <Slider />

    <Directory />
    <Footer />
  </div>
);

export default Homepage;
