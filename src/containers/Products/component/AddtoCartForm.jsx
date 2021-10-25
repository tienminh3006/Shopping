import { yupResolver } from "@hookform/resolvers/yup";
import { Button, InputLabel } from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import QuantityField from "../../../components/QuantityField";

AddtoCartForm.propTypes = {
  onSubmit: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
  root: { margin: "30px" },
  // btn: {  },
}));
function AddtoCartForm({ onSubmit = null }) {
  const classes = useStyles();
  const schema = yup.object().shape({
    quantity: yup
      .number()
      .min(1, "Số lượng phải lớn hơn 1")
      .required("Vui lòng nhập số lượng")
      .typeError("Vui lòng nhập số lượng"),
  });
  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(schema),
  });
  // console.log(form);
  const xuLySubmit = async (values) => {
    if (onSubmit) {
      await onSubmit(values);
    }
  };
  return (
    <div className={classes.root}>
      <form onSubmit={form.handleSubmit(xuLySubmit)}>
        {/* <QuantityField name="quantity" label="Quantity" form={form} /> */}
        <InputLabel
          style={{ marginLeft: "24px", color: "black" }}
          htmlFor={"Số lượng"}
        >
          {"Số lượng"}
        </InputLabel>
        <QuantityField name="quantity" label="quantity" form={form} />
        <Button
          style={{ width: "250px", marginLeft: "24px" }}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Buy
        </Button>
      </form>
    </div>
  );
}
export default AddtoCartForm;
