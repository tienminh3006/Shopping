import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Box, Container, Paper } from "@material-ui/core";
import { Grid } from "@mui/material";
import ProductThumbnail from "../component/ProductThumbnail";
import useProductDetail from "../component/hooks/useProductDetail";
import { makeStyles } from "@mui/styles";
import ProductInfo from "../component/ProductInfo";
import AddtoCartForm from "../component/AddtoCartForm";
import ProductMenu from "../component/ProductMenu";
import ProductAdditional from "../component/ProductAdditional";
import ProductReviews from "../component/ProductReviews";
import ProductDescription from "../component/ProductDescription";
import LinearProgress from "@mui/material/LinearProgress";
import { useDispatch } from "react-redux";
import { addToCard } from "../../Cart/cartSlice";

DetailPage.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f4f4f4",
  },
  left: {
    width: "400px",
    //   padding: theme.spacing(1.5),
    //   borderRight: `1px solid ${theme.palette.grey[300]}`,
  },
  right: {
    flex: "1 1 0",
  },
}));

function DetailPage(props) {
  const dispatch = useDispatch();

  const classes = useStyles();
  const {
    url,
    params: { productId },
  } = useRouteMatch();
  const { product, isLoading } = useProductDetail(productId);

  if (isLoading) {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  }
  const handleAddToCardSubmit = (formValue) => {
    const action = addToCard({
      id: product.id,
      product,
      quantity: formValue.quantity,
    });
    // console.log(action);
    // console.log(formValue);
    dispatch(action);
  };
  return (
    <Box className={classes.root}>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid item className={classes.left}>
              <ProductThumbnail product={product}></ProductThumbnail>
            </Grid>
            <Grid item className={classes.right}>
              <ProductInfo product={product}></ProductInfo>
              <AddtoCartForm onSubmit={handleAddToCardSubmit}></AddtoCartForm>
            </Grid>
          </Grid>
        </Paper>
        <ProductMenu product={product} />
        <Switch>
          <Route
            path={`${url}/additional`}
            component={ProductAdditional}
          ></Route>
          <Route path={`${url}/reviews`} component={ProductReviews}></Route>
        </Switch>
      </Container>
    </Box>
  );
}

export default DetailPage;
