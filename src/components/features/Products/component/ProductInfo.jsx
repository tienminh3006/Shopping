import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

ProductInfo.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    // paddingBottom: theme.spacing(2),
    // borderBottom: `1px solid ${theme.palette.grey[200]}`,
  },
  description: {
    // margin: theme.spacing(2, 0),
  },
  originalPrice: {
    // marginRight: theme.spacing(2),
    textDecoration: "line-through",
  },
  promotionPercent: {},
  priceBox: {
    // padding: theme.spacing(2),
    // backgroundColor: theme.palette.grey[200],
  },
  salePrice: {
    // fontSize: theme.typography.h3.fontSize,
    // marginRight: theme.spacing(3),
    fontWeight: "bold",
  },
}));
function ProductInfo({ product = {} }) {
  const { name, shortDescription, salePrice, originalPrice, promotionPercent } =
    product;
  const formatPrice = function (number) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      // currency: "VND",
    }).format(number);
  };
  const classes = useStyles();

  return (
    <Box>
      <Typography component="h1" variant="h4">
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
