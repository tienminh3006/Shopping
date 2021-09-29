import { FormHelperText, OutlinedInput, TextField } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import { AddAlarm, RemoveCircle } from "@material-ui/icons";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { default as React, useState } from "react";
import { Controller } from "react-hook-form";
import AddCircleIcon from "@mui/icons-material/AddCircle";

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disable: PropTypes.bool,
};
function QuantityField(props) {
  const { form, name, disable, label } = props;
  const { formState, setValue } = form;
  const hasError = formState.errors[name];

  return (
    <FormControl
      error={!!hasError}
      fullWidth
      margin="normal"
      variant="outlined"
    >
      <Controller
        control={form.control}
        name={name}
        render={({ field: { onChange, onBlur, value, name, ref } }) => (
          <Box>
            <IconButton
              onClick={() =>
                setValue(
                  name,
                  Number.parseInt(value) ? Number.parseInt(value) - 1 : 1
                )
              }
            >
              <RemoveCircle />
            </IconButton>
            <OutlinedInput
              id={name}
              type="number"
              // label={label}
              value={value}
              onChange={onChange}
              // endAdornment={<InputAdornment position="end"></InputAdornment>}
              onBlur={onBlur}
            />
            <IconButton
              onClick={() =>
                setValue(
                  name,
                  Number.parseInt(value) ? Number.parseInt(value) + 1 : 1
                )
              }
            >
              <AddCircleIcon />
            </IconButton>
          </Box>
        )}
      />
      <FormHelperText>{formState.errors[name]?.message}</FormHelperText>
    </FormControl>
  );
}
export default QuantityField;
