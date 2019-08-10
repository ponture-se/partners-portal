import React, { useState, useRef } from "react";
//
import { t } from "services/languageManager";
import "./styles.scss";
import Products from "./products";
import ErrorForm from "./forms/errorForm";
import Modal from "components/Modal";

const IssueOffer = props => {
  const form = useRef(null);
  const [tab, changeTab] = useState(1);
  const [selectedProduct, setProduct] = useState();
  const [FormComponent, setComponent] = useState(null);

  function handleSelectedProduct(p) {
    setProduct(p);
    changeTab(2);
    const id = "";
    switch (id) {
      case "":
        import("./forms/testProductForm123456789")
          .then(f => setComponent(f.default()))
          .catch(err => <ErrorForm />);
        break;
      default:
        break;
    }
  }
  function closeModal() {
    if (props.onClose) {
      props.onClose();
    }
  }
  function backToProducts() {
    changeTab(1);
  }
  function submit() {}
  return (
    <Modal size="large">
      <div className="issueOffer">
        <div className="issueOffer__header">
          <span>{tab === 1 ? t("PRODUCTS") : t("OFFER")}</span>
          <span>({props.app && props.app.Name})</span>
        </div>
        <div className="issueOffer__body">
          {tab === 1 ? (
            <Products
              onSelectProduct={handleSelectedProduct}
              selectedProduct={selectedProduct}
            />
          ) : tab === 2 ? (
            <div>{FormComponent}</div>
          ) : null}
        </div>
      </div>
      {tab === 1 && (
        <div className="issueOffer__footer">
          <button className="btn --primary">{t("CLOSE")}</button>
        </div>
      )}
    </Modal>
  );
};

export default IssueOffer;
