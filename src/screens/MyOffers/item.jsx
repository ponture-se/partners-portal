import React from "react";
import { Link } from "react-router-dom";
import { t, currentLangName } from "../../services/languageManager";
const Item = props => {
  const { item } = props;
  function handleViewOfferClicked() {
    if (props.onViewDetailClicked) {
      props.onViewDetailClicked(item);
    }
  }

  return (
    <div className="myOfferItem animated fadeIn">
      <div className="myOfferItem__header">
        <span className="myOfferItem__title">
          {item.RecordType || "Business Loan"}
        </span>
        <span>Offer 330299</span>
      </div>
      <div className="myOfferItem__body">
        <div className="myOfferItem__body__header">
          <span>Ericsson AB (330299-1234)</span>
          <Link to={`/${currentLangName}/viewApplication/12`}>
            <span>{t("APP_OPEN_APP_LINK")}</span>
            <i className="icon-arrow-right2" />
          </Link>
        </div>
        <div className="myOfferItem__bodyRow">
          <span>{t("OFFER_ISSUE_DATE")}</span>
          <span>2019,08,30</span>
        </div>
        <div className="myOfferItem__bodyRow">
          <span>{t("OFFER_AMOUNT")}</span>
          <span>1 500 000.00 Kr</span>
        </div>
        <div className="myOfferItem__bodyRow">
          <span>{t("OFFER_AMORTIZATION_PERIOD")}</span>
          <span>{"2019,08,30 - 2030-08-30"}</span>
        </div>
      </div>
      <div className="myOfferItem__footer">
        <div className="myOfferItem__footer__left">
          <button className="btn --primary" onClick={handleViewOfferClicked}>
            {t("VIEW_OFFER")}
          </button>
        </div>
        <div className="myOfferItem__footer__right">
          <button className="btn --light" onClick={handleViewOfferClicked}>
            <span className="icon-cross" />
            {t("CANCEL")}
          </button>
          <button className="btn --light" onClick={handleViewOfferClicked}>
            <span className="icon-pencil" />
            {t("EDIT")}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Item;
