import React, { Component } from "react";

import Homepage from "./components/pages/homepage/Homepage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./components/pages/ShopPage";
import Header from "./components/components/header/Header";
import SignInAndSignUpPage from "./components/pages/sign-in-and-up-page/SignInAndSignUpPage";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shoppage" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}
export default App;
