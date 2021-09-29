import React from "react";
import PropTypes from "prop-types";
import InputFields from "../../../../form-controls/inputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Avatar, Button, Typography, LinearProgress } from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import { Box, DialogTitle } from "@mui/material";
import { makeStyles } from "@mui/styles";

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
LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};
const useStyles = makeStyles(() => ({
  root:{

  }
}));
export default function LoginForm(props) {
  const { onSubmit, onClick } = props;
const classes = useStyles()
  const form = useForm({
    // criteriaMode: "all",
    resolver: yupResolver(schema),
    defaultValues: {
      phonenumber: "",
    },
  });
  const xulySubmit = async (value) => {
    await onSubmit(value);

    // console.log(value);
    // form.reset();
  };
  const { isSubmitting } = form.formState;
  return (
    <Box>
      {isSubmitting && <LinearProgress />}
      <div>
        <DialogTitle>Xin chào</DialogTitle>
        <Typography>Đăng nhập hoặc Tạo tài khoản</Typography>
        <form onSubmit={form.handleSubmit(xulySubmit)}>
          <InputFields name="phonenumber" label="Số điện thoại" form={form} />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign
          </Button>
          <button onClick={onClick}>Đăng nhập bằng email</button>
        </form>
        <div>
          <span>Hoặc tiếp tục bằng</span>
          <a href="_blank">
            <img
              src="https://salt.tikicdn.com/ts/upload/3a/22/45/0f04dc6e4ed55fa62dcb305fd337db6c.png"
              alt="facebook"
            />
          </a>
          <a href="_blank">
            <img
              src="https://salt.tikicdn.com/ts/upload/1c/ac/e8/141c68302262747f5988df2aae7eb161.png"
              alt="Google"
            />
          </a>
          <a href="_blank">
            <img
              src="https://salt.tikicdn.com/ts/upload/98/37/86/517cfc05f04466b3118357a1fb4182c8.png"
              alt="Zalo"
            />
          </a>
        </div>
      </div>
      <div>
        <img
          src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png"
          alt="pic"
        />
        <div className="content">
          <h4>Mua sắm tại Tiki</h4>
          <span>Siêu ưu đãi mỗi ngày</span>
        </div>
      </div>
    </Box>
  );
}
