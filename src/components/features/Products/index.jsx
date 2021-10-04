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
import NotFound from "../NotFound";
import DetailPage from "./pages/DetailPage";
import { Box } from "@mui/material";

ProductFeature.propTypes = {};

function ProductFeature(props) {
  const match = useRouteMatch();
  // console.log(match.url);
  return (
    <Box style={{ backgroundColor: "#f4f4f4f4" }}>
      <Switch>
        <Route path={match.url} component={ListPage} exact></Route>
        <Route path={`${match.url}/:productId`} component={DetailPage} />
        <Route component={NotFound} />
      </Switch>
    </Box>
  );
}

export default ProductFeature;
