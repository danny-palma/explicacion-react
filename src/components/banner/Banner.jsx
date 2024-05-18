import React from "react";
import img_banner from "../../assets/banner.jpg";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <h1 className="banner_title">Talento Tech</h1>
      <img className="banner_img" src={img_banner} alt="" id="banner" />
    </div>
  );
}

export default Banner;
