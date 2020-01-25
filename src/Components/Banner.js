import React from "react";
import bannerStyle from "./banner.module.scss";

const Banner = () => {
  return (
    <div className={bannerStyle.banner}>
      <div className={bannerStyle.intro}>
        <h1>Steven Christian</h1>
        Web Developer
      </div>
    </div>
  );
};

export default Banner;
