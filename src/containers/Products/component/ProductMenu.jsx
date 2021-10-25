import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link, NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import ProductDescription from "./ProductDescription";
import useProductDetail from "../../../hooks/useProductDetail";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function ProductMenu({ product }) {
  const { url } = useRouteMatch();
  const [value, setValue] = React.useState(0);
  // const {
  //   params: { productId },
  // } = useRouteMatch();
  // const { product } = useProductDetail(productId);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Mô tả" />
          <Tab label="Item Two" />
          <Tab label="Phản hồi" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ProductDescription product={product}></ProductDescription>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Link to={`${url}/additional`}>additional</Link>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Link to={`${url}/reviews`}>reviews</Link>
      </TabPanel>
    </Box>
    // <Box>
    //   <li>
    //     <Link to={url}>Mo Ta</Link>
    //   </li>
    //   <li>
    //     <Link to={`${url}/additional`}>Thong so ky thuat</Link>
    //   </li>
    //   <li>
    //     <Link to={`${url}/reviews`}>Reviews</Link>
    //   </li>
    // </Box>
  );
}

export default ProductMenu;
