import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

ProductThumbnail.propTypes = {};

function ProductThumbnail(props) {
  const { product } = props;
  const productThumbnail = product.thumbnail
    ? `https://api.ezfrontend.com${product.thumbnail?.url}`
    : "https://via.placeholder.com/444";
  return (
    <Box>
      <img src={productThumbnail} alt={product.name} width="100%" />
    </Box>
  );
}

export default ProductThumbnail;
