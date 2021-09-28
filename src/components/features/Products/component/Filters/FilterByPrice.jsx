import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, TextField } from "@material-ui/core";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {},
  range: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    "& > span": {},
  },
  btnSubmit: {
    paddingTop: "20px",
  },
}));

function FilterByPrice(props) {
  const { onChange } = props;
  const classes = useStyles();
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });
  const handleChange = (e) => {
    // console.log(e.target) ;
    const { name, value } = e.target;
    setValues((preValue) => ({ ...preValue, [name]: value }));
  };
  const handleSubmit = () => {
    console.log(values);
    if (onChange) {
      onChange(values);
    }
  };
  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">Lọc theo giá</Typography>
      <Box>
        <TextField
          // value={values.salePrice_gte}
          onChange={handleChange}
          name="salePrice_gte"
          label="Giá thấp nhất"
          // variant="filled"
        />
        {/* <span>-</span> */}
        <TextField
          name="salePrice_lte"
          // value={values.salePrice_lte}
          onChange={handleChange}
          label="Giá cao nhất"
        />
      </Box>
      <Button
        className={classes.btnSubmit}
        variant="outlined"
        onClick={handleSubmit}
        size="small"
      >
        Áp dụng
      </Button>
    </Box>
  );
}

export default FilterByPrice;
