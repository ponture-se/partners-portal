import React from "react";
import "./styles.scss";
import { t } from "services/languageManager";

const CreditReportItem = props => {
  const { data } = props;
  return (
    <div className="creditReport">
      <div className="creditReport_body">
        <div className="products">
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
                    {data.GETDATA_RESPONSE &&
                      data.GETDATA_RESPONSE[0] &&
                      data.GETDATA_RESPONSE[0].NAME}
                  </span>
                </span>
                <span className="headerRow">
                  <span>{t("CREDIT_REPORT_COMPANY_NUMBER")}:</span>
                  <span>
                    {data.GETDATA_RESPONSE &&
                      data.GETDATA_RESPONSE[0] &&
                      data.GETDATA_RESPONSE[0].ORGNR}
                  </span>
                </span>
              </div>
              <div className="right">
                <span className="headerRow">
                  <span>{t("CREDIT_REPORT_TODAYS_DATE")}:</span>
                  <span>-----</span>
                </span>
              </div>
              {props.isModal && (
                <div
                  className="creditReport__closeIcon"
                  onClick={props.onClose}
                >
                  <span className="icon-cross"></span>
                </div>
              )}
            </div>
            <div className="creditReport__box firstBox">
              <div className="row">
                <div className="row__left">
                  <span className="key">{t("CREDIT_REPORT_COMPANY_NAME")}</span>
                  <span className="value">
                    {data.GETDATA_RESPONSE &&
                      data.GETDATA_RESPONSE[0] &&
                      data.GETDATA_RESPONSE[0].NAME}
                  </span>
                </div>
                <div className="row__right">
                  <span className="key">{t("CREDIT_REPORT_LEGAL_FORM")}</span>
                  <span className="value">
                    {data.GETDATA_RESPONSE &&
                      data.GETDATA_RESPONSE[0] &&
                      data.GETDATA_RESPONSE[0].COMPANY_TYPE}{" "}
                    {data.GETDATA_RESPONSE &&
                      data.GETDATA_RESPONSE[0] &&
                      data.GETDATA_RESPONSE[0].COMPANY_TYPE_TEXT}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="row__left">
                  <span className="key">
                    {t("CREDIT_REPORT_COMPANY_NUMBER")}
                  </span>
                  <span className="value">
                    {data.GETDATA_RESPONSE &&
                      data.GETDATA_RESPONSE[0] &&
                      data.GETDATA_RESPONSE[0].ORGNR}
                  </span>
                </div>
                <div className="row__right">
                  <span className="key">
                    {t("CREDIT_REPORT_SHARE_CAPITAL")}
                  </span>
                  <span className="value">
                    {data.GETDATA_RESPONSE &&
                      data.GETDATA_RESPONSE[0] &&
                      data.GETDATA_RESPONSE[0].SHARE_CAPITAL}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="row__left">
                  <span className="key">{t("CREDIT_REPORT_SAFE_NUMBER")}</span>
                  <span className="value">
                    {data.GETDATA_RESPONSE &&
                      data.GETDATA_RESPONSE[0] &&
                      data.GETDATA_RESPONSE[0].SAFE_NUMBER}
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
                  <span className="key">{t("CREDIT_REPORT_VAT_NUMBER")}</span>
                  <span className="value">Ponture AB</span>
                </div>
                <div className="row__right">
                  <span className="key">
                    {t("CREDIT_REPORT_EMAIL_ADDRESS")}
                  </span>
                  <span className="value">
                    {data.GETDATA_RESPONSE &&
                      data.GETDATA_RESPONSE[0] &&
                      data.GETDATA_RESPONSE[0].EMAIL_ADRESS}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="row__left">
                  <span className="key">{t("CREDIT_REPORT_ADDRESS")}</span>
                  <span className="value">
                    {data.GETDATA_RESPONSE &&
                      data.GETDATA_RESPONSE[0] &&
                      data.GETDATA_RESPONSE[0].ADDRESS}
                  </span>
                </div>
                <div className="row__right">
                  <span className="key">{t("CREDIT_REPORT_WEB_ADDRESS")}</span>
                  <span className="value">
                    {data.GETDATA_RESPONSE &&
                      data.GETDATA_RESPONSE[0] &&
                      data.GETDATA_RESPONSE[0].WWW_ADRESS}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="row__left">
                  <span className="key">{t("CREDIT_REPORT_CITY")}</span>
                  <span className="value">
                    {data.GETDATA_RESPONSE &&
                      data.GETDATA_RESPONSE[0] &&
                      data.GETDATA_RESPONSE[0].TOWN}
                  </span>
                </div>
                <div className="row__right">
                  <span className="key">{t("CREDIT_REPORT_TURN_OVER")}</span>
                  <span className="value">
                    {data.GETDATA_RESPONSE &&
                      data.GETDATA_RESPONSE[0] &&
                      data.GETDATA_RESPONSE[0].REVENUE}
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
                    {data.GETDATA_RESPONSE &&
                      data.GETDATA_RESPONSE[0] &&
                      data.GETDATA_RESPONSE[0].NR_EMPLOYEES}
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
                    {data.GETDATA_RESPONSE &&
                      data.GETDATA_RESPONSE[0] &&
                      data.GETDATA_RESPONSE[0].TELEPHONE}
                  </span>
                </div>
                <div className="row__right">
                  <span className="key">{t("CREDIT_REPORT_UNITS")}</span>
                  <span className="value">
                    {data.GETDATA_RESPONSE &&
                      data.GETDATA_RESPONSE[0] &&
                      data.GETDATA_RESPONSE[0].UNIT_NR}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="row__left">
                  <span className="key">{t("CREDIT_REPORT_FAX")}</span>
                  <span className="value">
                    {data.GETDATA_RESPONSE &&
                      data.GETDATA_RESPONSE[0] &&
                      data.GETDATA_RESPONSE[0].FAXNR}
                  </span>
                </div>
                <div className="row__right">
                  <span className="key">{t("CREDIT_REPORT_STATUS")}</span>
                  <span className="value">
                    {data.GETDATA_RESPONSE &&
                      data.GETDATA_RESPONSE[0] &&
                      data.GETDATA_RESPONSE[0].COMPANY_STATUS}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="row__left">
                  <span className="key">
                    {t("CREDIT_REPORT_COMMERCIAL_BLOCK")}
                  </span>
                  <span className="value">
                    {data.GETDATA_RESPONSE &&
                      data.GETDATA_RESPONSE[0] &&
                      data.GETDATA_RESPONSE[0].COMMERCIAL_BLOCK}
                  </span>
                </div>
                <div className="row__right" />
              </div>
            </div>
            <div className="creditReport__box1">
              <div className="creditReport__box1__header">Rating & Limit</div>
              <div className="creditReport__box1__body">
                <div className="row">
                  <span>Currenting Rating [0-100]</span>
                  <span>2 Not credit worthy</span>
                </div>
              </div>
            </div>
            <div className="creditReport__box1">
              <div className="creditReport__box1__header">
                Debt balance at the Swedish Enforcement Authority (2019-06-28)
              </div>
              <div className="creditReport__box1__body">
                <table>
                  <tbody>
                    <tr>
                      <td>Balance private claims</td>
                      <td>0 SEK</td>
                      <td>Number private claims</td>
                      <td>0 pcs</td>
                    </tr>
                    <tr>
                      <td>Balance public claims</td>
                      <td>10.200 SEK</td>
                      <td>Number public claims</td>
                      <td>8 pcs</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td>TOTAL</td>
                      <td>10.200 SEK</td>
                      <td>TOTAL</td>
                      <td>8 pcs</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <div className="creditReport__box1">
              <div className="creditReport__box1__header">
                Record of non-payment
              </div>
              <div className="creditReport__box1__body">
                <div className="row">
                  <span>Distraint attempts and repossession</span>
                  <span>0 pcs</span>
                </div>
                <div className="row">
                  <span>Public claims</span>
                  <span>9 pcs</span>
                </div>
                <div className="row">
                  <span>Private claims</span>
                  <span>0 pcs</span>
                </div>
                <div className="row">
                  <span>Applications for an order to pay</span>
                  <span>1 pcs</span>
                </div>
                <div className="row">
                  <span>Reclaimed/Revoked applications</span>
                  <span>8 pcs</span>
                </div>
              </div>
            </div>
            <div className="creditReport__box1">
              <div className="creditReport__box1__header">Annual Accounts</div>
              <div className="creditReport__box1__body">
                <table>
                  <thead>
                    <tr>
                      <th>ANNUAL ACCOUNTS (KSEK)</th>
                      <th>1701-1712</th>
                      <th />
                      <th>1605-1612</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Total net operating income</td>
                      <td>1605-1612</td>
                      <td>1605-1612</td>
                      <td>0 SEK</td>
                    </tr>
                    <tr>
                      <td>Operating profit/loss</td>
                      <td>10.200 SEK</td>
                      <td>10.200 SEK</td>
                      <td>10.200 SEK</td>
                    </tr>
                    <tr>
                      <td>Profit/loss after financial items</td>
                      <td>10.200 SEK</td>
                      <td>10.200 SEK</td>
                      <td>10.200 SEK</td>
                    </tr>
                    <tr>
                      <td>Net profit/loss</td>
                      <td>10.200 SEK</td>
                      <td>10.200 SEK</td>
                      <td>10.200 SEK</td>
                    </tr>
                    <tr>
                      <td>Current assets</td>
                      <td>10.200 SEK</td>
                      <td>10.200 SEK</td>
                      <td>10.200 SEK</td>
                    </tr>
                    <tr>
                      <td>Total fixed assets</td>
                      <td>10.200 SEK</td>
                      <td>10.200 SEK</td>
                      <td>10.200 SEK</td>
                    </tr>
                    <tr>
                      <td>Total current liabilities</td>
                      <td>10.200 SEK</td>
                      <td>10.200 SEK</td>
                      <td>10.200 SEK</td>
                    </tr>
                    <tr>
                      <td>Total long-term debts</td>
                      <td>10.200 SEK</td>
                      <td>10.200 SEK</td>
                      <td>10.200 SEK</td>
                    </tr>
                    <tr>
                      <td>Untaxed reserves</td>
                      <td>10.200 SEK</td>
                      <td>10.200 SEK</td>
                      <td>10.200 SEK</td>
                    </tr>
                    <tr>
                      <td>Total equity</td>
                      <td>10.200 SEK</td>
                      <td>10.200 SEK</td>
                      <td>10.200 SEK</td>
                    </tr>
                    <tr>
                      <td>Total equity & liabilities</td>
                      <td>10.200 SEK</td>
                      <td>10.200 SEK</td>
                      <td>10.200 SEK</td>
                    </tr>
                    <tr>
                      <td>Number of employees</td>
                      <td>10.200 SEK</td>
                      <td>10.200 SEK</td>
                      <td>10.200 SEK</td>
                    </tr>
                    <tr>
                      <td>Floating Charge</td>
                      <td>10.200 SEK</td>
                      <td>10.200 SEK</td>
                      <td>10.200 SEK</td>
                    </tr>
                    <tr>
                      <td>Auditor’s recommendation to adopt</td>
                      <td>10.200 SEK</td>
                      <td>10.200 SEK</td>
                      <td>10.200 SEK</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="creditReport__box1">
              <div className="creditReport__box1__header">Key ratios</div>
              <div className="creditReport__box1__body">
                <table>
                  <thead>
                    <tr>
                      <th>KEY RATIOS</th>
                      <th>INDUSTRY</th>
                      <th>1701-1712</th>
                      <th />
                      <th>1605-1612</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Net margin (%)</td>
                      <td>--</td>
                      <td>--</td>
                      <td>-</td>
                      <td>--</td>
                    </tr>
                    <tr>
                      <td>Rate of return (times)</td>
                      <td>--</td>
                      <td>--</td>
                      <td>-</td>
                      <td>--</td>
                    </tr>
                    <tr>
                      <td>Degree of debt (times)</td>
                      <td>--</td>
                      <td>--</td>
                      <td>-</td>
                      <td>--</td>
                    </tr>
                    <tr>
                      <td>Equity Ratio (%)</td>
                      <td>--</td>
                      <td>--</td>
                      <td>-</td>
                      <td>--</td>
                    </tr>
                    <tr>
                      <td>Consolidation (%)</td>
                      <td>--</td>
                      <td>--</td>
                      <td>-</td>
                      <td>--</td>
                    </tr>
                    <tr>
                      <td>Current Ratio (%)</td>
                      <td>--</td>
                      <td>--</td>
                      <td>-</td>
                      <td>--</td>
                    </tr>
                    <tr>
                      <td>Risk buffer (%)</td>
                      <td>--</td>
                      <td>--</td>
                      <td>-</td>
                      <td>--</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="creditReport__box1">
              <div className="creditReport__box1__header">Tax</div>
              <div className="creditReport__box1__body">
                <table>
                  <tbody>
                    <tr>
                      <td>Registered for VAT</td>
                      <td>Yes, since 2016-06</td>
                      <td>Tax registration number</td>
                      <td>SE559063583401</td>
                    </tr>
                    <tr>
                      <td>Registered for F-tax</td>
                      <td>Yes, since 2016-06</td>
                      <td>Registered for payroll tax</td>
                      <td>Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="creditReport__box1">
              <div className="creditReport__box1__header">Industry</div>
              <div className="creditReport__box1__body">
                <div className="row">
                  <span>Industry</span>
                  <span>
                    SN46170 Agents involved in the sale of food, beverages and
                    tobacco
                  </span>
                </div>
                <div className="row">
                  <span>Secondary Industry</span>
                  <span>
                    49410 Freight transport by road
                    <br />
                    46380 Wholesale of other food, including fish, crustaceans
                    and molluscs <br />
                    52100 Warehousing and storage <br />
                    47911 Non-specialised retail sale via mail order houses or
                    via Internet
                  </span>
                </div>
              </div>
            </div>
            <div className="creditReport__box1">
              <div className="creditReport__box1__header">Activity</div>
              <div className="creditReport__box1__body">
                <div className="row">
                  Bolaget ska bedriva konsultverksamhet vid utveckling och
                  implementering av administrativa data- och informationssystem,
                  konsulttjänster inom logistik, samt bedriva härmed jämförlig
                  verksamhet. Bolaget ska bedriva speditions-, transport- och
                  åkerirörelse samt annan därmed förenlig verksamhet. Att
                  biträda huvudkontoret med försäljning och marknadsföring i
                  samband med dess utveckling av dataprogramvaror för svenska
                  kunder. Bolaget ska bedriva verksamhet avseende import av
                  hantverk ävensom idka därmed förenlig verksamhet. Bolaget
                  skall erbjuda personer att handla mat på internet och genom
                  applikationer från anslutna restauranger och därmed förenlig
                  verksamhet. Bolaget levererar av färdig mat till skolor och
                  serviceinrättningar. Aktiebolagets verksamhet ska vara att
                  bedriva försäljning av varor på internet, såsom kläder,
                  hemelektronik, glas, porslin, husgeråd och presentartiklar,
                  jämte därmed förenlig verksamhet.
                </div>
              </div>
            </div>
            <div className="creditReport__box1">
              <div className="creditReport__box1__header">Auditors</div>
              <div className="creditReport__box1__body">
                <div className="row">
                  No Information
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreditReportItem;

