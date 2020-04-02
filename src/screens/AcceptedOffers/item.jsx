import React from "react";
import { t } from "services/languageManager";
import separateNumberByChar from "utils/separateNumberByChar";
//
const Item = props => {
  const { item } = props;

  function handleViewOfferClicked() {
    if (props.onViewOfferClicked) {
      props.onViewOfferClicked(item);
    }
  }
  function viewApplication() {
    if (props.onViewAppClicked) props.onViewAppClicked(item);
  }
  function handleCancelClicked() {
    if (props.onCancelClicked) {
      props.onCancelClicked(item);
    }
  }
  function handleFundedClicked() {
    if (props.handleFundedClicked) {
      props.handleFundedClicked(item);
    }
  }
  return (
    <div className="accOfferItem animated fadeIn">
      <div className="accOfferItem__header">
        <span className="accOfferItem__title">
          {item.opportunityData && item.opportunityData.RecordType}
        </span>
        <span>
          {t("OFFER")}&nbsp;{item.Offer_Number}
        </span>
      </div>
      <div className="accOfferItem__body">
        <div className="left">
          <div className="accOfferItem__body__header">
            <span>{item.opportunityData && item.opportunityData.Name}</span>
            <div onClick={viewApplication}>
              <span>{t("VIEW_APPLICATION")}</span>
              <i className="icon-arrow-right2" />
            </div>
          </div>
          <div className="accOfferItem__bodyRow">
            <span>{t("OFFER_ISSUE_DATE")}</span>
            <span>{item.CreatedDate && item.CreatedDate.split("T")[0]}</span>
          </div>
          <div className="accOfferItem__bodyRow">
            <span>{t("OFFER_AMOUNT")}</span>
            <span>{separateNumberByChar(item.Amount)} Kr</span>
          </div>
          <div className="accOfferItem__bodyRow">
            <span>{t("OFFER_AMORTIZATION_PERIOD")}</span>
            <span>
              {item.opportunityData && item.opportunityData.amortizationPeriod}{" "}
              {t("MONTH_S")}
            </span>
          </div>
        </div>
        <div className="right">
          <span className="title">{t("CONTACT_DETAILS")}</span>
          <div className="contactRow">
            <span>{t("NAME")}</span>
            <span>
              {item.opportunityData &&
                item.opportunityData.contactInfo &&
                item.opportunityData.contactInfo.name}
            </span>
          </div>
          <div className="contactRow">
            <span>{t("PERSONAL_NUMBER")}</span>
            <span>
              {item.opportunityData &&
                item.opportunityData.contactInfo &&
                item.opportunityData.contactInfo.personalNumber}
            </span>
          </div>
          <div className="contactRow">
            <span>{t("TELEPHONE")}</span>
            <span>
              {item.opportunityData &&
                item.opportunityData.contactInfo &&
                item.opportunityData.contactInfo.phone}
            </span>
          </div>
          <div className="contactRow">
            <span>{t("EMAIL")}</span>
            {item.opportunityData &&
              item.opportunityData.contactInfo &&
              item.opportunityData.contactInfo.email && (
                <a href={"mailto:" + item.opportunityData.contactInfo.email}>
                  {item.opportunityData.contactInfo.email}
                </a>
              )}
          </div>
        </div>
      </div>
      <div className="accOfferItem__footer">
        <div className="accOfferItem__footer__left">
          <button className="btn --primary" onClick={handleViewOfferClicked}>
            {t("VIEW_OFFER")}
          </button>
          <button
            style={{ width: "auto", marginLeft: "10px" }}
            className="btn --warning"
            onClick={handleFundedClicked}
          >
            {t("SIGN_LOAN_AS_FUNDED")}
          </button>
        </div>
        <div className="accOfferItem__footer__right">
          <button className="btn --light" onClick={handleCancelClicked}>
            <span className="icon-cross" />
            {t("CANCEL")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
