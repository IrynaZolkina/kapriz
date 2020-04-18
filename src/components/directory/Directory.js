import React, { Component } from "react";
import "./directory.css";
/* import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../redux/directory/directorySelectors";*/

import MenuItem from "../components/Menuitem";
import MenuItemJustImage from "../components/MenuItemJustImage";
import DataManager from "../utilities/datemanager/DataManager";
import SliderThree from "../utilities/slider-3-units/SliderThree";
import SliderRadio from "../utilities/slider-radio/SliderRadio";
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
          title: "обличчя",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg32.jpg?alt=media&token=0a444d5c-3f9f-4067-b4f0-47f4803e4dcc",
          /* imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg07.jpg?alt=media&token=b56e5c36-50b1-4894-9914-37089a436f8d", */
          //imageUrl: "images/homepage-images/img07.jpg",
          size: "large",
          id: 6,
          linkUrl: "shop/womens",
        },
        {
          title: "нігті",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg31.jpg?alt=media&token=77f56afa-37fb-4233-9ad1-5559b5967416",
          /* imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg12.jpg?alt=media&token=f0f5d8c9-606d-4001-b861-4fce932a6bd6", */
          //imageUrl: "images/homepage-images/img12.jpg",
          size: "large",
          id: 7,
          linkUrl: "shop/mens",
        },
      ],

      sections2: [
        {
          title: "ПАРФУМЫ",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg21.jpg?alt=media&token=44b1723c-1a9f-44e3-b01a-39b47cd8766b",
          //imageUrl: "images/homepage-images/img09.jpg",
          size: "large",
          id: 1,
          linkUrl: "shop/womens",
        },
        {
          title: "волосся",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg22.jpg?alt=media&token=0e1520df-3c6a-45c3-aaf4-4e20f1c09387",
          //imageUrl: "images/homepage-images/img11.jpg",
          size: "large",
          id: 2,
          linkUrl: "shop/mens",
        },
        {
          title: "борода",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg23.jpg?alt=media&token=09f8ba0e-acf2-4b37-8164-fe00d0911393",
          //imageUrl: "images/homepage-images/img04.jpg",
          id: 3,
          linkUrl: "shop/hats",
        },
        {
          title: "гоління",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg26.jpg?alt=media&token=843afae3-8c2a-4227-bdf6-b1e1cdba2921",
          //imageUrl: "images/homepage-images/img02.jpg",
          id: 4,
          linkUrl: "shop/jackets",
        },
        {
          title: "для душу",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg24.jpg?alt=media&token=2f503e78-0698-4ba1-98b9-f6a1c88cb080",
          //imageUrl: "images/homepage-images/img06.jpg",
          id: 5,
          linkUrl: "shop/sneakers",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div className="grey-fon">
          <section className="section-top-sales">
            <div className="date">
              <DataManager />
            </div>
            <div className="title-2">TOP ПРОДАЖУ</div>

            <SliderThree />
          </section>
        </div>
        {/*  <div className="directory-list-0"></div>

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
        </div> */}

        <div className="directory-list-1">
          <div className="title-2">ДЛЯ ЖЕНЩИН</div>

          <div className="homepage">
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
            <div className="title-2">{"для чоловіків".toUpperCase()}</div>
          </div>

          <div className="homepage">
            <div className="directory-menu">
              {this.state.sections2.map(
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

          {/* <div className="women-container">
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
          </div> */}
        </div>
      </div>
    );
  }
}

export default Directory;
