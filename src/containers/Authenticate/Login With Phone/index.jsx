import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../userSlice";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Typography, LinearProgress } from "@material-ui/core";
import { Box, DialogTitle } from "@mui/material";
import "./styles.scss";
import { makeStyles } from "@mui/styles";
import InputFields from "../../../components/InputField";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const schema = yup
  .object()
  .shape({
    phonenumber: yup
      .string()
      .min(9, "Số điện thoại không đúng định dạng")
      .matches(phoneRegExp, "Số điện thoại không đúng định dạng"),
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
LoginPhone.propTypes = {};

function LoginPhone(props) {
  const { closeDialog, onClick } = props;

  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const onHandleSubmit = async (value) => {
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
      phonenumber: "",
    },
  });

  const { isSubmitting } = form.formState;
  return (
    <div>
      <Box className="login-form">
        {isSubmitting && <LinearProgress />}
        <div className="login-form__left">
          <DialogTitle>Xin chào</DialogTitle>
          <Typography>Đăng nhập hoặc Tạo tài khoản</Typography>
          <form onSubmit={form.handleSubmit(onHandleSubmit)}>
            <div className={classes.input}>
              <InputFields
                fullWidth
                name="phonenumber"
                label="Số điện thoại"
                form={form}
              />
            </div>
            <button className="login-form__btn">Tiếp Tục</button>
            <button className="login-form__toggle" onClick={onClick}>
              Đăng nhập bằng email
            </button>
          </form>
          <div className="login-form__options">
            <p>Hoặc tiếp tục bằng</p>
            <div>
              <a href="_blank">
                <img
                  className="login-form__left__img"
                  src="https://salt.tikicdn.com/ts/upload/3a/22/45/0f04dc6e4ed55fa62dcb305fd337db6c.png"
                  alt="facebook"
                />
              </a>
              <a href="_blank">
                <img
                  className="login-form__left__img"
                  src="https://salt.tikicdn.com/ts/upload/1c/ac/e8/141c68302262747f5988df2aae7eb161.png"
                  alt="Google"
                />
              </a>
              <a href="_blank">
                <img
                  className="login-form__left__img"
                  src="https://salt.tikicdn.com/ts/upload/98/37/86/517cfc05f04466b3118357a1fb4182c8.png"
                  alt="Zalo"
                />
              </a>
            </div>
            <p>
              Bằng việc tiếp tục, bạn đã chấp nhận{" "}
              <a href="_blank" className="login-form__options__link">
                điều khoản sử dụng
              </a>
            </p>
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
    </div>
  );
}

export default LoginPhone;
