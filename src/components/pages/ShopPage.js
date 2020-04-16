import React, { Component } from "react";
import { Route } from "react-router-dom";
import SHOP_DATA from "../components/ShopData";
import CollectionPreview from "../components/collection-preview/CollectionPreview";

//import CollectionsOverview from "../../components/CollectionsOverview";
//import CollectionPage from "../CollectionPage";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    //console.log(match);
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
        {/* <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> */}
      </div>
    );
  }
}
export default ShopPage;
