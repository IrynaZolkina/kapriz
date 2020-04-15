import React, { Component } from "react";
/* import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../redux/directory/directorySelectors";*/

import MenuItem from "./Menuitem";
import MenuItemJustImage from "./MenuItemJustImage";
import DataManager from "../utilities/DataManager";
//import Button from "../utilities/Button";

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sect: [
        {
          title: "ПАРФУМЫ",
          titleFront: "",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fhp1.png?alt=media&token=1d8e9e89-424c-4aeb-b709-2d304c03974a",
          //imageUrl: "images/homepage-images/hp1.png",
          id: 1,
          linkUrl: "shop/hats",
          size: "xxxl-img",
        },
        {
          title: "jackets",
          titleFront: "hathhhhhhhhhhhhhhhhhhhhs",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg18.jpg?alt=media&token=2e79cc8a-7ec3-4ee5-82ce-31f3f453a2a5",
          //imageUrl: "images/homepage-images/img18.jpg",
          id: 2,
          linkUrl: "shop/jackets",
          size: "xl-img",
        },
        {
          title: "sneakers",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg17.jpg?alt=media&token=283c2e35-1865-424c-a42b-3aff6d082f04",
          //imageUrl: "images/homepage-images/img17.jpg",
          id: 3,
          linkUrl: "shop/sneakers",
          size: "s-img",
        },
        {
          title: "map",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg19.jpg?alt=media&token=baff45ef-8ed3-49e3-8feb-ad6f0eebe6e0",
          //imageUrl: "images/homepage-images/img19.jpg",

          id: 4,
          linkUrl: "shop/womens",
          size: "m-img",
        },
        {
          title: "mens",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg16.jpg?alt=media&token=78f947ad-d5a9-4ae8-bf6c-53587493c168",
          //imageUrl: "images/homepage-images/img16.jpg",

          id: 5,
          linkUrl: "shop/mens",
          size: "l-img",
        },
        {
          title: "mens",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg15.jpg?alt=media&token=c0abbf7a-fa62-476f-b403-bcc86cffcab6",
          //imageUrl: "images/homepage-images/img15.jpg",

          id: 6,
          linkUrl: "shop/mens",
          size: "l-img",
        },
        {
          title: "mens",
          imageUrl:
            " https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fpng13.png?alt=media&token=fe670bdb-94e2-48f4-b470-3969ecc77d50",

          id: 7,
          linkUrl: "shop/mens",
          size: "l-img",
        },
      ],

      sections: [
        {
          title: "ПАРФУМЫ",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg09.jpg?alt=media&token=66d0aec9-f946-4793-8924-20617d8d33d9",
          //imageUrl: "images/homepage-images/img09.jpg",
          size: "large",
          id: 1,
          linkUrl: "shop/womens",
        },
        {
          title: "декоративная косметика",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg11.jpg?alt=media&token=1a01e3b7-cda7-4739-8c22-08d13d9f7cea",
          //imageUrl: "images/homepage-images/img11.jpg",
          size: "large",
          id: 2,
          linkUrl: "shop/mens",
        },
        {
          title: "окрашивание",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg04.jpg?alt=media&token=2144ddbb-18cb-4a95-996e-e71a07d79ef8",
          //imageUrl: "images/homepage-images/img04.jpg",
          id: 3,
          linkUrl: "shop/hats",
        },
        {
          title: "уход для волос",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg02.jpg?alt=media&token=de8b95cf-6a33-478f-868e-dc1d8bd124d2",
          //imageUrl: "images/homepage-images/img02.jpg",
          id: 4,
          linkUrl: "shop/jackets",
        },
        {
          title: "стайлинг",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg06.jpg?alt=media&token=96af8349-0325-4105-8f0a-8ff1fdcac36a",
          //imageUrl: "images/homepage-images/img06.jpg",
          id: 5,
          linkUrl: "shop/sneakers",
        },
        {
          title: "уход для лица",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg07.jpg?alt=media&token=b56e5c36-50b1-4894-9914-37089a436f8d",
          //imageUrl: "images/homepage-images/img07.jpg",
          size: "large",
          id: 6,
          linkUrl: "shop/womens",
        },
        {
          title: "средства для ногтей",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg12.jpg?alt=media&token=f0f5d8c9-606d-4001-b861-4fce932a6bd6",
          //imageUrl: "images/homepage-images/img12.jpg",
          size: "large",
          id: 7,
          linkUrl: "shop/mens",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu-my">
        <div className="directory-list-0">
          {/* <div className="image-container">
            <img
              className="image-xxxl"
              src={this.state.sect[0].imageUrl}
              alt=""
            /> */}
          {/* <div
              className="image-xxxl"
              style={{
                backgroundImage: `url(${this.state.sect[0].imageUrl})`,
              }}
            /> */}
          {/* </div> */}
        </div>

        <div className="grey-container">
          <div className="date">
            <DataManager />
          </div>
          <div className="title-2">МЫ ПРЕДЛАГАЕМ</div>
          <div className="small-slider">
            <div className="image-container">
              <div
                className="background-image-m"
                style={{
                  backgroundImage: `url(${this.state.sect[2].imageUrl})`,
                }}
              />
            </div>

            <div className="image-container">
              <div
                className="background-image-m"
                style={{
                  backgroundImage: `url(${this.state.sect[3].imageUrl})`,
                }}
              />
            </div>
            <div className="image-container">
              <div
                className="background-image-m"
                style={{
                  backgroundImage: `url(${this.state.sect[1].imageUrl})`,
                }}
              />
            </div>
          </div>

          <div className="small-slider-under">
            <div className="small-slider-unit">
              Wide assortment of different Brends
              <h2>ПАРФУМЫ ДЛЯ ЖЕНЩИН</h2>
              <div className="btn btn-middle">ПОСМОТРЕТЬ</div>
            </div>
            <div className="small-slider-unit">
              Wide assortment of different Brends
              <h2>ПАРФУМЫ ДЛЯ МУЖЧИН</h2>
              <div className="btn btn-middle">ПОСМОТРЕТЬ</div>
            </div>
            <div className="small-slider-unit">
              Wide assortment of different Brends
              <h2>ПАРФУМЫ </h2>
              <div className="btn btn-middle">ПОСМОТРЕТЬ</div>
            </div>
          </div>
        </div>

        <div className="directory-list-1">
          <div className="title-2">ДЛЯ ЖЕНЩИН</div>

          <div className="homepage1">
            <div className="directory-menu">
              {this.state.sections.map(
                ({ id, titleFront, title, imageUrl, size }) => (
                  <MenuItem
                    key={id}
                    title={title}
                    titleFront={titleFront}
                    imageUrl={imageUrl}
                    size={size}
                  />
                )
              )}
            </div>
          </div>

          <div className="directory-list-2">
            <div className="title-2">ДЛЯ МУЖЧИН</div>
          </div>

          <div className="women-container">
            <div className="image-container">
              <div
                className="background-image-m"
                style={{
                  backgroundImage: `url(${this.state.sect[4].imageUrl})`,
                }}
              />
            </div>
            <div className="image-container">
              <div
                className="background-image-m"
                style={{
                  backgroundImage: `url(${this.state.sect[5].imageUrl})`,
                }}
              />
            </div>
            <div className="image-container">
              <div
                className="background-image-m"
                style={{
                  backgroundImage: `url(${this.state.sect[6].imageUrl})`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Directory;
