import React from "react";
import bannerStyle from "./banner.module.scss";
import banner from "../blue-banner.svg";

const Banner = () => {
  return (
    <div>
      <img className={bannerStyle.banner} src={banner} alt="banner" />
      {/* <div className={bannerStyle.fade} /> */}
    </div>
  );
};

export default Banner;
