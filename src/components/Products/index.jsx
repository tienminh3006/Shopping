import React from "react";
import PropTypes from "prop-types";
import {
  Link,
  NavLink,
  Redirect,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import ListPage from "../Products/pages/Listpage";
import DetailPage from "./pages/DetailPage";

ProductFeature.propTypes = {};

function ProductFeature(props) {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={match.url} component={ListPage} exact></Route>
        <Route path={`${match.url}/:productId`} component={DetailPage}></Route>
      </Switch>
    </div>
  );
}

export default ProductFeature;
