import { Box } from "@mui/material";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "../NotFound";
import ListPage from "../Products/pages/Listpage";
import DetailPage from "./pages/DetailPage";

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
