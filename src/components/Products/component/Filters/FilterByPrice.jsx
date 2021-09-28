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
    flexFlow: "row nowrap",
    alignItems: "center",
    "& > span": {},
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
      <Typography variant="subtitle2">Gia</Typography>
      <Box>
        <TextField
          // value={values.salePrice_gte}
          onChange={handleChange}
          name="salePrice_gte"
          label="Filled"
          variant="filled"
        />
        <span>-</span>
        <TextField
          name="salePrice_lte"
          // value={values.salePrice_lte}
          onChange={handleChange}
        />
      </Box>
      <Button variant="outlined" onClick={handleSubmit} size="small">
        Ap dung
      </Button>
    </Box>
  );
}

export default FilterByPrice;
