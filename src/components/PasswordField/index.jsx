import { FormHelperText, OutlinedInput, TextField } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import PropTypes from "prop-types";
import { default as React, useState } from "react";
import { Controller } from "react-hook-form";

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disable: PropTypes.bool,
};
function PasswordField(props) {
  const { form, name, disable, label } = props;
  const { formState } = form;
  const hasError = formState.errors[name];
  //   const { formState } = form;
  //   const { errors } = formState;
  //   console.log(form);
  //   const hasError = formState.touched[name] && errors[name];
  const [showPassword, setshowPassword] = useState(false);
  const toggleShowPassword = () => {
    setshowPassword((x) => !x);
  };
  return (
    <FormControl
      error={!!hasError}
      fullWidth
      margin="normal"
      variant="outlined"
    >
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Controller
        control={form.control}
        name={name}
        render={({ field: { onChange, onBlur, value, name, ref } }) => (
          <OutlinedInput
            id={name}
            type={showPassword ? "text" : "password"}
            label={label}
            value={value}
            onChange={onChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={toggleShowPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            onBlur={onBlur}
          />
        )}
        // value={password}
        // onChange={handleChange("password")}
      />
      <FormHelperText>{formState.errors[name]?.message}</FormHelperText>
    </FormControl>
  );
}
export default PasswordField;
