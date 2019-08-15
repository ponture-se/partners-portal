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
          {item.opportunityData && item.opportunityData.RecordType}
        </span>
        <span>Offer 330299</span>
      </div>
      <div className="myOfferItem__body">
        <div className="myOfferItem__body__header">
          <span>{item.opportunityData && item.opportunityData.Name}</span>
          <Link
            to={`/${currentLangName}/viewApplication/${item.opportunityData &&
              item.opportunityData.opportunityID}`}
          >
            <span>{t("APP_OPEN_APP_LINK")}</span>
            <i className="icon-arrow-right2" />
          </Link>
        </div>
        <div className="myOfferItem__bodyRow">
          <span>{t("OFFER_ISSUE_DATE")}</span>
          <span>------Not-Available---</span>
        </div>
        <div className="myOfferItem__bodyRow">
          <span>{t("OFFER_AMOUNT")}</span>
          <span>----2-props---- Kr</span>
        </div>
        <div className="myOfferItem__bodyRow">
          <span>{t("OFFER_AMORTIZATION_PERIOD")}</span>
          <span>-----Not-available-2-date---</span>
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
