import React, { useState } from "react";
import { connect } from "react-redux";
import { rejectApplication } from "services/redux/application/singleApp/actions";
import { loadOpenedApps } from "services/redux/application/openedApps/actions";
import { t } from "services/languageManager";
import CircleSpinner from "components/CircleSpinner";
import separateNumberByChar from "utils/separateNumberByChar";
//
const Item = props => {
  const { item } = props;
  const [spinner, toggleSpinner] = useState();

  function handleViewClicked() {
    if (props.onViewClicked) {
      props.onViewClicked(item);
    }
  }

  function handleRejectApp() {
    if (!spinner) {
      if (props.rejectApplication) {
        toggleSpinner(true);
        props.rejectApplication(
          item.opportunityID,
          () => {
            toggleSpinner(false);
            if (props.loadOpenedApps) props.loadOpenedApps();
          },
          () => {
            toggleSpinner(false);
          }
        );
      }
    }
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
          <span>
            {item.Name}&nbsp;- {item.opportunityNumber}
          </span>
          <span>{item.createdAt && item.createdAt.split(" ")[0]}</span>
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
            <span>{t("APP_CREDITSAFE_SCRORE")}</span>
          </div>
          <div className="openedApp__bodyRow__right">
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
        </div>
        <div className="openedApp__bodyRow">
          <div className="openedApp__bodyRow__left">
            <span>{t("APP_REVENUE")} -----</span>
          </div>
          <div className="openedApp__bodyRow__right">
            <span>
              {separateNumberByChar(item.lastAvailableRevenue, " ")} Kr
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
                  if (index === item.need.length - 1) return n.title;
                  else return n.title + " , ";
                })}
            </span>
          </div>
        </div>
      </div>
      <div className="openedApp__footer">
        <button className="btn --warning" onClick={handleRejectApp}>
          <CircleSpinner show={spinner} />
          {!spinner && t("REJECT")}
        </button>
        <button className="btn --primary" onClick={handleViewClicked}>
          {t("VIEW_APPLICATION")}
        </button>
        <button className="btn --primary" onClick={handleOfferClicked}>
          {t("ISSUE_OFFER")}
        </button>
      </div>
    </div>
  );
};
function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = {
  rejectApplication,
  loadOpenedApps
};

export default connect(
  null,
  mapDispatchToProps
)(Item);
