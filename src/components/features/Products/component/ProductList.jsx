import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, Skeleton } from "@mui/material";
import Product from "./Product";

ProductList.propTypes = {};
// ProductList.defaultProps = {
//   length: "6",
// };
function ProductList({ data }) {
  // console.log(data);
  return (
    <div>
      <Box>
        <Grid container>
          {data.map((product, index) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Box padding={1}>
                <Product product={product}></Product>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default ProductList;
