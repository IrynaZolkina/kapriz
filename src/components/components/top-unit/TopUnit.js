import React from "react";
import "./topUnit.css";

const TopUnit = ({
  title,
  titleFront,
  description,
  imageUrl,
  size,
  history,
  linkUrl,
  match,
}) => (
  <div className="top-item-container">
    <div className="top-item-image-container">
      <div
        className="top-item-background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
    </div>
    <div className="top-item-content">
      <div className="top-item-title">{title}</div>
      <div className="top-item-description">{description}</div>
    </div>
  </div>
);

export default TopUnit;
{
  /* <div className={`${size} menu-item `}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div> */
}
