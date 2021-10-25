import React from "react";
import PropTypes from "prop-types";
import { Tab, Tabs } from "@mui/material";

ProductSort.propTypes = {
  onchange: PropTypes.func,
};

function ProductSort({ onchange, currentSort }) {
  const handleSortChange = (event, newValue) => {
    if (onchange) onchange(newValue);
    console.log(newValue);
  };
  return (
    <Tabs
      value={currentSort}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleSortChange}
      aria-label="disabled tabs example"
    >
      <Tab label="Giá thấp tới cao" value="salePrice:ASC"></Tab>
      <Tab label="Giá cao tới thấp" value="salePrice:DESC"></Tab>
    </Tabs>
  );
}

export default ProductSort;
