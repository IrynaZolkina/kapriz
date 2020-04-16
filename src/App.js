import React, { Component } from "react";

import Homepage from "./components/pages/Homepage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./components/pages/ShopPage";
import Header from "./components/components/header/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shoppage" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}
export default App;
