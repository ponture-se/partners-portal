import React from "react";
import { Link } from "react-router-dom";
import { t, currentLangName } from "services/languageManager";

const Item = props => {
  const { item } = props;

  function handleViewOfferClicked() {
    if (props.onViewDetailClicked) {
      props.onViewDetailClicked(item);
    }
  }
  function handleEditClicked() {
    if (props.onEditClicked) {
      props.onEditClicked(item);
    }
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
          <Link
            to={`/${currentLangName}/viewApplication/${item.opportunityData &&
              item.opportunityData.opportunityID}`}
          >
            <span>{t("VIEW_APPLICATION")}</span>
            <i className="icon-arrow-right2" />
          </Link>
        </div>
        <div className="myOfferItem__bodyRow">
          <span>{t("OFFER_ISSUE_DATE")}</span>
          <span>{item.issue_date && item.issue_date.split(" ")[0]}</span>
        </div>
        <div className="myOfferItem__bodyRow">
          <span>{t("OFFER_AMOUNT")}</span>
          <span>{item.amount} Kr</span>
        </div>
        <div className="myOfferItem__bodyRow">
          <span>{t("OFFER_AMORTIZATION_PERIOD")}</span>
          <span>
            {"<value>"}&nbsp;{"<value>"}
          </span>
        </div>
      </div>
      <div className="myOfferItem__footer">
        <div className="myOfferItem__footer__left">
          <button className="btn --primary" onClick={handleViewOfferClicked}>
            {t("VIEW_OFFER")}
          </button>
        </div>
        <div className="myOfferItem__footer__right">
          <button className="btn --light">
            <span className="icon-cross" />
            {t("CANCEL")}
          </button>
          <button className="btn --light" onClick={handleEditClicked}>
            <span className="icon-pencil" />
            {t("EDIT")}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Item;
