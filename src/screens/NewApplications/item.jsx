import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { t, currentLangName } from "./../../services/languageManager";
import separateNumberByChar from "utils/separateNumberByChar";
//
const Item = props => {
  const { item } = props;
  return (
    <div className="application animated fadeIn">
      <div className="application__header">
        <span className="application__title">{item.RecordType}</span>
        <div className="application__headerinfo">
          <span>{item.opportunityNumber}</span>
          <span>{item.createdAt && item.createdAt.split(" ")[0]}</span>
          <span>
            {item.amortizationPeriod} {t("MONTH")}
          </span>
          <span>{item.amount} Kr</span>
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
          <span>{t("APP_REVENUE")} ----</span>
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
        <div className="application__bodyRow">
          <span>{t("APP_NEED_FOR")}</span>
          <span>
            {item.need &&
              item.need.map((n, index) => {
                if (index === item.need.length - 1) return n.title;
                else return n.title + " , ";
              })}
          </span>
        </div>
      </div>
      <div className="application__footer">
        <Link to={`/${currentLangName}/viewApplication/${item.opportunityID}`}>
          {t("APP_OPEN_APP_LINK")}
          <i className="icon-arrow-right2" />
        </Link>
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
