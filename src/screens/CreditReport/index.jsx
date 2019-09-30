import React, { useEffect } from "react";
import { connect } from "react-redux";
//
import { viewCreditReport } from "services/redux/application/creditReport/actions";
import "./styles.scss";
import SquareSpinner from "components/SquareSpinner";
import Wrong from "components/Commons/ErrorsComponent/Wrong";
import { t } from "services/languageManager";

const CreditReport = props => {
  useEffect(() => {
    if (props.viewCreditReport) {
      const orgNumber = props.history.match.orgNumber;
      props.viewCreditReport(orgNumber);
    }
  }, []);
  return (
    <div className="creditReport">
      <div className="creditReport_body">
        <div className="products">
          {props.loading ? (
            <div className="page-loading">
              <SquareSpinner />
              <h2>{t("CREDIT_REPORT_LOADING_TEXT")}</h2>
            </div>
          ) : props.error ? (
            <div className="page-list-error animated fadeIn">
              <Wrong />
              <h2>{props.error && props.error.title}</h2>
              <span>{props.error && props.error.message}</span>
            </div>
          ) : (
            props.data && (
              <div className="creditReport__body">
                <div className="creditReport__header">
                  <div className="left">
                    <img
                      src={require("./../../assets/creditsafe_logo.png")}
                      alt=""
                    />
                  </div>
                  <div className="center">
                    <span className="headerRow">
                      <span>{t("CREDIT_REPORT_COMPANY_NAME")}:</span>
                      <span>
                        {" "}
                        {props.data.GETDATA_RESPONSE &&
                          props.data.GETDATA_RESPONSE[0] &&
                          props.data.GETDATA_RESPONSE[0].NAME}
                      </span>
                    </span>
                    <span className="headerRow">
                      <span>{t("CREDIT_REPORT_COMPANY_NUMBER")}:</span>
                      <span>
                        {props.data.GETDATA_RESPONSE &&
                          props.data.GETDATA_RESPONSE[0] &&
                          props.data.GETDATA_RESPONSE[0].ORGNR}
                      </span>
                    </span>
                  </div>
                  <div className="right">
                    <span className="headerRow">
                      <span>{t("CREDIT_REPORT_TODAYS_DATE")}:</span>
                      <span>-----</span>
                    </span>
                  </div>
                </div>

                <div className="creditReport__box firstBox">
                  <div className="row">
                    <div className="row__left">
                      <span className="key">
                        {t("CREDIT_REPORT_COMPANY_NAME")}
                      </span>
                      <span className="value">
                        {props.data.GETDATA_RESPONSE &&
                          props.data.GETDATA_RESPONSE[0] &&
                          props.data.GETDATA_RESPONSE[0].NAME}
                      </span>
                    </div>
                    <div className="row__right">
                      <span className="key">
                        {t("CREDIT_REPORT_LEGAL_FORM")}
                      </span>
                      <span className="value">
                        {props.data.GETDATA_RESPONSE &&
                          props.data.GETDATA_RESPONSE[0] &&
                          props.data.GETDATA_RESPONSE[0].COMPANY_TYPE}{" "}
                        {props.data.GETDATA_RESPONSE &&
                          props.data.GETDATA_RESPONSE[0] &&
                          props.data.GETDATA_RESPONSE[0].COMPANY_TYPE_TEXT}
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="row__left">
                      <span className="key">
                        {t("CREDIT_REPORT_COMPANY_NUMBER")}
                      </span>
                      <span className="value">
                        {props.data.GETDATA_RESPONSE &&
                          props.data.GETDATA_RESPONSE[0] &&
                          props.data.GETDATA_RESPONSE[0].ORGNR}
                      </span>
                    </div>
                    <div className="row__right">
                      <span className="key">
                        {t("CREDIT_REPORT_SHARE_CAPITAL")}
                      </span>
                      <span className="value">
                        {props.data.GETDATA_RESPONSE &&
                          props.data.GETDATA_RESPONSE[0] &&
                          props.data.GETDATA_RESPONSE[0].SHARE_CAPITAL}
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="row__left">
                      <span className="key">
                        {t("CREDIT_REPORT_SAFE_NUMBER")}
                      </span>
                      <span className="value">
                        {props.data.GETDATA_RESPONSE &&
                          props.data.GETDATA_RESPONSE[0] &&
                          props.data.GETDATA_RESPONSE[0].SAFE_NUMBER}
                      </span>
                    </div>
                    <div className="row__right">
                      <span className="key">
                        {t("CREDIT_REPORT_REGISTRATION_DATE")}
                      </span>
                      <span className="value">-----</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="row__left">
                      <span className="key">
                        {t("CREDIT_REPORT_VAT_NUMBER")}
                      </span>
                      <span className="value">Ponture AB</span>
                    </div>
                    <div className="row__right">
                      <span className="key">
                        {t("CREDIT_REPORT_EMAIL_ADDRESS")}
                      </span>
                      <span className="value">
                        {props.data.GETDATA_RESPONSE &&
                          props.data.GETDATA_RESPONSE[0] &&
                          props.data.GETDATA_RESPONSE[0].EMAIL_ADRESS}
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="row__left">
                      <span className="key">{t("CREDIT_REPORT_ADDRESS")}</span>
                      <span className="value">
                        {props.data.GETDATA_RESPONSE &&
                          props.data.GETDATA_RESPONSE[0] &&
                          props.data.GETDATA_RESPONSE[0].ADDRESS}
                      </span>
                    </div>
                    <div className="row__right">
                      <span className="key">
                        {t("CREDIT_REPORT_WEB_ADDRESS")}
                      </span>
                      <span className="value">
                        {props.data.GETDATA_RESPONSE &&
                          props.data.GETDATA_RESPONSE[0] &&
                          props.data.GETDATA_RESPONSE[0].WWW_ADRESS}
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="row__left">
                      <span className="key">{t("CREDIT_REPORT_CITY")}</span>
                      <span className="value">
                        {props.data.GETDATA_RESPONSE &&
                          props.data.GETDATA_RESPONSE[0] &&
                          props.data.GETDATA_RESPONSE[0].TOWN}
                      </span>
                    </div>
                    <div className="row__right">
                      <span className="key">
                        {t("CREDIT_REPORT_TURN_OVER")}
                      </span>
                      <span className="value">
                        {props.data.GETDATA_RESPONSE &&
                          props.data.GETDATA_RESPONSE[0] &&
                          props.data.GETDATA_RESPONSE[0].REVENUE}
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="row__left">
                      <span className="key">
                        {t("CREDIT_REPORT_REGISTERED_COUNTRY")}
                      </span>
                      <span className="value">-----</span>
                    </div>
                    <div className="row__right">
                      <span className="key">
                        {t("CREDIT_REPORT_NUMBER_OF_EMPLOYEES")}
                      </span>
                      <span className="value">
                        {props.data.GETDATA_RESPONSE &&
                          props.data.GETDATA_RESPONSE[0] &&
                          props.data.GETDATA_RESPONSE[0].NR_EMPLOYEES}
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="row__left">
                      <span className="key">
                        {t("CREDIT_REPORT_REGISTERED_MUNICIPAL")}
                      </span>
                      <span className="value">-----</span>
                    </div>
                    <div className="row__right">
                      <span className="key">
                        {t("CREDIT_REPORT_NUMBER_OF_GROUP_CMP")}
                      </span>
                      <span className="value">-----</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="row__left">
                      <span className="key">{t("CREDIT_REPORT_PHONE")}</span>
                      <span className="value">
                        {props.data.GETDATA_RESPONSE &&
                          props.data.GETDATA_RESPONSE[0] &&
                          props.data.GETDATA_RESPONSE[0].TELEPHONE}
                      </span>
                    </div>
                    <div className="row__right">
                      <span className="key">{t("CREDIT_REPORT_UNITS")}</span>
                      <span className="value">
                        {props.data.GETDATA_RESPONSE &&
                          props.data.GETDATA_RESPONSE[0] &&
                          props.data.GETDATA_RESPONSE[0].UNIT_NR}
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="row__left">
                      <span className="key">{t("CREDIT_REPORT_FAX")}</span>
                      <span className="value">
                        {props.data.GETDATA_RESPONSE &&
                          props.data.GETDATA_RESPONSE[0] &&
                          props.data.GETDATA_RESPONSE[0].FAXNR}
                      </span>
                    </div>
                    <div className="row__right">
                      <span className="key">{t("CREDIT_REPORT_STATUS")}</span>
                      <span className="value">
                        {props.data.GETDATA_RESPONSE &&
                          props.data.GETDATA_RESPONSE[0] &&
                          props.data.GETDATA_RESPONSE[0].COMPANY_STATUS}
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="row__left">
                      <span className="key">
                        {t("CREDIT_REPORT_COMMERCIAL_BLOCK")}
                      </span>
                      <span className="value">
                        {props.data.GETDATA_RESPONSE &&
                          props.data.GETDATA_RESPONSE[0] &&
                          props.data.GETDATA_RESPONSE[0].COMMERCIAL_BLOCK}
                      </span>
                    </div>
                    <div className="row__right" />
                  </div>
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">
                    Cases currently pending at Bolagsverket
                  </div>
                  <div className="creditReport__box1__body" />
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">
                    Rating & Limit
                  </div>
                  <div className="creditReport__box1__body" />
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">
                    Debt balance at the Swedish Enforcement Authority
                  </div>
                  <div className="creditReport__box1__body" />
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">
                    Record of non-payment
                  </div>
                  <div className="creditReport__box1__body" />
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">
                    Latest record
                  </div>
                  <div className="creditReport__box1__body" />
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">
                    Payment information summery
                  </div>
                  <div className="creditReport__box1__body" />
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">Group</div>
                  <div className="creditReport__box1__body" />
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">
                    Media information
                  </div>
                  <div className="creditReport__box1__body" />
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">
                    Annual & Part year accounts
                  </div>
                  <div className="creditReport__box1__body" />
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">
                    Annual Accounts
                  </div>
                  <div className="creditReport__box1__body" />
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">Key ratios</div>
                  <div className="creditReport__box1__body" />
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">
                    Other information
                  </div>
                  <div className="creditReport__box1__body" />
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">Tax</div>
                  <div className="creditReport__box1__body" />
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">PAYE</div>
                  <div className="creditReport__box1__body" />
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">
                    Status History
                  </div>
                  <div className="creditReport__box1__body" />
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">Industry</div>
                  <div className="creditReport__box1__body" />
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">Activity</div>
                  <div className="creditReport__box1__body" />
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">
                    Rating & Limit
                  </div>
                  <div className="creditReport__box1__body" />
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">
                    Rating History
                  </div>
                  <div className="creditReport__box1__body" />
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">
                    Rating Description
                  </div>
                  <div className="creditReport__box1__body" />
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">
                    Payment Information summery
                  </div>
                  <div className="creditReport__box1__body" />
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">
                    Trade Payment Information
                  </div>
                  <div className="creditReport__box1__body" />
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">
                    Profit & Loss for year (KSEK)
                  </div>
                  <div className="creditReport__box1__body" />
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">
                    Balance Sheet (KSEK)
                  </div>
                  <div className="creditReport__box1__body">
                    {props.data.ACCOUNT_BALANCE_SHEET && (
                      <>
                        <table>
                          <thead>
                            <tr>
                              <th>ASSETS</th>
                              <th>2018-12</th>
                              <th>2017-12</th>
                              <th>2016-12</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Subscribed capital unpaid</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                          </tbody>
                        </table>
                        <table>
                          <thead>
                            <tr>
                              <th>FIXED ASSETS</th>
                              <th />
                              <th />
                              <th />
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                Capitalized expenditure for research and
                                development
                              </td>
                              <td>267</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                          </tbody>
                        </table>
                      </>
                    )}
                  </div>
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">Key Ratios</div>
                  <div className="creditReport__box1__body" />
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">
                    Payment remarks / current debt
                  </div>
                  <div className="creditReport__box1__body" />
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">
                    Representative check -
                  </div>
                  <div className="creditReport__box1__body" />
                </div>
                <h3>Board History</h3>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">Directors</div>
                  <div className="creditReport__box1__body">
                    {props.data.DIRECTORS && (
                      <table>
                        <thead>
                          <tr>
                            <th>NAME</th>
                            <th>FUNCTION</th>
                            <th>SSN</th>
                            <th>START DATE</th>
                            <th>END DATE</th>
                            <th>COMPNAY ENGAGEMENT</th>
                          </tr>
                        </thead>
                        <tbody>
                          {props.data.DIRECTORS.map(director => {
                            return (
                              <tr>
                                <td>{director.NAME}</td>
                                <td>{director.FUNCTION}</td>
                                <td>{director.SOCSECURITYNR}</td>
                                <td>{director.APPOINTMENTDATE}</td>
                                <td>{director.EXITINGDATE}</td>
                                <td>{""}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">
                    Other Positions
                  </div>
                  <div className="creditReport__box1__body" />
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">Auditors</div>
                  <div className="creditReport__box1__body" />
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">
                    Status History
                  </div>
                  <div className="creditReport__box1__body" />
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">
                    Event History
                  </div>
                  <div className="creditReport__box1__body" />
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">
                    Closed cases without registration
                  </div>
                  <div className="creditReport__box1__body" />
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">
                    Closed cases without registration
                  </div>
                  <div className="creditReport__box1__body" />
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">Certificates</div>
                  <div className="creditReport__box1__body" />
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">Units</div>
                  <div className="creditReport__box1__body" />
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">
                    Alcohol permits
                  </div>
                  <div className="creditReport__box1__body" />
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">Vehicles</div>
                  <div className="creditReport__box1__body" />
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">
                    Registered Secondary Business Name and Business Name in
                    Translation
                  </div>
                  <div className="creditReport__box1__body" />
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">
                    Deregistered Secondary Business Name and Business Name in
                    Translation
                  </div>
                  <div className="creditReport__box1__body" />
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">
                    Real estate overview
                  </div>
                  <div className="creditReport__box1__body" />
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">Summary</div>
                  <div className="creditReport__box1__body" />
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">Summary</div>
                  <div className="creditReport__box1__body" />
                </div>
                <div className="creditReport__box1">
                  <div className="creditReport__box1__header">
                    Company mortgage register
                  </div>
                  <div className="creditReport__box1__body" />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    loading: state.application
      ? state.application.creditReport
        ? state.application.creditReport.loading
        : null
      : null,
    data: state.application
      ? state.application.creditReport
        ? state.application.creditReport.data
        : null
      : null,
    error: state.application
      ? state.application.creditReport
        ? state.application.creditReport.error
        : null
      : null
  };
};

const mapDispatchToProps = {
  viewCreditReport
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreditReport);
