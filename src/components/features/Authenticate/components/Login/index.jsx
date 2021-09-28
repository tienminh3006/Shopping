import { ContactSupportOutlined } from "@material-ui/icons";
import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../userSlice";
import LoginForm from "../LoginForm";

// import { showToast } from "some-toast-library";

Login.propTypes = {};

function Login(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const onHandleSubmit = async (value) => {
    console.log(value);
    const { closeDialog } = props;
    try {
      //set username = email
      const action = login(value);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);
      // console.log("success", `Fetched ${resultAction}`);
      if (closeDialog) {
        closeDialog();
      }
      enqueueSnackbar("I love hooks", { variant: "success" });
    } catch (err) {
      enqueueSnackbar(err.message, { variant: "error" });
    }
  };
  return (
    <div>
      <LoginForm onSubmit={onHandleSubmit}></LoginForm>
    </div>
  );
}

export default Login;
