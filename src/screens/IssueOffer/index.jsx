import React, { useState, useRef, Suspense, lazy } from "react";
//
import { t } from "services/languageManager";
import "./styles.scss";
import Products from "./products";
import ErrorForm from "./forms/errorForm";
import Modal from "components/Modal";
import CircleSpinner from "components/CircleSpinner";

const IssueOffer = props => {
  const formRef = useRef(null);
  const [tab, changeTab] = useState(1);
  const [selectedProduct, setProduct] = useState();
  const [FormComponent, setComponent] = useState(null);

  function handleSelectedProduct(p) {
    setProduct(p);
    changeTab(2);
    const id = "";
    switch (id) {
      case "":
        let O = lazy(() => import("./forms/testProductForm123456789"));
        const B = (
          <O
            ref={formRef}
            product={p}
            app={props.app}
            onBackClicked={handleFormBackClicked}
          />
        );
        setComponent(B);
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
  function handleFormBackClicked() {
    changeTab(1);
  }
  function submit() {}
  return (
    <Modal size="lg" onClose={closeModal}>
      <div className="issueOffer">
        <div className="issueOffer__header">
          <span className="title">
            {tab === 1 ? t("PRODUCTS") : t("OFFER")}
          </span>
          <span className="appName">({props.app && props.app.Name})</span>
          <span
            className="icon-cross issueOffer__closeIcon"
            onClick={closeModal}
          />
        </div>
        <div className="issueOffer__body">
          {tab === 1 ? (
            <Products
              onSelectProduct={handleSelectedProduct}
              selectedProduct={selectedProduct}
            />
          ) : tab === 2 ? (
            <Suspense fallback={<FullBackComponent />}>
              {FormComponent}
            </Suspense>
          ) : null}
        </div>
      </div>
      {tab === 1 && (
        <div className="issueOffer__footer">
          <button className="btn --primary" onClick={closeModal}>
            {t("CLOSE")}
          </button>
        </div>
      )}
    </Modal>
  );
};

export default IssueOffer;

function FullBackComponent(props) {
  return (
    <div className="fallback">
      <CircleSpinner show={true} bgColor="rgb(23, 145, 164)" />
      <h6>Loading form</h6>
    </div>
  );
}
