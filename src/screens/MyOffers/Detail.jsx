import React from "react";
import { Link } from "react-router-dom";
import { t, currentLangName } from "../../services/languageManager";
const Item = props => {
  const { item } = props;
  function handleViewOfferClicked() {}

  function handleBackClicked() {
    if (props.onBackClicked) {
      props.onBackClicked();
    }
  }
  function handleEditClicked() {
    if (props.onEditClicked) {
      props.onEditClicked(item);
    }
  }

  return (
    <div className="myOffers__detail">
      <div className="myOffers__detail__header" onClick={handleBackClicked}>
        <i className="icon-arrow-left2" />
        <span>{t("OFFER_DETAIL_BACK")}</span>
      </div>
      <div className="myOfferItem animated fadeIn">
        <div className="myOfferItem__header">
          <span className="myOfferItem__title">
            {item.opportunityData && item.opportunityData.RecordType}
          </span>
          <span>{"<value>"}</span>
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
            <span>{"<value>"}</span>
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
          <div className="myOfferItem__bodyRow">
            <span>{t("Title")}</span>
            <span>{"Description"}</span>
          </div>
          <div className="myOfferItem__bodyRow">
            <span>{t("Title")}</span>
            <span>{"Description"}</span>
          </div>
          <div className="myOfferItem__bodyRow">
            <span>{t("Title")}</span>
            <span>
              {
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
              }
            </span>
          </div>
        </div>
        <div className="myOfferItem__footer">
          <div className="myOfferItem__footer__left" />
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
    </div>
  );
};
export default Item;
