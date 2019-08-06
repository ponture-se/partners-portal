import React, { useState, useCallback, useEffect, useMemo } from "react";
//
import "./styles.scss";
import Products from "./products";
import ErrorForm from "./forms/errorForm";

const IssueOffer = props => {
  const [tab, changeTab] = useState(1);
  const [selectedProduct, setProduct] = useState();
  const [cmp, setComponent] = useState();

  
  function handleSelectedProduct(p) {
    setProduct(p);
    changeTab(2);
    const id = "";
    switch (id) {
      case "":
        import("./forms/testProductForm123456789")
          .then(form => {
            setComponent(form.default());
          })
          .catch(err => {
            return <ErrorForm />;
          });
        break;
      default:
        break;
    }
  }
  return (
    <div className="issueOffer">
      {tab === 1 ? (
        <Products
          onSelectProduct={handleSelectedProduct}
          selectedProduct={selectedProduct}
        />
      ) : tab === 2 ? (
        <div>{cmp}</div>
      ) : null}
    </div>
  );
};

export default IssueOffer;
