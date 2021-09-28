import React from "react";
import PropTypes from "prop-types";
import RegisterForm from "../RegisterForm";
import { useDispatch } from "react-redux";
import { register } from "../../userSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";

// import { showToast } from "some-toast-library";

Register.propTypes = {};

function Register(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const onHandleSubmit = async (value) => {
    const { closeDialog } = props;
    try {
      //set username = email
      value.username = value.email;
      const action = register(value);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);
      console.log("success", `Fetched ${resultAction}`);
      if (closeDialog) {
        closeDialog();
      }
      console.log(enqueueSnackbar);
      enqueueSnackbar("I love hooks", { variant: "success" });
    } catch (err) {
      console.log(err);
      enqueueSnackbar(err.message, { variant: "error" });
    }
  };
  return (
    <div>
      <RegisterForm onSubmit={onHandleSubmit}></RegisterForm>
    </div>
  );
}

export default Register;
