import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import categoryApi from "../../../../api/categoryApi";
import { makeStyles } from "@mui/styles";

FilterByCategory.propTypes = {};
const useStyle = makeStyles((theme) => ({
  menu: {
    "&> li": {
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
}));
function FilterByCategory({ onChange }) {
  const classes = useStyle();

  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const list = await categoryApi.getAll();
        console.log(list);
        setCategoryList(
          list.map((x) => ({
            id: x.id,
            name: x.name,
          }))
        );
      } catch (error) {
        console.log(error, "FilterByCategory");
      }
    })();
  }, []);
  const handCategoryClick = function (category) {
    console.log("FilterBYCategory" + onChange);
    if (onChange) {
      onChange(category.id);
    }
  };
  return (
    <Box>
      <Typography>Danh muc san pham</Typography>
      <ul className={classes.menu}>
        {categoryList.map((category) => (
          <li key={category.id} onClick={() => handCategoryClick(category)}>
            <Typography variant="body2">{category.name}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByCategory;
