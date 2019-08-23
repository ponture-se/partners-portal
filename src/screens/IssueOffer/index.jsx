import React, {
  useState,
  useMemo,
  useEffect,
  useRef,
  Suspense,
  lazy
} from "react";
//
import { t } from "services/languageManager";
import "./styles.scss";
import Products from "./products";
import ErrorForm from "./forms/errorForm";
import Modal from "components/Modal";
import CircleSpinner from "components/CircleSpinner";
import separateNumberByChar from "utils/separateNumberByChar";

const IssueOffer = props => {
  const app = props.app
    ? props.app
    : props.offer
    ? props.offer.opportunityData
    : null;
  const formRef = useRef(null);
  const [tab, changeTab] = useState();
  const [selectedProduct, setProduct] = useState();
  const [FormComponent, setComponent] = useState(null);

  useEffect(() => {
    if (props.updateMode || props.viewMode) {
      changeTab(2);
      importForm();
    } else changeTab(1);
  }, []);
  function handleSelectedProduct(p) {
    setProduct(p);
    changeTab(2);
    importForm(p);
  }
  function importForm(product) {
    const id = "";
    switch (id) {
      case "":
        let O = lazy(() => import("./forms/testProductForm123456789"));
        const B = (
          <O
            product={product}
            app={props.app}
            offer={props.offer}
            updateMode={props.updateMode}
            viewMode={props.viewMode}
            onBackClicked={handleFormBackClicked}
            onSuccess={() => closeModal(true)}
            onCloseModal={closeModal}
          />
        );
        setComponent(B);
        break;
      default:
        break;
    }
  }
  function closeModal(issueType) {
    if (props.onClose) {
      props.onClose(issueType);
    }
  }
  function handleFormBackClicked() {
    changeTab(1);
  }
  return (
    <Modal size="lg" onClose={closeModal}>
      <div className="issueOffer">
        <div className="issueOffer__header">
          <span className="title">
            {tab === 1
              ? t("PRODUCTS")
              : props.updateMode
              ? t("ISSUE_OFFER_HEADER_EDIT_TITLE")
              : props.viewMode
              ? t("ISSUE_OFFER_HEADER_VIEW_TITLE")
              : t("ISSUE_OFFER_HEADER_NEW_TITLE")}
          </span>
          <span className="appName">
            {props.app
              ? props.app.Name
              : props.offer
              ? props.offer.opportunityData
                ? props.offer.opportunityData.Name
                : ""
              : ""}
          </span>
          <span
            className="icon-cross issueOffer__closeIcon"
            onClick={closeModal}
          />
        </div>
        <div className="issueOffer__body">
          <div className="appInfo">
            <div className="appInfo__header">
              <span className="title">{t("ISSUE_FORM_APP_INFO_TITLE")}</span>
              <span className="appName">
                {app && app.Name} {app && `(${app.orgNumber})`}
              </span>
            </div>
            <div className="appInfo__body">
              <div className="row">
                <span>{t("OFFER_AMOUNT")}</span>
                <span>{separateNumberByChar(app.amount, " ")} kr</span>
              </div>
              <div className="row">
                <span>{t("OFFER_AMORTIZATION_PERIOD")}</span>
                <span>
                  {app.amortizationPeriod}{" "}
                  {app.amortizationPeriod && app.amortizationPeriod > 1
                    ? t("MONTHS")
                    : t("MONTH")}
                </span>
              </div>
              <div className="row">
                <span>{t("APPLICATION_DATE")}</span>
                <span>{app.createdAt && app.createdAt.split(" ")[0]}</span>
              </div>
            </div>
          </div>
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
      <h6>{t("LOADING_FORM")}</h6>
    </div>
  );
}
