import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
//
import { t } from "services/languageManager";
import Modal from "components/Modal";
import "./styles.scss";
import SquareSpinner from "components/SquareSpinner";
import CircleSpinner from "components/CircleSpinner";
import CreditReportModal from "./../CreditReport";
import IssueOfferModal from "./../IssueOffer";
import { Wrong } from "components/Commons/ErrorsComponent";
import separateNumberByChar from "utils/separateNumberByChar";
import { getApplicationById, rejectApp } from "api/main-api";

const ViewApplication = props => {
  let didCancel = false;
  const [spinner, toggleSpinner] = useState(true);
  const [rejectSpinner, toggleRejectSpinner] = useState();
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [creditReportVisibility, toggleCreditReport] = useState();
  const [issueOfferVisibility, toggleIssueOffer] = useState();

  useEffect(() => {
    const id = props.oppId;
    if (!id) {
      toggleSpinner(false);
      setError({
        title: t("INVALID_URL"),
        message: t("UNKNOWN_ERROR_MSG")
      });
    } else {
      getApplicationById()
        .onOk(result => {
          toggleSpinner(false);
          if (!didCancel) {
            if (result) {
              setData(result);
            } else {
              setError({
                title: t("GET_APP_ERROR_RESULT"),
                message: t("GET_APP_ERROR_RESULT_MSG")
              });
            }
          }
        })
        .onServerError(result => {
          if (!didCancel) {
            toggleSpinner(false);
            setError({
              title: t("INTERNAL_SERVER_ERROR"),
              message: t("INTERNAL_SERVER_ERROR_MSG")
            });
          }
        })
        .onBadRequest(result => {
          if (!didCancel) {
            toggleSpinner(false);
            setError({
              title: t("BAD_REQUEST"),
              message: t("BAD_REQUEST_MSG")
            });
          }
        })
        .unAuthorized(result => {
          if (!didCancel) {
            toggleSpinner(false);
            setError({
              title: t("UNKNOWN_ERROR"),
              message: t("UNKNOWN_ERROR_MSG")
            });
          }
        })
        .notFound(result => {
          if (!didCancel) {
            toggleSpinner(false);
            setError({
              title: t("NOT_FOUND"),
              message: t("NOT_FOUND_MSG")
            });
          }
        })
        .unKnownError(result => {
          if (!didCancel) {
            toggleSpinner(false);
            setError({
              title: t("UNKNOWN_ERROR"),
              message: t("UNKNOWN_ERROR_MSG")
            });
          }
        })
        .onRequestError(result => {
          if (!didCancel) {
            toggleSpinner(false);
            setError({
              title: t("ON_REQUEST_ERROR"),
              message: t("ON_REQUEST_ERROR_MSG")
            });
          }
        })
        .call(id);
    }
    return () => {
      didCancel = true;
    };
  }, []);

  function handleRejectApp() {
    if (!rejectSpinner) {
      toggleRejectSpinner(true);
      rejectApp()
        .onOk(result => {
          if (!didCancel) {
            toggleRejectSpinner(false);
            toast.success(t("APP_DETAIL_REJECT_SUCCESS"));
            props.history.goBack();
          }
        })
        .onServerError(result => {
          if (!didCancel) {
            toggleRejectSpinner(false);
            toast.error(t("INTERNAL_SERVER_ERROR"));
          }
        })
        .onBadRequest(result => {
          if (!didCancel) {
            toggleRejectSpinner(false);
            toast.error(t("BAD_REQUEST"));
          }
        })
        .unAuthorized(result => {
          if (!didCancel) {
            toggleRejectSpinner(false);
            toast.error(t("UNKNOWN_ERROR"));
          }
        })
        .notFound(result => {
          if (!didCancel) {
            toggleRejectSpinner(false);
            toast.error(t("NOT_FOUND"));
          }
        })
        .unKnownError(result => {
          if (!didCancel) {
            toggleRejectSpinner(false);
            toast.error(t("UNKNOWN_ERROR"));
          }
        })
        .onRequestError(result => {
          if (!didCancel) {
            toggleRejectSpinner(false);
            toast.error(t("ON_REQUEST_ERROR"));
          }
        })
        .call(props.match.params.id);
    }
  }
  function handleViewCredit() {
    toggleCreditReport(true);
  }
  function handleOffer() {
    toggleIssueOffer(true);
  }
  function handleCloseCreditReport() {
    toggleCreditReport(false);
  }
  function handleCloseIssueOffer() {
    toggleIssueOffer(false);
  }
  function closeModal() {
    if (props.onClose) {
      props.onClose();
    }
  }
  return (
    <Modal size="viewAppModalSize" onClose={closeModal}>
      <div className="viewApp">
        {spinner ? (
          <div className="page-loading">
            <SquareSpinner />
            <h2>{t("VIEW_APP_LOADING_TEXT")}</h2>
          </div>
        ) : error ? (
          <div className="page-list-error animated fadeIn">
            <Wrong />
            <h2>{error && error.title}</h2>
            <span>{error && error.message}</span>
            <button className="btn --light" onClick={closeModal}>
              {t("CLOSE")}
            </button>
          </div>
        ) : data ? (
          <>
            <div className="viewAppItem animated fadeIn">
              <div className="viewAppItem__header">
                <div className="closeModal" onClick={closeModal}>
                  <span className="icon-cross" />
                </div>
                <span className="viewAppItem__title">
                  {data.opportunityDetails &&
                    data.opportunityDetails.RecordType}
                </span>
                <div className="viewAppItem__headerinfo">
                  <span>
                    {data.opportunityDetails && data.opportunityDetails.Name}
                    &nbsp;-{" "}
                    {data.opportunityDetails &&
                      data.opportunityDetails.opportunityNumber}
                  </span>
                  <span>
                    {data.opportunityDetails &&
                      data.opportunityDetails.createdAt &&
                      data.opportunityDetails.createdAt.split(" ")[0]}
                  </span>
                  <span>
                    {data.opportunityDetails &&
                      data.opportunityDetails.amortizationPeriod}
                  </span>
                  <span>
                    {separateNumberByChar(data.opportunityDetails.amount, " ")}{" "}
                    Kr
                  </span>
                </div>
              </div>
              <div className="viewAppItem__body">
                <div className="viewAppItem__bodyRow">
                  <div className="viewAppItem__bodyRow__left">
                    <span>{t("APP_COMPANY_REGISTERED")}</span>
                  </div>
                  <div className="viewAppItem__bodyRow__right">
                    <span>
                      {data.opportunityDetails &&
                        data.opportunityDetails.CompanyRegistrationDate}
                    </span>
                    <span>
                      {data.opportunityDetails &&
                      data.opportunityDetails.bankVerified ? (
                        <i className="icon-checkmark" />
                      ) : (
                        <i className="icon-cross" style={{ color: "red" }} />
                      )}
                      <span>{t("APP_BANKID_VERIFIED")}</span>
                    </span>
                  </div>
                </div>
                <div className="viewAppItem__bodyRow">
                  <div className="viewAppItem__bodyRow__left">
                    <span>{t("APP_CREDITSAFE_SCRORE")}</span>
                  </div>
                  <div className="viewAppItem__bodyRow__right">
                    <span>
                      {data.opportunityDetails &&
                        data.opportunityDetails.creditSafeScore}
                    </span>
                    <span>
                      {data.opportunityDetails &&
                      data.opportunityDetails.activeCompany ? (
                        <i className="icon-checkmark" />
                      ) : (
                        <i className="icon-cross" style={{ color: "red" }} />
                      )}
                      <span>{t("APP_ACTIVE_COMPANY")}</span>
                    </span>
                  </div>
                </div>
                <div className="viewAppItem__bodyRow">
                  <div className="viewAppItem__bodyRow__left">
                    <span>
                      {t("APP_REVENUE")}{" "}
                      {data.accountDetails && data.accountDetails.financialYear}
                    </span>
                  </div>
                  <div className="viewAppItem__bodyRow__right">
                    <span>
                      {data.accountDetails &&
                        data.accountDetails.revenue &&
                        separateNumberByChar(
                          data.accountDetails.revenue.totalRevenue,
                          " "
                        )}{" "}
                      Kr
                    </span>
                    <span>
                      {data.opportunityDetails &&
                      data.opportunityDetails.companyVerified ? (
                        <i className="icon-checkmark" />
                      ) : (
                        <i className="icon-cross" style={{ color: "red" }} />
                      )}
                      <span>{t("APP_COMPANY_VERIFIED")}</span>
                    </span>
                  </div>
                </div>
                <div className="viewAppItem__bodyRow">
                  <div className="viewAppItem__bodyRow__left">
                    <span>{t("APP_NEED_FOR")}</span>
                  </div>
                  <div className="viewAppItem__bodyRow__right">
                    <span>
                      {data.opportunityDetails &&
                        data.opportunityDetails.need &&
                        data.opportunityDetails.need.map((n, index) => {
                          if (index === data.opportunityDetails.need.length - 1)
                            return n.title;
                          else return n.title + " , ";
                        })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="detail animated fadeIn">
              <div className="detail__header">
                {data.spoStage !== "Offer Issued" && (
                  <button className="btn --warning" onClick={handleRejectApp}>
                    <CircleSpinner show={rejectSpinner} />
                    {!rejectSpinner && t("REJECT")}
                  </button>
                )}
                <button className="btn --primary" onClick={handleViewCredit}>
                  {t("VIEW_CREDIT_REPORT")}
                </button>
                {data.spoStage !== "Offer Issued" && (
                  <button className="btn --primary" onClick={handleOffer}>
                    {t("ISSUE_OFFER")}
                  </button>
                )}
              </div>
              <div className="detail__body">
                <div className="detail__icon">
                  <img src={require("./../../assets/ericsson.png")} alt="" />
                </div>
                <div className="detail__row">
                  <div className="detail__row__item">
                    <span>{t("APP_DETAIL_ORGANIZATION_NUMBER")}:</span>
                    <span>
                      {data.accountDetails && data.accountDetails.orgNumber}
                    </span>
                  </div>
                  <div className="detail__row__item">
                    <span>{t("APP_DETAIL_CEO")}:</span>
                    <span>
                      {data.accountDetails && data.accountDetails.CEO}
                    </span>
                  </div>
                  <div className="detail__row__item">
                    <span>{t("APP_DETAIL_BUSINESS_ACTIVITIES")}:</span>
                    <span>77330 brnhcs...s.dsdsdd</span>
                  </div>
                  <div className="detail__row__item">
                    <span>{t("APP_DETAIL_NUMBER_OF")}:</span>
                    <span>
                      {data.accountDetails &&
                        data.accountDetails.numOfEmployees}
                    </span>
                  </div>
                </div>
                <div className="detail__row">
                  <div className="detail__row__item">
                    <span>{t("APP_DETAIL_REGISTERED_ADDRESS")}:</span>
                    <span>
                      {data.accountDetails &&
                        data.accountDetails.registeredAddress}
                    </span>
                  </div>
                  <div className="detail__row__item">
                    <span>{t("APP_DETAIL_SIGNATARY_POWER")}:</span>
                    <span
                      title={
                        data.accountDetails &&
                        data.accountDetails.signatoryPower
                      }
                    >
                      {data.accountDetails &&
                        data.accountDetails.signatoryPower}
                    </span>
                  </div>
                  <div className="detail__row__item">
                    <span>{t("APP_DETAIL_LEGAL_FORM")}:</span>
                    <span>
                      {data.accountDetails && data.accountDetails.legalForm}
                    </span>
                  </div>
                </div>
                <div className="detail__row">
                  <div className="detail__row__item">
                    <span>{t("APP_DETAIL_REGISTERED_FOR_TAX")}:</span>
                    <span>
                      {data.accountDetails &&
                      data.accountDetails.registeredForTax ? (
                        <i className="icon-checkmark" />
                      ) : (
                        <i className="icon-cross" style={{ color: "red" }} />
                      )}
                      <span>
                        {data.accountDetails &&
                        data.accountDetails.registeredForTax
                          ? t("TRUE")
                          : t("FALSE")}
                      </span>
                    </span>
                  </div>
                  <div className="detail__row__item">
                    <span>{t("APP_DETAIL_REGISTERED_AS_EMPLOYER")}:</span>
                    <span>
                      {data.accountDetails &&
                      data.accountDetails.registeredAsEmployer ? (
                        <i className="icon-checkmark" />
                      ) : (
                        <i className="icon-cross" style={{ color: "red" }} />
                      )}
                      <span>
                        {data.accountDetails &&
                        data.accountDetails.registeredAsEmployer
                          ? t("TRUE")
                          : t("FALSE")}
                      </span>
                    </span>
                  </div>
                  <div className="detail__row__item">
                    <span>{t("APP_DETAIL_REGISTERED_FOR_VAT")}:</span>
                    <span>
                      {data.accountDetails &&
                      data.accountDetails.registeredForVAT ? (
                        <i className="icon-checkmark" />
                      ) : (
                        <i className="icon-cross" style={{ color: "red" }} />
                      )}
                      <span>
                        {data.accountDetails &&
                        data.accountDetails.registeredForVAT
                          ? t("TRUE")
                          : t("FALSE")}
                      </span>
                    </span>
                  </div>
                </div>
                <div className="detail__row">
                  <div className="detail__row__item">
                    <span>{t("APP_DETAIL_BUSINESS_ACTIVITIES")}:</span>
                    <span>Biger Jarlsgatan 57C 113 56 Stockholm</span>
                  </div>
                </div>
                <div className="detail__table">
                  <span>{t("APP_DETAIL_BOARD_MEMBER")}</span>
                  <div className="table">
                    <table>
                      <thead>
                        <tr>
                          <td>{t("APP_DETAIL_BOARD_NAME")}</td>
                          <td>{t("APP_DETAIL_BOARD_P_NUMBER")}</td>
                          <td>{t("APP_DETAIL_BOARD_ROLE")}</td>
                          <td>{t("APP_DETAIL_BOARD_ACCESS")}</td>
                        </tr>
                      </thead>
                      <tbody>
                        {data.accountDetails &&
                          data.accountDetails.BoardMember.map(item => (
                            <tr key={item.personalNum}>
                              <td>{item.firstName}</td>
                              <td>{item.personalNum}</td>
                              <td>{item.role}</td>
                              <td>{item.access}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="detail__finan">
                  {t("APP_DETAIL_FINANCIAL_YEAR")}{" "}
                  {data.accountDetails && data.accountDetails.financialYear}
                </div>
                <div className="detail__finan">
                  {t("APP_DETAIL_LAST_PUBLISHED")}:{" "}
                  {data.accountDetails && data.accountDetails.lastPublished}
                </div>
                <div className="detail__lastBox">
                  <div className="detail__lastBox__left">
                    <div className="lastBoxItem">
                      <div className="lastBoxItem__header">
                        <span>{t("APP_DETAIL_REVENUE")}</span>
                      </div>
                      <div className="lastBoxItem__body">
                        <div className="lastBoxItem__body__row">
                          <span>{t("APP_DETAIL_REVENUE_TOTAL")}</span>
                          <span>
                            {data.accountDetails &&
                              data.accountDetails.revenue &&
                              separateNumberByChar(
                                data.accountDetails.revenue.totalRevenue,
                                " "
                              )}{" "}
                            Kr
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="lastBoxItem">
                      <div className="lastBoxItem__header">
                        <span>{t("APP_DETAIL_ANNUAL_ACCOUNTS")}</span>
                      </div>
                      <div className="lastBoxItem__body">
                        <div className="lastBoxItem__body__row">
                          <span>{t("APP_DETAIL_ANNUAL_SHARE_CAPITAL")}</span>
                          <span>
                            {data.accountDetails &&
                              data.accountDetails.annualAccounts &&
                              separateNumberByChar(
                                data.accountDetails.annualAccounts.shareCapital,
                                " "
                              )}{" "}
                            Kr
                          </span>
                        </div>
                        <div className="lastBoxItem__body__row">
                          <span>{t("APP_DETAIL_ANNUAL_CASH_BANK")}</span>
                          <span>
                            {data.accountDetails &&
                              data.accountDetails.annualAccounts &&
                              separateNumberByChar(
                                data.accountDetails.annualAccounts
                                  .cashAndBankBalance,
                                " "
                              )}{" "}
                            Kr
                          </span>
                        </div>
                        <div className="lastBoxItem__body__row">
                          <span>{t("APP_DETAIL_ANNUAL_TOTAL_ASSETS")}</span>
                          <span>
                            {data.accountDetails &&
                              data.accountDetails.annualAccounts &&
                              separateNumberByChar(
                                data.accountDetails.annualAccounts.totalAssets,
                                " "
                              )}{" "}
                            Kr
                          </span>
                        </div>
                        <div className="lastBoxItem__body__row">
                          <span>{t("APP_DETAIL_ANNUAL_TOTAL_EQUALITY")}</span>
                          <span>
                            {data.accountDetails &&
                              data.accountDetails.annualAccounts &&
                              separateNumberByChar(
                                data.accountDetails.annualAccounts.totalEquity,
                                " "
                              )}{" "}
                            Kr
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="detail__lastBox__right">
                    <div className="lastBoxItem">
                      <div className="lastBoxItem__header">
                        <span>{t("APP_DETAIL_PROFIT_LOSS")}</span>
                      </div>
                      <div className="lastBoxItem__body">
                        <div className="lastBoxItem__body__row">
                          <span>{t("APP_DETAIL_PROFIT_LOSS_NET")}</span>
                          <span>
                            {data.accountDetails &&
                              data.accountDetails.profitLoss &&
                              separateNumberByChar(
                                data.accountDetails.profitLoss.netProfitLoss,
                                " "
                              )}{" "}
                            Kr
                          </span>
                        </div>
                        <div className="lastBoxItem__body__row">
                          <span>{t("APP_DETAIL_PROFIT_LOSS_OPERATION")}</span>
                          <span>
                            {data.accountDetails &&
                              data.accountDetails.profitLoss &&
                              separateNumberByChar(
                                data.accountDetails.profitLoss
                                  .operatingProfitLoss,
                                " "
                              )}{" "}
                            Kr
                          </span>
                        </div>
                        <div className="lastBoxItem__body__row">
                          <span>{t("APP_DETAIL_PROFIT_LOSS_AFTER")}</span>
                          <span>
                            {data.accountDetails &&
                              data.accountDetails.profitLoss &&
                              separateNumberByChar(
                                data.accountDetails.profitLoss
                                  .profitAfterFinancial,
                                " "
                              )}{" "}
                            Kr
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="lastBoxItem">
                      <div className="lastBoxItem__header">
                        <span>{t("APP_DETAIL_KEY_RATIOS")}</span>
                      </div>
                      <div className="lastBoxItem__body">
                        <div className="lastBoxItem__body__row">
                          <span>{t("APP_DETAIL_KEY_NET")}</span>
                          <span>
                            {data.accountDetails &&
                              data.accountDetails.keyRatio &&
                              separateNumberByChar(
                                data.accountDetails.keyRatio.netMargin,
                                " "
                              )}{" "}
                            Kr
                          </span>
                        </div>
                        <div className="lastBoxItem__body__row">
                          <span>{t("APP_DETAIL_KEY_CASH")}</span>
                          <span>
                            {data.accountDetails &&
                              data.accountDetails.keyRatio &&
                              separateNumberByChar(
                                data.accountDetails.keyRatio.cashFlow,
                                " "
                              )}{" "}
                            Kr
                          </span>
                        </div>
                        <div className="lastBoxItem__body__row">
                          <span>{t("APP_DETAIL_KEY_SOLIDITY")}</span>
                          <span>
                            {data.accountDetails &&
                              data.accountDetails.keyRatio &&
                              separateNumberByChar(
                                data.accountDetails.keyRatio.solidity,
                                " "
                              )}{" "}
                            Kr
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
        {creditReportVisibility && (
          <CreditReportModal
            app={data ? data.opportunityDetails : null}
            accountDetails={data ? data.accountDetails : null}
            onClose={handleCloseCreditReport}
          />
        )}
        {issueOfferVisibility && (
          <IssueOfferModal
            app={data ? data.opportunityDetails : null}
            onClose={handleCloseIssueOffer}
          />
        )}
      </div>
    </Modal>
  );
};

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewApplication);
