import React from "react";
import { Link } from "react-router-dom";
import { t, currentLangName } from "../../services/languageManager";
const Item = props => {
  const { item } = props;
  return (
    <div className="lostAppsItem animated fadeIn">
      <div className="lostAppsItem__header">
        <span className="lostAppsItem__title">{item.RecordType}</span>
        <div className="lostAppsItem__headerinfo">
          <span>Ericsson AB (330299-1234)</span>
          <span>{item.createdAt}</span>
          <span>
            {item.amortizationPeriod} {t("MONTH")}
          </span>
          <span>{item.amount} Kr</span>
        </div>
      </div>
      <div className="lostAppsItem__body">
        <div className="lostAppsItem__bodyRow">
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
        <div className="lostAppsItem__bodyRow">
          <span>{t("APP_NEED_FOR")}</span>
          <span>Renovation Salary</span>
          <span>
            {item.activeCompany ? (
              <i className="icon-checkmark" />
            ) : (
              <i className="icon-cross" style={{ color: "red" }} />
            )}
            <span>{t("APP_ACTIVE_COMPANY")}</span>
          </span>
        </div>
        <div className="lostAppsItem__bodyRow">
          <span>Revenue 2018</span>
          <span>12 000 000.00 Kr</span>
          <span>
            {item.companyVerified ? (
              <i className="icon-checkmark" />
            ) : (
              <i className="icon-cross" style={{ color: "red" }} />
            )}
            <span>{t("APP_COMPANY_VERIFIED")}</span>
          </span>
        </div>
        <div className="lostAppsItem__bodyRow">
          <span>{t("APP_CREDITSAFE_SCRORE")}</span>
          <span>{item.creditSafeScore}</span>
          <span>
            {/* <i className="icon-checkmark" />
            <span>Company verified</span> */}
          </span>
        </div>
      </div>
      <div className="lostAppsItem__footer">
        <Link to={`/${currentLangName}/viewApplication/12`}>
          {t("APP_OPEN_APP_LINK")}
          <i className="icon-arrow-right2" />
        </Link>
      </div>
    </div>
  );
};
export default Item;
