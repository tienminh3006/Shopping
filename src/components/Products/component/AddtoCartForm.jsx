import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import QuantityField from "../../form-controls/QuantityField";

AddtoCartForm.propTypes = {
  onSubmit: PropTypes.func,
};
function AddtoCartForm({ onSubmit = null }) {
  const schema = yup.object().shape({
    quantity: yup
      .number()
      .min(1, "AddtoCartForm")
      .required("AddtoCartForm")
      .typeError("Nhap 1 so"),
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
    <form onSubmit={form.handleSubmit(xuLySubmit)}>
      {/* <QuantityField name="quantity" label="Quantity" form={form} /> */}
      <QuantityField name="quantity" label="quantity" form={form} />
      <Button
        style={{ width: "250px" }}
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
      >
        Buy
      </Button>
    </form>
  );
}
export default AddtoCartForm;
