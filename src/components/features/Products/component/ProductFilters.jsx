import { Box } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import FilterByCategory from "./Filters/FilterByCategory";
import FilterByPrice from "./Filters/FilterByPrice";
import FilterByService from "./Filters/FilterByService";

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductFilters(props) {
  const { onChange, filters } = props;
  const handleCategoryChange = function (newCategoryId) {
    console.log(`Product Filter: ${onChange}`);
    if (!onChange) return;
    const newFilters = {
      ...filters,
      "category.id": newCategoryId,
    };
    onChange(newFilters);
  };
  const handlePriceChange = function (values) {
    if (onChange) {
      onChange(values);
    }
  };
  return (
    <div>
      <Box>
        <FilterByCategory onChange={handleCategoryChange}></FilterByCategory>
        <FilterByPrice onChange={handlePriceChange}></FilterByPrice>
        <FilterByService
          filters={filters}
          onChange={handlePriceChange}
        ></FilterByService>
      </Box>
    </div>
  );
}

export default ProductFilters;
