import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, Skeleton } from "@mui/material";

ProductSkeleton.propTypes = {
  length: PropTypes.number,
};
ProductSkeleton.defaultProps = {
  length: 12,
};
function ProductSkeleton(length) {
  return (
    <div>
      <Box>
        <Grid container>
          {Array.from(new Array(length)).map((x, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Box padding={1}>
                <Skeleton variant="rect" width="100%" height={200} />
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default ProductSkeleton;
