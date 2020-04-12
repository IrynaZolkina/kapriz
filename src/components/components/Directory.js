import React, { Component } from "react";
/* import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../redux/directory/directorySelectors";*/

import MenuItem from "./Menuitem";
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
          size: "l-img",
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
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "shop/sneakers",
          size: "s-img",
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
          size: "m-img",
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
          size: "l-img",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        <div className="directory-list-1">
          <div className="directory-list-title">
            <h1></h1>
          </div>
          <div className="directory-list-menu">
            <MenuItem
              key={this.state.sections[0].id}
              title={this.state.sections[0].title}
              titleFront={this.state.sections[0].titleFront}
              imageUrl={this.state.sections[0].imageUrl}
              size={this.state.sections[0].size}
            />
          </div>
        </div>

        <div className="directory-list-2">
          <div className="directory-list-title">
            <h1>{this.state.sections[1].title}</h1>
            {this.state.sections[1].titleFront}
          </div>
          <div className="directory-list-menu">
            <MenuItem
              key={this.state.sections[1].id}
              title={this.state.sections[1].title}
              titleFront={this.state.sections[1].titleFront}
              imageUrl={this.state.sections[1].imageUrl}
              size={this.state.sections[1].size}
            />
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
