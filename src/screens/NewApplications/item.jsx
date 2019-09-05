import React from "react";
import PropTypes from "prop-types";
import { t } from "./../../services/languageManager";
import separateNumberByChar from "utils/separateNumberByChar";
//
const Item = props => {
  const { item } = props;
  function viewApplication() {
    if (props.onViewAppClicked) props.onViewAppClicked(item);
  }
  function handleRejectApp() {
    if (props.onRejectAppClicked) props.onRejectAppClicked(item);
  }
  return (
    <div className="application animated fadeIn">
      <div className="application__header">
        <span className="application__title">{item.RecordType}</span>
        <div className="application__headerinfo">
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
          <div className="headerItem">
            <span>{t("APP_HEADER_NUMBER")}</span>
            <span>{item.opportunityNumber}</span>
          </div>
        </div>
      </div>
      <div className="application__body">
        <div className="application__bodyRow">
          <span>{t("APP_COMPANY_REGISTERED")}</span>
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
        <div className="application__bodyRow">
          <span>{t("APP_CREDITSAFE_SCRORE")}</span>
          <span>{item.creditSafeScore}</span>
          <span>
            {item.activeCompany ? (
              <i className="icon-checkmark" />
            ) : (
              <i className="icon-cross" style={{ color: "red" }} />
            )}
            <span>{t("APP_ACTIVE_COMPANY")}</span>
          </span>
        </div>
        <div className="application__bodyRow">
          <span>{t("APP_REVENUE")}</span>
          <span>{separateNumberByChar(item.lastAvailableRevenue, " ")} Kr</span>
          <span>
            {item.companyVerified ? (
              <i className="icon-checkmark" />
            ) : (
              <i className="icon-cross" style={{ color: "red" }} />
            )}
            <span>{t("APP_COMPANY_VERIFIED")}</span>
          </span>
        </div>
        <div className="application__bodyRow needsRow">
          <span>{t("APP_NEED_FOR")}</span>
          <span>
            {item.need &&
              item.need.map((n, index) => {
                if (index === item.need.length - 1) return n.title;
                else return n.title + " , ";
              })}
          </span>
        </div>
        {item.needDescription && (
          <div className="otherNeeds">{item.needDescription}</div>
        )}
      </div>
      <div className="application__footer">
        <div className="actions">
          <button className="btn --warning" onClick={handleRejectApp}>
            {t("REJECT")}
          </button>
        </div>
        <span>{t("APP_OPEN_APP_LINK_INFO")}</span>
        <span onClick={viewApplication}>
          {t("APP_OPEN_APP_LINK")}
          <i className="icon-arrow-right2" />
        </span>
      </div>
    </div>
  );
};
export default Item;

Item.propTypes = {
  item: PropTypes.object.isRequired
};
Item.defaultProps = {
  item: {}
};
