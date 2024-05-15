import React from "react";
import img_banner from "../../assets/banner.jpg";
import "./Banner.css";

function Banner() {

  return (
    <div>
      <img className="banner_img" src={img_banner} alt="" id="banner"/>
    </div>
  );
}

export default Banner;
