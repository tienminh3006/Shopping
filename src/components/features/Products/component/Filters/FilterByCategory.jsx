import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import categoryApi from "../../../../../api/categoryApi";

FilterByCategory.propTypes = {};
const useStyle = makeStyles((theme) => ({
  root: {
    paddingTop: "15px",
  },
  menu: {
    listStyle: "none",
    "&> li": {
      margin: "5px",
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
    <Box className={classes.root}>
      <Typography variant="subtitle2">Danh mục sản phẩm</Typography>
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
