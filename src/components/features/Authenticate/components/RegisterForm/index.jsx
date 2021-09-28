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
    fullName: yup
      .string()
      .required("Nhap ten vao day")
      .test("string 1", "string 2", (values) => {
        return values.split(" ").length >= 2;
      }),
    email: yup.string().required("nhap vao").email("nhap email"),
    password: yup.string().required("please").min(5, "it nhat so ky tu"),
    repassword: yup
      .string()
      .required("nhap lai pass")
      .oneOf([yup.ref("password")]),
  })
  .required();
RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const form = useForm({
    // criteriaMode: "all",
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      fullName: "",
      email: "",
      password: "",
      repassword: "",
    },
  });
  const xulySubmit = async (value) => {
    const { onSubmit } = props;
    await onSubmit(value);
    console.log("Xu ly todoForm" + value);
    // form.reset();
  };
  const { isSubmitting } = form.formState;
  return (
    <div>
      {isSubmitting && <LinearProgress />}
      <Avatar>
        <LockOutlined></LockOutlined>
      </Avatar>
      <Typography component="h3">Create An Acount</Typography>
      <form onSubmit={form.handleSubmit(xulySubmit)}>
        <InputFields name="fullName" label="full Name" form={form} />
        <InputFields name="email" label="email" form={form} />
        <PasswordField name="password" label="password" form={form} />
        <PasswordField name="repassword" label="repassword" form={form} />
        <Button
          type="submit"
          //   disable={isSubmitting}
          fullWidth
          variant="contained"
          color="primary"
        >
          Create an Account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
