import { Box, Container, Paper } from "@material-ui/core";
import { Grid } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { addToCard, showMiniCart } from "../../Cart/cartSlice";
import AddtoCartForm from "../component/AddtoCartForm";
import useProductDetail from "../component/hooks/useProductDetail";
import ProductAdditional from "../component/ProductAdditional";
import ProductInfo from "../component/ProductInfo";
import ProductMenu from "../component/ProductMenu";
import ProductReviews from "../component/ProductReviews";
import ProductThumbnail from "../component/ProductThumbnail";

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
    // console.log(state);

    const action = addToCard({
      checked: false,
      id: product.id,
      product,
      quantity: formValue.quantity,
    });
    console.log(action);
    dispatch(showMiniCart());
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
