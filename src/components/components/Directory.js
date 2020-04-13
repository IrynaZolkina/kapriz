import React, { Component } from "react";
/* import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../redux/directory/directorySelectors";*/

import MenuItem from "./Menuitem";
import MenuItemJustImage from "./MenuItemJustImage";
import DataManager from "../utilities/DataManager";
//import Button from "../utilities/Button";
//import im from "../../images/homepage-img/";

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          titleFront: "",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/Navbar%20images%2Fhp1.png?alt=media&token=e1edb285-d201-4238-9eb6-b8df71285368",
          id: 1,
          linkUrl: "shop/hats",
          size: "xxxl-img",
        },
        {
          title: "jackets",
          titleFront: "hathhhhhhhhhhhhhhhhhhhhs",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/Navbar%20images%2Fdownload.jpg?alt=media&token=e4e397c9-b870-474f-97be-977da7244863",
          id: 2,
          linkUrl: "shop/jackets",
          size: "xl-img",
        },
        {
          title: "sneakers",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/Navbar%20images%2FRicci-Ricci-2011_Q320.jpg?alt=media&token=c67af95c-b4b6-4bb2-9384-33b45fbae7fe",
          id: 3,
          linkUrl: "shop/sneakers",
          size: "s-img",
        },
        {
          title: "womens",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/Navbar%20images%2FSL24ADS_FAMOUS_Jimmy_Choo-1-1024x1024.jpg?alt=media&token=137dbf4e-a81e-450a-9efb-83f4afa3ffa6",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
          size: "m-img",
        },
        {
          title: "mens",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/Navbar%20images%2Fhair-care-at-home.jpg?alt=media&token=c752c198-e598-418f-8c77-12563d694f60",
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
          size: "l-img",
        },
        {
          title: "mens",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/Navbar%20images%2Fbeautiful-skin.jpg?alt=media&token=51e8baf6-f604-4dac-b286-21811d870e38",
          size: "large",
          id: 6,
          linkUrl: "shop/mens",
          size: "l-img",
        },
        {
          title: "mens",
          imageUrl:
            " https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/Navbar%20images%2Fschwarzkopf-professional-bond-enforcing-blonde-lifting-cream.jpg?alt=media&token=833ccfff-cc06-43fb-8c0c-f7e939c4fc17",
          size: "large",
          id: 7,
          linkUrl: "shop/mens",
          size: "l-img",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        <div className="directory-list-0">
          <div className="image-container">
            <img
              className="image-xxxl"
              src={this.state.sections[0].imageUrl}
              alt=""
            />
          </div>

          <div className="title-l">НОВИНКИ СЕЗОНА</div>
          <div className="btn-large">ПОСМОТРЕТЬ</div>
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
                  backgroundImage: `url(${this.state.sections[2].imageUrl})`,
                }}
              />
            </div>

            <div className="image-container">
              <div
                className="background-image-m"
                style={{
                  backgroundImage: `url(${this.state.sections[3].imageUrl})`,
                }}
              />
            </div>
            <div className="image-container">
              <div
                className="background-image-m"
                style={{
                  backgroundImage: `url(${this.state.sections[1].imageUrl})`,
                }}
              />
            </div>
          </div>

          <div className="small-slider-under">
            <div className="small-slider-unit">
              <h2>ПАРФУМЫ ДЛЯ ЖЕНЩИН</h2>
              <div className="btn-middle">ПОСМОТРЕТЬ</div>
            </div>
            <div className="small-slider-unit">
              <h2>ПАРФУМЫ ДЛЯ МУЖЧИН</h2>
              <div className="btn-middle">ПОСМОТРЕТЬ</div>
            </div>
            <div className="small-slider-unit">
              <h2>ПАРФУМЫ </h2>
              <div className="btn-middle">ПОСМОТРЕТЬ</div>
            </div>
          </div>
        </div>

        <div className="directory-list-1">
          <div className="title-2">ДЛЯ ЖЕНЩИН</div>
          <div className="women-container">
            <div className="image-container">
              <div
                className="background-image-m"
                style={{
                  backgroundImage: `url(${this.state.sections[6].imageUrl})`,
                }}
              />
            </div>
            <div className="image-container">
              <div
                className="background-image-m"
                style={{
                  backgroundImage: `url(${this.state.sections[4].imageUrl})`,
                }}
              />
            </div>
            <div className="image-container">
              <div
                className="background-image-m"
                style={{
                  backgroundImage: `url(${this.state.sections[5].imageUrl})`,
                }}
              />
            </div>
          </div>

          <div className="title-2">ДЛЯ МУЖЧИН</div>
        </div>

        <div className="directory-list-2"></div>
      </div>
    );
  }
}

export default Directory;
/* 
render() {
  return (
    <div className="directory-menu">
      {this.state.sections.map(
        ({ id, titleFront, title, imageUrl, size }) => (
          <div className="directory-list">
            <div className="directory-list-title">
              <h1></h1>
              {titleFront}
            </div>
            <div className="directory-list-menu">
              <MenuItem
                key={id}
                title={title}
                titleFront={titleFront}
                imageUrl={imageUrl}
                size={size}
              />
            </div>
          </div>
        )
      )}
      
    </div>
  );
} */

//export default connect(mapStateToProps)(Directory);
/* const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
}); */
