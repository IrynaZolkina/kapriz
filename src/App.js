import React, { Component } from "react";

import Homepage from "./components/pages/Homepage";
import Footer from "./components/pages/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Homepage />
        <Footer />
      </div>
    );
  }
}
export default App;
