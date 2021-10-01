import React, { Component } from "react";
import PropTypes from "prop-types";
import DOMPurify from "dompurify";

ProductDescription.prototypes = { product: PropTypes.object };
function ProductDescription({ product = {} }) {
  const safeDesciption = DOMPurify.sanitize(product.description);
  return (
    <div style={{ backgroundColor: "#fff", padding: "28px" }}>
      <span dangerouslySetInnerHTML={{ __html: safeDesciption }} />
    </div>
  );
}
export default ProductDescription;
