import React from "react";
import { t, currentLangName } from "../../services/languageManager";
const Item = props => {
  const { item } = props;

  function handleViewClicked() {
    if (props.onViewClicked) {
      props.onViewClicked(item);
    }
  }
  return (
    <div className="openedApp animated fadeIn">
      <div className="openedApp__header">
        <span className="openedApp__title">{item.RecordType}</span>
        <div className="openedApp__headerinfo">
          <span>{item.Name}</span>
          <span>{item.createdAt}</span>
          <span>
            {item.amortizationPeriod} {t("MONTH")}
          </span>
          <span>{item.amount} Kr</span>
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
            <span>{t("APP_NEED_FOR")}</span>
          </div>
          <div className="openedApp__bodyRow__right">
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
        </div>
        <div className="openedApp__bodyRow">
          <div className="openedApp__bodyRow__left">
            <span>Revenue 2018</span>
          </div>
          <div className="openedApp__bodyRow__right">
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
        </div>
        <div className="openedApp__bodyRow">
          <div className="openedApp__bodyRow__left">
            <span>{t("APP_CREDITSAFE_SCRORE")}</span>
          </div>
          <div className="openedApp__bodyRow__right">
            <span>{item.creditSafeScore}</span>
          </div>
        </div>
      </div>
      <div className="openedApp__footer">
        <button className="btn --warning">{t("REJECT")}</button>
        <button className="btn --primary" onClick={handleViewClicked}>
          {t("VIEW_APPLICATION")}
        </button>
        <button className="btn --primary">{t("ISSUE_OFFER")}</button>
      </div>
    </div>
  );
};
export default Item;
