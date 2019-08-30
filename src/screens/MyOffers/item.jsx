import React from "react";
import { connect } from "react-redux";
import { t } from "services/languageManager";
import separateNumberByChar from "utils/separateNumberByChar";
import { _cancelOffer } from "services/redux/offer/myOffers/actions";
//
const Item = props => {
  const { item } = props;

  function handleViewOfferClicked() {
    if (props.onViewOfferClicked) {
      props.onViewOfferClicked(item);
    }
  }
  function handleEditClicked() {
    if (props.onEditClicked) {
      props.onEditClicked(item);
    }
  }
  function handleCancelClicked() {
    if (props._cancelOffer) {
      props._cancelOffer(item);
    }
  }
  function viewApplication() {
    if (props.onViewAppClicked) props.onViewAppClicked(item);
  }

  return (
    <div className="myOfferItem animated fadeIn">
      <div className="myOfferItem__header">
        <span className="myOfferItem__title">
          {item.opportunityData && item.opportunityData.RecordType}
        </span>
        <span>
          {t("OFFER")}&nbsp;{item.offer_number}
        </span>
      </div>
      <div className="myOfferItem__body">
        <div className="myOfferItem__body__header">
          <span>{item.opportunityData && item.opportunityData.Name}</span>
          <div onClick={viewApplication}>
            <span>{t("VIEW_APPLICATION")}</span>
            <i className="icon-arrow-right2" />
          </div>
        </div>
        <div className="myOfferItem__bodyRow">
          <span>{t("OFFER_ISSUE_DATE")}</span>
          <span>{item.issue_date && item.issue_date.split(" ")[0]}</span>
        </div>
        <div className="myOfferItem__bodyRow">
          <span>{t("OFFER_AMOUNT")}</span>
          <span>{separateNumberByChar(item.amount, " ")} Kr</span>
        </div>
        <div className="myOfferItem__bodyRow">
          <span>{t("OFFER_AMORTIZATION_PERIOD")}</span>
          <span>
            {item.opportunityData && item.opportunityData.amortizationPeriod}{" "}
            {t("MONTH_S")}
          </span>
        </div>
      </div>
      <div className="myOfferItem__footer">
        <div className="myOfferItem__footer__left">
          {item.supplierPartnerStage
            ? item.supplierPartnerStage.toLowerCase() !== "offer won" &&
              item.supplierPartnerStage.toLowerCase() !== "offer lost" && (
                <button className="btn --warning" onClick={handleCancelClicked}>
                  <span className="icon-cross" />
                  {t("CANCEL")}
                </button>
              )
            : null}
        </div>
        <div className="myOfferItem__footer__right">
          <button className="btn --primary" onClick={handleViewOfferClicked}>
            {t("VIEW_OFFER")}
          </button>
          {item.supplierPartnerStage
            ? item.supplierPartnerStage.toLowerCase() !== "offer won" &&
              item.supplierPartnerStage.toLowerCase() !== "offer lost" && (
                <button className="btn --light" onClick={handleEditClicked}>
                  <span className="icon-pencil" />
                  {t("EDIT")}
                </button>
              )
            : null}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  _cancelOffer
};

export default connect(
  null,
  mapDispatchToProps
)(Item);
