import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, TextField } from "@material-ui/core";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./styles.scss";
FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};

function FilterByPrice(props) {
  const { onChange } = props;
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
    <div className={"filer-by-price"}>
      <Typography variant="subtitle2">Lọc theo giá</Typography>

      <div className="filer-by-price__input">
        <TextField
          // value={values.salePrice_gte}
          onChange={handleChange}
          name="salePrice_gte"
          label="Giá thấp nhất"
          // variant="filled"
          style={{ fontSize: "14px" }}
        />
      </div>
      {/* <span>-</span> */}
      <div className="filer-by-price__input">
        <TextField
          name="salePrice_lte"
          // value={values.salePrice_lte}
          onChange={handleChange}
          label="Giá cao nhất"
          style={{ fontSize: "14px" }}
        />
      </div>

      <button className="filer-by-price__btn" onClick={handleSubmit}>
        Áp dụng
      </button>
    </div>
  );
}

export default FilterByPrice;
