import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";

Product.propTypes = {};

function Product({ product }) {
  const history = useHistory();
  const productThumbnail = product.thumbnail
    ? `https://api.ezfrontend.com${product.thumbnail?.url}`
    : "https://via.placeholder.com/444";
  const formatPrice = function (number) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(number);
  };
  const handleClick = function () {
    history.push(`/products/${product.id}`);
  };
  return (
    <Box padding={1} onClick={handleClick}>
      {/* <Box padding={1} onClick={handleClick}> */}
      {/* <Skeleton variant="rect" width="100%" height={118} /> */}
      <Box minHeight="215px">
        <img src={productThumbnail} alt={product.name} width="100%" />
      </Box>

      <Typography variant="body2">{product.name}</Typography>
      <Typography variant="body2">
        <Box
          component="span"
          fontSize="16px"
          fontWeight="bold"
          marginRight="2px"
        >
          {formatPrice(product.salePrice)}
        </Box>
        {product.promotionPercent > 0 ? ` - ${product.promotionPercent}%` : ""}
      </Typography>
    </Box>
  );
}

export default Product;
