import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        123
        <div
          className="background-image-map"
          style={{
            backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fmap.jpg?alt=media&token=d30a8d7a-8af6-4d55-87fb-32aa37d34374")`,
          }}
        />
        <div className="kapriz-img-container">
          <div
            className="background-image-kapriz"
            style={{
              backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fkapris%2Fkapriz1.jpg?alt=media&token=ef7282d3-95b8-4f0b-a4cf-99f8bcfb680a")`,
            }}
          />
          <div
            className="background-image-kapriz"
            style={{
              backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fkapris%2Fkapriz2.jpg?alt=media&token=b93948c0-c599-4d0d-9160-79917855c1b0")`,
            }}
          />
          <div
            className="background-image-kapriz"
            style={{
              backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fkapris%2Fkapriz3.jpg?alt=media&token=bf97b9d5-48f8-42da-b8da-7b29e25250d8")`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
