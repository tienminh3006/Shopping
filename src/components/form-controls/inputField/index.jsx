import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

InputFields.protoTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  lablel: PropTypes.string,
  disable: PropTypes.bool,
};

export default function InputFields(props) {
  const { form, name, disable, label } = props;
  const { formState } = form;
  const hasError = formState.errors[name];
  //   console.log(errors.title.message);
  return (
    // <Box
    //   component="form"
    //   sx={{
    //     "& > :not(style)": { m: 1, width: "25ch" },
    //   }}
    //   noValidate
    //   autoComplete="off"
    // >
    //   <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    //   <TextField id="filled-basic" label="Filled" variant="filled" />
    //   <TextField id="standard-basic" label="Standard" variant="standard" />
    // </Box>
    <Controller
      name={name}
      control={form.control}
      render={({ field: { onChange, onBlur, value, name, ref } }) => (
        <TextField
          value={value}
          onChange={onChange}
          inputRef={ref} // wire up the input ref
          variant="outlined"
          margin="normal"
          //   fullWidth
          name={name}
          label={label}
          disable={disable}
          //   id="filled-error-helper-text"
          //   error={!!hasError}
          //   helperText={errors[name]?.message}
          error={!!hasError}
          helperText={formState.errors[name]?.message}
        ></TextField>
      )}
    ></Controller>
  );
}
