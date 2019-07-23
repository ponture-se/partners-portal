import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
//
import { t, currentLangName } from "../../services/languageManager";
//
import "./styles.scss";
import SquareSpinner from "../../components/SquareSpinner";
import { Empty, Wrong } from "../../components/Commons/ErrorsComponent";
//
import { getApplicationById } from "./../../api/main-api";

const ViewApplication = props => {
  const [spinner, toggleSpinner] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    let didCancel = false;
    const id = props.match
      ? props.match.params
        ? props.match.params.id
        : null
      : null;
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
          if (result && !didCancel) {
            setData(result);
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
        .call();
    }
    return () => {
      didCancel = true;
    };
  }, []);
  return (
    <div className="viewApp">
      {spinner ? (
        <div className="page-loading">
          <SquareSpinner />
          <h2>{t("VIEW_APP_LOADING_TEXT")}</h2>
        </div>
      ) : error ? (
        <div className="page-list-error animated fadeIn">
          <Wrong />
          <h2>{error.title}</h2>
          <span>{error.message}</span>
        </div>
      ) : (
        <>
          <div className="viewAppItem animated fadeIn">
            <div className="viewAppItem__header">
              <span className="viewAppItem__title">Business Loan</span>
              <div className="viewAppItem__headerinfo">
                <span>Ericsson AB (330299-1234)</span>
                <span>2019,07,12</span>
                <span>24 month</span>
                <span>2 300 000.00 Kr</span>
              </div>
            </div>
            <div className="viewAppItem__body">
              <div className="viewAppItem__bodyRow">
                <div className="viewAppItem__bodyRow__left">
                  <span>Company registered</span>
                </div>
                <div className="viewAppItem__bodyRow__right">
                  <span>2018-05</span>
                  <span>
                    <i className="icon-checkmark" />
                    <span>BankID verified</span>
                  </span>
                </div>
              </div>
              <div className="viewAppItem__bodyRow">
                <div className="viewAppItem__bodyRow__left">
                  <span>Need For</span>
                </div>
                <div className="viewAppItem__bodyRow__right">
                  <span>Renovation Salary</span>
                  <span>
                    <i className="icon-checkmark" />
                    <span>Active Company</span>
                  </span>
                </div>
              </div>
              <div className="viewAppItem__bodyRow">
                <div className="viewAppItem__bodyRow__left">
                  <span>Revenue 2018</span>
                </div>
                <div className="viewAppItem__bodyRow__right">
                  <span>12 000 000.00 Kr</span>
                  <span>
                    <i className="icon-checkmark" />
                    <span>Company verified</span>
                  </span>
                </div>
              </div>
              <div className="viewAppItem__bodyRow">
                <div className="viewAppItem__bodyRow__left">
                  <span>Creditsafe Score</span>
                </div>
                <div className="viewAppItem__bodyRow__right">
                  <span>70</span>
                </div>
              </div>
            </div>
          </div>
          <div className="detail animated fadeIn">
            <div className="detail__header">
              <button className="btn --warning">Reject</button>
              <button className="btn --primary">View Credit Report</button>
              <button className="btn --primary">View Application</button>
              <button className="btn --primary">Issue Offer</button>
            </div>
            <div className="detail__body">
              <div className="detail__icon">
                <img src={require("./../../assets/ericsson.png")} alt="" />
              </div>
              <div className="detail__row">
                <div className="detail__row__item">
                  <span>Organization Number:</span>
                  <span>550519-1234</span>
                </div>
                <div className="detail__row__item">
                  <span>CEO:</span>
                  <span>Erik Ericsson</span>
                </div>
                <div className="detail__row__item">
                  <span>Business Activities:</span>
                  <span>77330 brnhcs...s.dsdsdd</span>
                </div>
                <div className="detail__row__item">
                  <span>Number of:</span>
                  <span>11</span>
                </div>
              </div>
              <div className="detail__row">
                <div className="detail__row__item">
                  <span>Registered Address:</span>
                  <span>Biger Jarlsgatan 57C 113 56 Stockholm</span>
                </div>
                <div className="detail__row__item">
                  <span>Signatary Power:</span>
                  <span>Firman tecknas av styrelsen</span>
                </div>
                <div className="detail__row__item">
                  <span>Legal form:</span>
                  <span>Private aktiebolag</span>
                </div>
              </div>
              <div className="detail__row">
                <div className="detail__row__item">
                  <span>Registered for Tax(f-skatt):</span>
                  <span>
                    <i className="icon-checkmark" />
                    <span>Biger Jarlsgatan 57C 113 56 Stockholm</span>
                  </span>
                </div>
                <div className="detail__row__item">
                  <span>Registered as Employer:</span>
                  <span>
                    <i className="icon-checkmark" />
                    <span>ja(from 2019-06-10)</span>
                  </span>
                </div>
                <div className="detail__row__item">
                  <span>Registered for VAT:</span>
                  <span>
                    <i className="icon-checkmark" />
                    <span>ja(from 2019-06-10)</span>
                  </span>
                </div>
              </div>
              <div className="detail__row">
                <div className="detail__row__item">
                  <span>Business Activities:</span>
                  <span>Biger Jarlsgatan 57C 113 56 Stockholm</span>
                </div>
              </div>
              <div className="detail__table">
                <span>Board of Directors</span>
                <div className="table">
                  <table>
                    <thead>
                      <tr>
                        <td>Name</td>
                        <td>Personal Number</td>
                        <td>Role</td>
                        <td>Access</td>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 1, 1, 1].map(item => (
                        <tr>
                          <td>Saeed Padyab</td>
                          <td>860212-1234</td>
                          <td>Chairman</td>
                          <td>2019-06-12</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="detail__finan">Financials (year 2018)</div>
              <div className="detail__finan">Last published: 2019-01-21</div>
              <div className="detail__lastBox">
                <div className="detail__lastBox__left">
                  <div className="lastBoxItem">
                    <div className="lastBoxItem__header">
                      <span>Revenue</span>
                    </div>
                    <div className="lastBoxItem__body">
                      <div className="lastBoxItem__body__row">
                        <span>Total revenue</span>
                        <span>1 000 000 Kr</span>
                      </div>
                    </div>
                  </div>
                  <div className="lastBoxItem">
                    <div className="lastBoxItem__header">
                      <span>Annual accounts</span>
                    </div>
                    <div className="lastBoxItem__body">
                      <div className="lastBoxItem__body__row">
                        <span>Aktiekapital</span>
                        <span>1 000 000 Kr</span>
                      </div>
                      <div className="lastBoxItem__body__row">
                        <span>Kass och bank</span>
                        <span>1 000 000 Kr</span>
                      </div>
                      <div className="lastBoxItem__body__row">
                        <span>Summa tillganger</span>
                        <span>1 000 000 Kr</span>
                      </div>
                      <div className="lastBoxItem__body__row">
                        <span>Summa eget kapital</span>
                        <span>1 000 000 Kr</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="detail__lastBox__right">
                  <div className="lastBoxItem">
                    <div className="lastBoxItem__header">
                      <span>Profit and Loss</span>
                    </div>
                    <div className="lastBoxItem__body">
                      <div className="lastBoxItem__body__row">
                        <span>Net profit/loss</span>
                        <span>1 000 000 Kr</span>
                      </div>
                      <div className="lastBoxItem__body__row">
                        <span>Operating profit/loss</span>
                        <span>1 000 000 Kr</span>
                      </div>
                      <div className="lastBoxItem__body__row">
                        <span>Profit after financial items</span>
                        <span>1 000 000 Kr</span>
                      </div>
                    </div>
                  </div>
                  <div className="lastBoxItem">
                    <div className="lastBoxItem__header">
                      <span>Key ratios</span>
                    </div>
                    <div className="lastBoxItem__body">
                      <div className="lastBoxItem__body__row">
                        <span>Net margin</span>
                        <span>1 000 000 Kr</span>
                      </div>
                      <div className="lastBoxItem__body__row">
                        <span>Cash flow</span>
                        <span>1 000 000 Kr</span>
                      </div>
                      <div className="lastBoxItem__body__row">
                        <span>Solidity</span>
                        <span>1 000 000 Kr</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
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
