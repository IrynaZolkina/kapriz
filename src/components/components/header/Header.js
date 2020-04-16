import React from "react";
import { Link } from "react-router-dom";
//import { connect } from "react-redux";
//import { createStructuredSelector } from "reselect";
import "./header.css";

import { ReactComponent as Logo } from "../../../assets/crown.svg";
//import { auth } from "../firebase/FirebaseUtil";
//import CartIcon from "./CartIcon";
///import CartDropDown from "./CartDropDown";
//import { selectCartHidden } from "../redux/cart/cartSelectors";
//import { selectCurrentUser } from "../redux/user/userSelector";
//import { createStore } from "redux";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      {/* <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link> */}
      <Link
        className="logo-kapriz"
        to="/"
        style={{
          backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Flogo1.jpg?alt=media&token=b4757b87-24c6-496f-9f4d-1762cdac7a0d')`,
        }}
      ></Link>
      <div className="main-title">
        <Link to="/"> КАПРИЗ</Link>
      </div>
      <div className="options">
        <Link className="option" to="/shoppage">
          SHOP
        </Link>

        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {/* {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )} */}
        {/*  <CartIcon /> */}
      </div>
      {/* {hidden ? null : <CartDropDown />} */}
    </div>
  );
};

/* const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
}); */

export default Header;
//export default connect(mapStateToProps)(Header);
