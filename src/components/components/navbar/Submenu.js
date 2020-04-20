/**** Subenu component is called from Navbar */

import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Submenu extends Component {
  constructor() {
    super();
    this.state = {
      clearSubmenu: true,
    };
  }
  render() {
    const navbarSubMenu = this.props.navbarSubMenu;
    if (this.state.clearSubmenu === true) {
      return (
        <div>
          {/* <a className="hover-border" href="">
                {this.props.title}
              </a> */}
          <div
            className="menu-sub"
            onClick={() => {
              this.setState({ clearSubmenu: false });
              setTimeout(() => this.setState({ clearSubmenu: true }), 500);
            }}
          >
            {/* /************ FIRST COLUMN************  */}
            <div className="menu-col-2">
              {/*   <h3 className="menu-category">Category</h3> */}
              <ul>
                {navbarSubMenu.map((element, index) => {
                  if (
                    (index < 2) &
                    (element.search("#") !== 0) &
                    (element.search("https") !== 0)
                  ) {
                    return (
                      <li key={index}>
                        <NavLink to={"/"}>{element.toUpperCase()}</NavLink>
                      </li>
                    );
                  }
                  if ((index < 2) & (element.search("https") === 0)) {
                    return (
                      <div className="" key={index}>
                        <img
                          src={element}
                          className="img-menu-1-col"
                          alt="Poccccc"
                        />
                      </div>
                    );
                  }

                  if (index < 2) {
                    return (
                      <div className="title-category" key={index}>
                        {element.slice(1).toUpperCase()}
                      </div>
                    );
                  }
                })}
              </ul>
            </div>
            {/* /************ SECOND COLUMN************  */}
            <div className="menu-col-1">
              {/* <h3 className="menu-category">Category</h3> */}
              <ul>
                {navbarSubMenu.map((element, index) => {
                  if (
                    (index >= 2) &
                    (index < 8) &
                    (element.search("#") !== 0) &
                    (element.search("https") !== 0)
                  ) {
                    return (
                      <li key={index}>
                        <NavLink to={"/"}>{element.toUpperCase()}</NavLink>
                      </li>
                    );
                  }
                  if (
                    (index >= 2) &
                    (index < 8) &
                    (element.search("https") === 0)
                  ) {
                    return (
                      <div className="" key={index}>
                        <img
                          src={element}
                          className="img-menu-bd"
                          alt="Poccccc"
                        />
                      </div>
                    );
                  }

                  if ((index >= 2) & (index < 8)) {
                    return (
                      <div className="title-category" key={index}>
                        {element.slice(1).toUpperCase()}
                      </div>
                    );
                  }
                })}
              </ul>
            </div>
            {/* /************ THIRD COLUMN************  */}
            <div className="menu-col-1">
              {/* <h3 className="menu-category">Category</h3> */}
              <ul>
                {navbarSubMenu.map((element, index) => {
                  if (
                    (index >= 8) &
                    (index < 12) &
                    (element.search("#") !== 0) &
                    (element.search("https") !== 0)
                  ) {
                    return (
                      <li key={index}>
                        <NavLink to={"/"}>{element.toUpperCase()}</NavLink>
                      </li>
                    );
                  }
                  if (
                    (index >= 8) &
                    (index < 12) &
                    (element.search("https") === 0)
                  ) {
                    return (
                      <div className="" key={index}>
                        <img
                          src={element}
                          className="img-menu-bd"
                          alt="Poccccc"
                        />
                      </div>
                    );
                  }

                  if ((index >= 8) & (index < 12)) {
                    return (
                      <div className="title-category" key={index}>
                        {element.slice(1).toUpperCase()}
                      </div>
                    );
                  }
                })}
              </ul>
            </div>
            {/* /************ FORTH COLUMN************  */}
            <div className="menu-col-2">
              {/* <h3 className="menu-category">Category</h3> */}
              <ul>
                {navbarSubMenu.map((element, index) => {
                  if (
                    (index >= 12) &
                    (index < 20) &
                    (element.search("#") !== 0) &
                    (element.search("https") !== 0)
                  ) {
                    return (
                      <li key={index}>
                        <NavLink to={"/"}>{element.toUpperCase()}</NavLink>
                      </li>
                    );
                  }
                  if (
                    (index >= 12) &
                    (index < 20) &
                    (element.search("https") === 0)
                  ) {
                    return (
                      <div className="" key={index}>
                        <img
                          src={element}
                          className="img-menu-4-col"
                          alt="Poccccc"
                        />
                      </div>
                    );
                  }

                  if ((index >= 12) & (index < 20)) {
                    return (
                      <div className="title-category" key={index}>
                        {element.slice(1).toUpperCase()}
                      </div>
                    );
                  }
                })}
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Submenu;
