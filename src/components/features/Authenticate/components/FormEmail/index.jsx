import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Typography, LinearProgress } from "@material-ui/core";
import { Box, DialogTitle } from "@mui/material";
import "./styles.scss";
import { makeStyles } from "@mui/styles";
import InputFields from "../../../../form-controls/inputField";
import PasswordField from "../../../../form-controls/PasswordField";

const schema = yup
  .object()
  .shape({
    email: yup.string().required("nhap vao").email("nhap email"),
    password: yup.string().required("please").min(5, "it nhat so ky tu"),
  })
  .required();
LoginFormEmail.propTypes = {
  onSubmit: PropTypes.func,
};
const useStyles = makeStyles(() => ({
  root: {},
  input: {
    border: "none",
    width: "410px",
    fontSize: "18px",
  },
}));
export default function LoginFormEmail(props) {
  const classes = useStyles();
  const { onSubmit, onClick } = props;
  console.log(onSubmit, onClick);
  const form = useForm({
    // criteriaMode: "all",
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const xulySubmit = async (value) => {
    await onSubmit(value);

    // console.log(value);
    // form.reset();
  };
  const { isSubmitting } = form.formState;
  return (
    <Box className="login-form">
      {isSubmitting && <LinearProgress />}
      <div className="login-form__left">
        <DialogTitle>Đăng nhập bằng email</DialogTitle>
        <Typography>Nhập email và mật khẩu tài khoản Tiki</Typography>
        <form onSubmit={form.handleSubmit(xulySubmit)}>
          <div className={classes.input}>
            <InputFields name="email" label="Email" form={form} />
            <PasswordField name="password" label="Mật khẩu" form={form} />
          </div>
          <button className="login-form__btn">Đăng nhập</button>
          <button className="login-form__toggle" onClick={onClick}>
            Đăng nhập bằng số điện thoại
          </button>
        </form>
        <div className="login-form__options">
          <a className="login-form__options__forget" href="/">
            Quên mật khẩu?
          </a>
          <div>
            <span>Chưa có tài khoản</span>{" "}
            <a className="login-form__options__link" href="/">
              Tạo tài khoản
            </a>
          </div>
        </div>
      </div>
      <div className="login-form__right">
        <img
          className="login-form__right__img"
          src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png"
          alt="pic"
        />
        <div className="login-form__right__content">
          <h4>Mua sắm tại Tiki</h4>
          <span>Siêu ưu đãi mỗi ngày</span>
        </div>
      </div>
    </Box>
  );
}
