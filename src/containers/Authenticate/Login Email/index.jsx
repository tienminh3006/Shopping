import { yupResolver } from "@hookform/resolvers/yup";
import { LinearProgress, Typography } from "@material-ui/core";
import { Box, DialogTitle } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import InputFields from "../../../components/InputField";
import PasswordField from "../../../components/PasswordField";
import { login } from "../../Authenticate/userSlice";
import "./styles.scss";

const schema = yup
  .object()
  .shape({
    email: yup
      .string()
      .required("Vui lòng nhập địa chỉ email của ban")
      .email("Vui lòng nhập địa chỉ email của ban"),
    password: yup
      .string()
      .required("Vui lòng nhập mật khẩu của ban")
      .min(5, "Mật khẩu phải có ít nhất 6 ký tự"),
  })
  .required();

const useStyles = makeStyles(() => ({
  root: {},
  input: {
    border: "none",
    width: "410px",
    fontSize: "18px",
  },
}));
LoginEmail.propTypes = {};

function LoginEmail(props) {
  const { closeDialog, onClick, onClickRegiter } = props;
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const onHandleSubmit = async (value) => {
    console.log(value);
    try {
      //set username = email
      const action = login(value);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);
      if (closeDialog) {
        closeDialog();
      }
      enqueueSnackbar("I love hooks", { variant: "success" });
    } catch (err) {
      enqueueSnackbar(
        "Sản phẩm đang trong quá trình phát triển, vui lòng quay lại sau",
        { variant: "error" }
      );
    }
  };
  const classes = useStyles();
  const form = useForm({
    // criteriaMode: "all",
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  // const xulySubmit = async (value) => {
  //   await onSubmit(value);

  //   // console.log(value);
  //   // form.reset();
  // };
  const { isSubmitting } = form.formState;
  return (
    // <div>
    //   <LoginFormEmail
    //     onSubmit={onHandle}
    //     onClick={onClick}
    //     onClickRegiter={onClickRegiter}
    //   />
    // </div>

    <Box className="login-form">
      {isSubmitting && <LinearProgress />}
      <div className="login-form__left">
        <DialogTitle>Đăng nhập bằng email</DialogTitle>
        <Typography>Nhập email và mật khẩu tài khoản Tiki</Typography>
        <form onSubmit={form.handleSubmit(onHandleSubmit)}>
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
            <button
              className="login-form__options__register"
              onClick={onClickRegiter}
            >
              Tạo tài khoản
            </button>
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

export default LoginEmail;
