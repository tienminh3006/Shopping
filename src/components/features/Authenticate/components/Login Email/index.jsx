import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../userSlice";
import LoginFormEmail from "../FormEmail";

LoginEmail.propTypes = {};

function LoginEmail(props) {
  const { closeDialog, onClick, onClickRegiter } = props;

  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const onHandle = async (value) => {
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
  return (
    <div>
      <LoginFormEmail
        onSubmit={onHandle}
        onClick={onClick}
        onClickRegiter={onClickRegiter}
      />
    </div>
  );
}

export default LoginEmail;