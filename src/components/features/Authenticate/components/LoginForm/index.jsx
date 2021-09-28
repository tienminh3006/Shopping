import React from "react";
import PropTypes from "prop-types";
import InputFields from "../../../../form-controls/inputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Avatar,
  Button,
  makeStyles,
  Typography,
  LinearProgress,
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import PasswordField from "../../../../form-controls/PasswordField";

const schema = yup
  .object()
  .shape({
    //

    identifier: yup.string().required("nhap vao").email("nhap email"),
    password: yup.string().required("please").min(5, "it nhat so ky tu"),
  })
  .required();
LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
  const form = useForm({
    // criteriaMode: "all",
    resolver: yupResolver(schema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });
  const xulySubmit = async (value) => {
    const { onSubmit } = props;
    await onSubmit(value);
    // console.log("Xu ly todoForm" + value);
    // form.reset();
  };
  const { isSubmitting } = form.formState;
  return (
    <div>
      {isSubmitting && <LinearProgress />}
      <Avatar>
        <LockOutlined></LockOutlined>
      </Avatar>
      <Typography component="h3">Sign</Typography>
      <form onSubmit={form.handleSubmit(xulySubmit)}>
        <InputFields name="identifier" label="full Name" form={form} />
        <PasswordField name="password" label="password" form={form} />
        <Button
          type="submit"
          //   disable={isSubmitting}
          fullWidth
          variant="contained"
          color="primary"
        >
          Sign
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
