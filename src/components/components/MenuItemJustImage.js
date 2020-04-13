import React from "react";

const MenuItemJustImage = ({
  title,
  titleFront,
  titleBack,
  imageUrl,
  size,
  history,
  linkUrl,
  match,
}) => (
  <div className={`${size} menu-item `}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
  </div>
);

export default MenuItemJustImage;
