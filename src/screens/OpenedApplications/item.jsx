import React from "react";
import { t } from "services/languageManager";
import separateNumberByChar from "utils/separateNumberByChar";
//
const Item = (props) => {
  const { item } = props;

  function handleViewClicked() {
    if (props.onViewClicked) {
      props.onViewClicked(item);
    }
  }

  function handleRejectApp() {
    if (props.onRejectClicked) props.onRejectClicked(item);
  }
  function handleOfferClicked() {
    if (props.onOfferClicked) {
      props.onOfferClicked(item);
    }
  }

  return (
    <div className="openedApp animated fadeIn">
      <div className="openedApp__header">
        <span className="openedApp__title">{item.RecordType}</span>
        <div className="openedApp__headerinfo">
          <div className="headerItem">
            <span>{t("APP_HEADER_LOAN_AMOUNT")}</span>
            <span>{separateNumberByChar(item.amount, " ")} Kr</span>
          </div>
          <div className="headerItem">
            <span>{t("APP_HEADER_PERIOD")}</span>
            <span>
              {item.amortizationPeriod} {t("MONTH_S")}
            </span>
          </div>
          <div className="headerItem">
            <span>{t("APP_HEADER_DATE")}</span>
            <span>{item.createdAt && item.createdAt.split(" ")[0]}</span>
          </div>
          <div
            className="headerItem"
            title={item.Name + "-" + item.opportunityNumber}
          >
            <span>{t("APP_HEADER_NUMBER")}</span>
            <span>
              {item.Name}&nbsp;- {item.opportunityNumber}
            </span>
          </div>
        </div>
      </div>
      <div className="openedApp__body">
        <div className="openedApp__bodyRow">
          <div className="openedApp__bodyRow__left">
            <span>{t("APP_COMPANY_REGISTERED")}</span>
          </div>
          <div className="openedApp__bodyRow__right">
            <span>{item.CompanyRegistrationDate}</span>
            <span>
              {item.bankVerified ? (
                <i className="icon-checkmark" />
              ) : (
                <i className="icon-cross" style={{ color: "red" }} />
              )}
              <span>{t("APP_BANKID_VERIFIED")}</span>
            </span>
          </div>
        </div>
        <div className="openedApp__bodyRow">
          <div className="openedApp__bodyRow__left">
            <span>{t("APP_REVENUE")}</span>
          </div>
          <div className="openedApp__bodyRow__right">
            <span>
              {item.legalFormCode && item.legalFormCode.toLowerCase() == "ef"
                ? "Not public data because Enskildfirma"
                : separateNumberByChar(item.lastAvailableRevenue, " ") + "Kr"}
            </span>
            <span>
              {item.companyVerified ? (
                <i className="icon-checkmark" />
              ) : (
                <i className="icon-cross" style={{ color: "red" }} />
              )}
              <span>{t("APP_COMPANY_VERIFIED")}</span>
            </span>
          </div>
        </div>
        <div className="openedApp__bodyRow">
          <div className="openedApp__bodyRow__left">
            <span>{t("APP_NEED_FOR")}</span>
          </div>
          <div className="openedApp__bodyRow__right">
            <span>
              {item.need &&
                item.need.map((n, index) => {
                  if (index === item.need.length - 1)
                    return n.title ? n.title : "";
                  else return n.title ? n.title + " , " : "";
                })}
            </span>
          </div>
        </div>
        {item.needDescription && (
          <div className="otherNeeds">{item.needDescription}</div>
        )}
      </div>
      <div className="openedApp__footer">
        {(!item.activeOffers || item.activeOffers === 0) && (
          <button className="btn --warning" onClick={handleRejectApp}>
            {t("REJECT")}
          </button>
        )}

        <div className="moreActions">
          <button className="btn --primary" onClick={handleViewClicked}>
            {t("VIEW_APPLICATION")}
          </button>
          {!item.activeOffers || item.activeOffers === 0 ? (
            <button className="btn --primary" onClick={handleOfferClicked}>
              {t("ISSUE_OFFER")}
            </button>
          ) : (
            <button className="btn --success offerIssued">
              <span className="icon-checkmark"></span>
              {t("OFFER_ISSUED")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
