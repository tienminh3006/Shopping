import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

ProductInfo.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "30px 0 0 30px",
  },
  description: {
    margin: "30px",
  },
  originalPrice: {
    textDecoration: "line-through",
  },
  promotionPercent: {},
  priceBox: {},
  salePrice: {
    marginTop: "5px",
    fontSize: "20px",
    fontWeight: "bold",
  },
}));
function ProductInfo({ product = {} }) {
  const { name, shortDescription, salePrice, originalPrice, promotionPercent } =
    product;
  const formatPrice = function (number) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(number);
  };
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography component="h2" variant="h5">
        {name}
      </Typography>
      <Typography variant="body2" className={classes.description}>
        {shortDescription}
      </Typography>
      <Box className={classes.priceBox}>
        <Box conponent="span" className={classes.salePrice}>
          {formatPrice(salePrice)}
        </Box>
        {promotionPercent > 0 && (
          <>
            <Box conponent="span" className={classes.originalPrice}>
              {formatPrice(originalPrice)}
            </Box>
            <Box conponent="span" className={classes.promotionPercent}>
              {`-${promotionPercent}%`}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}

export default ProductInfo;
