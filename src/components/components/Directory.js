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
          imageUrl: "images/homepage-images/hp1.png",
          id: 1,
          linkUrl: "shop/hats",
          size: "xxxl-img",
        },
        {
          title: "jackets",
          titleFront: "hathhhhhhhhhhhhhhhhhhhhs",
          imageUrl: "images/homepage-images/img18.jpg",
          id: 2,
          linkUrl: "shop/jackets",
          size: "xl-img",
        },
        {
          title: "sneakers",
          imageUrl: "images/homepage-images/img17.jpg",
          id: 3,
          linkUrl: "shop/sneakers",
          size: "s-img",
        },
        {
          title: "map",
          imageUrl: "images/homepage-images/img19.jpg",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
          size: "m-img",
        },
        {
          title: "mens",
          imageUrl: "images/homepage-images/img16.jpg",
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
          size: "l-img",
        },
        {
          title: "mens",
          imageUrl: "images/homepage-images/img15.jpg",
          size: "large",
          id: 6,
          linkUrl: "shop/mens",
          size: "l-img",
        },
        {
          title: "mens",
          imageUrl: " images/homepage-images/png13.png",
          size: "large",
          id: 7,
          linkUrl: "shop/mens",
          size: "l-img",
        },
      ],

      sections: [
        {
          title: "ПАРФУМЫ",
          imageUrl: "images/homepage-images/img09.jpg",
          size: "large",
          id: 1,
          linkUrl: "shop/womens",
        },
        {
          title: "декоративная косметика",
          imageUrl: "images/homepage-images/img11.jpg",
          size: "large",
          id: 2,
          linkUrl: "shop/mens",
        },
        {
          title: "окрашивание",
          imageUrl: "images/homepage-images/img04.jpg",
          id: 3,
          linkUrl: "shop/hats",
        },
        {
          title: "уход для волос",
          imageUrl: "images/homepage-images/img02.jpg",
          id: 4,
          linkUrl: "shop/jackets",
        },
        {
          title: "стайлинг",
          imageUrl: "images/homepage-images/img06.jpg",
          id: 5,
          linkUrl: "shop/sneakers",
        },
        {
          title: "уход для лица",
          imageUrl: "images/homepage-images/img07.jpg",
          size: "large",
          id: 6,
          linkUrl: "shop/womens",
        },
        {
          title: "средства для ногтей",
          imageUrl: "images/homepage-images/img12.jpg",
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
          <div className="image-container">
            <img
              className="image-xxxl"
              src={this.state.sect[0].imageUrl}
              alt=""
            />
          </div>

          <div className="title-l">НОВИНКИ СЕЗОНА</div>
          <div className="btn btn-large">ПОСМОТРЕТЬ</div>
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
