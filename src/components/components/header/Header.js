import React from "react";
import { Link } from "react-router-dom";
//import { connect } from "react-redux";
//import { createStructuredSelector } from "reselect";
import "./header.css";

//import { auth } from "../firebase/FirebaseUtil";
//import CartIcon from "./CartIcon";
///import CartDropDown from "./CartDropDown";
//import { selectCartHidden } from "../redux/cart/cartSelectors";
//import { selectCurrentUser } from "../redux/user/userSelector";
//import { createStore } from "redux";

const Header = ({ currentUser, hidden }) => {
  return (
    <div>
      <div className="upper-header">
        COSMETICS AND PARFUMS WITH VERY GOOD PRICES
      </div>
      <div className="header">
        {/*    <div className="logo-container"> */}
        <Link
          className="logo-kapriz"
          to="/"
          style={{
            backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fkapris%2Flogo2.jpg?alt=media&token=49259f9e-e01b-4215-a9c8-795681ab1e49')`,
          }}
          /* https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fkapris%2FLogo-01.png?alt=media&token=60fb7fad-cb79-4294-99ce-97ec178b88bf 

            https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fkapris%2FLogo-01.png?alt=media&token=60fb7fad-cb79-4294-99ce-97ec178b88bf

          https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fkapris%2Flogo2.jpg?alt=media&token=49259f9e-e01b-4215-a9c8-795681ab1e49
          */
        ></Link>
        {/*  </div> */}
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
    </div>
  );
};

/* const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
}); */

export default Header;
//export default connect(mapStateToProps)(Header);
