import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, TextField } from "@material-ui/core";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

FilterByService.propTypes = {
  onChange: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10px",
    // padding: "20px",
  },
  range: {
    textAlign: "center",
    paddingLeft: "20px",
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    "& > span": {},
  },
  service: {
    fontSize: "5px",
  },
}));
function FilterByService(props) {
  const { onChange, filters = {} } = props;
  const classes = useStyles();
  const handleChange = (e) => {
    // console.log(e.target) ;
    if (!onChange) return;
    const { name, checked } = e.target;
    if (onChange) onChange({ [name]: checked });
  };
  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">Dịch vụ</Typography>
      <FormGroup>
        {/* <FormControlLabel control={<Checkbox defaultChecked />} label="Label" /> */}
        {[
          { value: "isPromotion", label: "Khuyến mại" },
          { value: "isFreeShip", label: "Vận chuyển miễn phí" },
        ].map((service) => (
          <FormControlLabel
            sx={{ "& .MuiSvgIcon-root": { fontSize: 20 } }}
            className={classes.range}
            key={service.value}
            control={<Checkbox checked={Boolean(filters[service.value])} />}
            label={service.label}
            onChange={handleChange}
            name={service.value}
          />
        ))}
      </FormGroup>
    </Box>
    //   <formControlLabelClasses
    //   control={
    //     <Checkbox
    //       checked={Boolean(filters[service.value])}
    //       onChange={handleChange}
    //       name={service}
    //       color="primary"
    //     />
    //   }
    //   label={service.label}
    // />
  );
}

export default FilterByService;
