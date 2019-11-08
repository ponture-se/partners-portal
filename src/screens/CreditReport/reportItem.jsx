import React from "react";
import "./styles.scss";
import { t } from "services/languageManager";

const CreditReportItem = props => {
  const { data } = props;
  const {
    ACCOUNT_KEY_VALUES: ann,
    ACCOUNT_PROFITLOSS_SHEET: prSheet,
    ACCOUNT_BALANCE_SHEET: bSheet,
    ACCOUNT_NOTES: notes,
    GETDATA_RESPONSE: getDataRes
  } = data;
  const firstYearIndex = ann && ann.length > 0 ? ann.length - 1 : -1;
  const secondYearIndex = ann && ann.length > 1 ? ann.length - 2 : -1;
  const thirdYearIndex = ann && ann.length > 2 ? ann.length - 3 : -1;
  const firstYear =
    ann && ann.length > 0
      ? ann[ann.length - 1].DATE_FROM.split("-")[0] +
        ann[ann.length - 1].DATE_FROM.split("-")[1] +
        "-" +
        ann[ann.length - 1].DATE_TO.split("-")[0] +
        ann[ann.length - 1].DATE_TO.split("-")[1]
      : "-";
  const secondYear =
    ann && ann.length > 1
      ? ann[ann.length - 2].DATE_FROM.split("-")[0] +
        ann[ann.length - 2].DATE_FROM.split("-")[1] +
        "-" +
        ann[ann.length - 2].DATE_TO.split("-")[0] +
        ann[ann.length - 2].DATE_TO.split("-")[1]
      : "-";
  const thirdYear =
    ann && ann.length > 2
      ? ann[ann.length - 3].DATE_FROM.split("-")[0] +
        ann[ann.length - 3].DATE_FROM.split("-")[1] +
        "-" +
        ann[ann.length - 3].DATE_TO
      : "-";
  const annualAcc = {
    totalNetOperatingIncome: {
      percentage:
        firstYearIndex > -1 && secondYearIndex > -1
          ? Math.floor(
              (prSheet[firstYearIndex].PL_NET_OPERATING_INCOME /
                prSheet[secondYearIndex].PL_NET_OPERATING_INCOME) *
                100 -
                100
            ) + " %"
          : "-",
      firstYear:
        firstYearIndex > -1
          ? prSheet[firstYearIndex].PL_NET_OPERATING_INCOME
          : "-",
      secondYear:
        secondYearIndex > -1
          ? prSheet[secondYearIndex].PL_NET_OPERATING_INCOME
          : "-",
      thirdYear:
        thirdYearIndex > -1
          ? prSheet[thirdYearIndex].PL_NET_OPERATING_INCOME
          : "-"
    },
    operatingProfit_loss: {
      firstYear:
        firstYearIndex > -1 ? prSheet[firstYearIndex].PL_OPERATING_RESULT : "-",
      secondYear:
        secondYearIndex > -1
          ? prSheet[secondYearIndex].PL_OPERATING_RESULT
          : "-",
      thirdYear:
        thirdYearIndex > -1 ? prSheet[thirdYearIndex].PL_OPERATING_RESULT : "-"
    },
    profit_lossAfterFinancialItems: {
      firstYear:
        firstYearIndex > -1
          ? prSheet[firstYearIndex].PL_PROF_LOSS_AFTER_FIN_ITEMS
          : "-",
      secondYear:
        secondYearIndex > -1
          ? prSheet[secondYearIndex].PL_PROF_LOSS_AFTER_FIN_ITEMS
          : "-",
      thirdYear:
        thirdYearIndex > -1
          ? prSheet[thirdYearIndex].PL_PROF_LOSS_AFTER_FIN_ITEMS
          : "-"
    },
    netProfit_loss: {
      firstYear:
        firstYearIndex > -1 ? prSheet[firstYearIndex].PL_NET_PROFIT_LOSS : "-",
      secondYear:
        secondYearIndex > -1
          ? prSheet[secondYearIndex].PL_NET_PROFIT_LOSS
          : "-",
      thirdYear:
        thirdYearIndex > -1 ? prSheet[thirdYearIndex].PL_NET_PROFIT_LOSS : "-"
    },
    currentAssets: {
      firstYear:
        firstYearIndex > -1
          ? bSheet[firstYearIndex].BS_TOTAL_TURNOVER_ASSETS
          : "-",
      secondYear:
        secondYearIndex > -1
          ? bSheet[secondYearIndex].BS_TOTAL_TURNOVER_ASSETS
          : "-",
      thirdYear:
        thirdYearIndex > -1
          ? bSheet[thirdYearIndex].BS_TOTAL_TURNOVER_ASSETS
          : "-"
    },
    totalFixedAssets: {
      firstYear:
        firstYearIndex > -1 ? bSheet[firstYearIndex].BS_TOT_FIX_ASSETS : "-",
      secondYear:
        secondYearIndex > -1 ? bSheet[secondYearIndex].BS_TOT_FIX_ASSETS : "-",
      thirdYear:
        thirdYearIndex > -1 ? bSheet[thirdYearIndex].BS_TOT_FIX_ASSETS : "-"
    },
    totalCurrentLiabilities: {
      firstYear:
        firstYearIndex > -1
          ? bSheet[firstYearIndex].BS_TOT_CURRENT_LIABILITIES
          : "-",
      secondYear:
        secondYearIndex > -1
          ? bSheet[secondYearIndex].BS_TOT_CURRENT_LIABILITIES
          : "-",
      thirdYear:
        thirdYearIndex > -1
          ? bSheet[thirdYearIndex].BS_TOT_CURRENT_LIABILITIES
          : "-"
    },
    totalLong_termDebts: {
      firstYear:
        firstYearIndex > -1
          ? bSheet[firstYearIndex].BS_TOT_LONG_TERM_DEBTS
          : "-",
      secondYear:
        secondYearIndex > -1
          ? bSheet[secondYearIndex].BS_TOT_LONG_TERM_DEBTS
          : "-",
      thirdYear:
        thirdYearIndex > -1
          ? bSheet[thirdYearIndex].BS_TOT_LONG_TERM_DEBTS
          : "-"
    },
    untaxedReserves: {
      firstYear:
        firstYearIndex > -1 ? bSheet[firstYearIndex].BS_UNTAXED_RESERVES : "-",
      secondYear:
        secondYearIndex > -1
          ? bSheet[secondYearIndex].BS_UNTAXED_RESERVES
          : "-",
      thirdYear:
        thirdYearIndex > -1 ? bSheet[thirdYearIndex].BS_UNTAXED_RESERVES : "-"
    },
    totalEquity: {
      firstYear:
        firstYearIndex > -1 ? bSheet[firstYearIndex].BS_TOT_EQUITY : "-",
      secondYear:
        secondYearIndex > -1 ? bSheet[secondYearIndex].BS_TOT_EQUITY : "-",
      thirdYear:
        thirdYearIndex > -1 ? bSheet[thirdYearIndex].BS_TOT_EQUITY : "-"
    },
    totalEquity_liabilities: {
      firstYear:
        firstYearIndex > -1
          ? bSheet[firstYearIndex].BS_TOT_EQUITY_AND_LIAB
          : "-",
      secondYear:
        secondYearIndex > -1
          ? bSheet[secondYearIndex].BS_TOT_EQUITY_AND_LIAB
          : "-",
      thirdYear:
        thirdYearIndex > -1
          ? bSheet[thirdYearIndex].BS_TOT_EQUITY_AND_LIAB
          : "-"
    },
    numberEmployees: {
      firstYear:
        firstYearIndex > -1 ? notes[firstYearIndex].N_NO_EMPLOYEES : "-",
      secondYear:
        secondYearIndex > -1 ? notes[secondYearIndex].N_NO_EMPLOYEES : "-",
      thirdYear:
        thirdYearIndex > -1 ? notes[thirdYearIndex].N_NO_EMPLOYEES : "-"
    },
    floatingCharge: {
      firstYear:
        firstYearIndex > -1 ? notes[firstYearIndex].N_FLOATING_CHARGE : "-",
      secondYear:
        secondYearIndex > -1 ? notes[secondYearIndex].N_FLOATING_CHARGE : "-",
      thirdYear:
        thirdYearIndex > -1 ? notes[thirdYearIndex].N_FLOATING_CHARGE : "-"
    },
    auditorRecommendation: {
      firstYear:
        firstYearIndex > -1
          ? prSheet[firstYearIndex].PL_NET_OPERATING_INCOME
          : "-",
      secondYear:
        secondYearIndex > -1
          ? prSheet[secondYearIndex].PL_NET_OPERATING_INCOME
          : "-",
      thirdYear:
        thirdYearIndex > -1
          ? prSheet[thirdYearIndex].PL_NET_OPERATING_INCOME
          : "-"
    }
  };
  const keyRatios = {
    netMargin: {
      firstYear:
        firstYearIndex > -1 ? ann[firstYearIndex].KR_NET_MARGIN_PERCENT : "-",
      secondYear:
        secondYearIndex > -1 ? ann[secondYearIndex].KR_NET_MARGIN_PERCENT : "-",
      thirdYear:
        thirdYearIndex > -1 ? ann[thirdYearIndex].KR_NET_MARGIN_PERCENT : "-"
    },
    rateOfReturn: {
      firstYear:
        firstYearIndex > -1 ? ann[firstYearIndex].KR_RATE_OF_RETURN_TIMES : "-",
      secondYear:
        secondYearIndex > -1
          ? ann[secondYearIndex].KR_RATE_OF_RETURN_TIMES
          : "-",
      thirdYear:
        thirdYearIndex > -1 ? ann[thirdYearIndex].KR_RATE_OF_RETURN_TIMES : "-"
    },
    degreeDebt: {
      firstYear:
        firstYearIndex > -1 ? ann[firstYearIndex].KR_DEGREE_OF_DEBT : "-",
      secondYear:
        secondYearIndex > -1 ? ann[secondYearIndex].KR_DEGREE_OF_DEBT : "-",
      thirdYear:
        thirdYearIndex > -1 ? ann[thirdYearIndex].KR_DEGREE_OF_DEBT : "-"
    },
    equityRatio: {
      firstYear:
        firstYearIndex > -1 ? ann[firstYearIndex].KR_SOLIDITY_PERCENT : "-",
      secondYear:
        secondYearIndex > -1 ? ann[secondYearIndex].KR_SOLIDITY_PERCENT : "-",
      thirdYear:
        thirdYearIndex > -1 ? ann[thirdYearIndex].KR_SOLIDITY_PERCENT : "-"
    },
    currentRatio: {
      firstYear:
        firstYearIndex > -1 ? ann[firstYearIndex].KR_QUICK_RATIO_PERCENT : "-",
      secondYear:
        secondYearIndex > -1
          ? ann[secondYearIndex].KR_QUICK_RATIO_PERCENT
          : "-",
      thirdYear:
        thirdYearIndex > -1 ? ann[thirdYearIndex].KR_QUICK_RATIO_PERCENT : "-"
    }
  };
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
                  <span>{data.ReportDate}</span>
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
                  <span className="value">
                    {data.GETDATA_RESPONSE &&
                      data.GETDATA_RESPONSE[0] &&
                      data.GETDATA_RESPONSE[0].INCORPORATION_DATE}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="row__left">
                  <span className="key">{t("CREDIT_REPORT_VAT_NUMBER")}</span>
                  <span className="value">
                    {data.GETDATA_RESPONSE &&
                      data.GETDATA_RESPONSE[0] &&
                      data.GETDATA_RESPONSE[0].MOMS_NR}
                  </span>
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
                    {t("CREDIT_REPORT_REGISTERED_COUNTY")}
                  </span>
                  <span className="value">
                    {data.GETDATA_RESPONSE &&
                      data.GETDATA_RESPONSE[0] &&
                      data.GETDATA_RESPONSE[0].REGION}
                  </span>
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
                  <span className="value">
                    {data.GETDATA_RESPONSE &&
                      data.GETDATA_RESPONSE[0] &&
                      data.GETDATA_RESPONSE[0].COMMUNITY}
                  </span>
                </div>
                <div className="row__right">
                  <span className="key">
                    {t("CREDIT_REPORT_COMMERCIAL_BLOCK")}
                  </span>
                  <span className="value">
                    {data.GETDATA_RESPONSE &&
                      data.GETDATA_RESPONSE[0] &&
                      data.GETDATA_RESPONSE[0].COMMERCIAL_BLOCK}
                  </span>
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
              <div className="creditReport__box1__header">
                {t("CREDIT_REPORT_ANNUAL_ACCOUNTS")}
              </div>
              <div className="creditReport__box1__body annualAccounts">
                <table>
                  <thead>
                    <tr>
                      <th>
                        {t("CREDIT_REPORT_ANNUAL_ACCOUNTS").toUpperCase()}{" "}
                        (KSEK)
                      </th>
                      <th>{firstYear}</th>
                      <th>{secondYear}</th>
                      <th>{thirdYear}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        {t("CREDIT_REPORT_ANNUAL_ACCOUNTS_OPERATION_INCOME")}
                      </td>
                      <td>{annualAcc.totalNetOperatingIncome.firstYear}</td>
                      <td>{annualAcc.totalNetOperatingIncome.secondYear}</td>
                      <td>{annualAcc.totalNetOperatingIncome.thirdYear}</td>
                    </tr>
                    <tr>
                      <td>{t("CREDIT_REPORT_ANNUAL_ACCOUNTS_O_P_L")}</td>
                      <td>{annualAcc.operatingProfit_loss.firstYear}</td>
                      <td>{annualAcc.operatingProfit_loss.secondYear}</td>
                      <td>{annualAcc.operatingProfit_loss.thirdYear}</td>
                    </tr>
                    <tr>
                      <td>{t("CREDIT_REPORT_ANNUAL_ACCOUNTS_P_A_F_I")}</td>
                      <td>
                        {annualAcc.profit_lossAfterFinancialItems.firstYear}
                      </td>
                      <td>
                        {annualAcc.profit_lossAfterFinancialItems.secondYear}
                      </td>
                      <td>
                        {annualAcc.profit_lossAfterFinancialItems.thirdYear}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {t("CREDIT_REPORT_ANNUAL_ACCOUNTS_NET_PROFIT_LOSS")}
                      </td>
                      <td>{annualAcc.netProfit_loss.firstYear}</td>
                      <td>{annualAcc.netProfit_loss.secondYear}</td>
                      <td>{annualAcc.netProfit_loss.thirdYear}</td>
                    </tr>
                    <tr>
                      <td>
                        {t("CREDIT_REPORT_ANNUAL_ACCOUNTS_CURRENT_ASSETS")}
                      </td>
                      <td>{annualAcc.currentAssets.firstYear}</td>
                      <td>{annualAcc.currentAssets.secondYear}</td>
                      <td>{annualAcc.currentAssets.thirdYear}</td>
                    </tr>
                    <tr>
                      <td>{t("CREDIT_REPORT_ANNUAL_ACCOUNTS_T_F_A")}</td>
                      <td>{annualAcc.totalFixedAssets.firstYear}</td>
                      <td>{annualAcc.totalFixedAssets.secondYear}</td>
                      <td>{annualAcc.totalFixedAssets.thirdYear}</td>
                    </tr>
                    <tr>
                      <td>{t("CREDIT_REPORT_ANNUAL_ACCOUNTS_T_C_L")}</td>
                      <td>{annualAcc.totalCurrentLiabilities.firstYear}</td>
                      <td>{annualAcc.totalCurrentLiabilities.secondYear}</td>
                      <td>{annualAcc.totalCurrentLiabilities.thirdYear}</td>
                    </tr>
                    <tr>
                      <td>
                        {t("CREDIT_REPORT_ANNUAL_ACCOUNTS_LONG_TERM_DEBTS")}
                      </td>
                      <td>{annualAcc.totalLong_termDebts.firstYear}</td>
                      <td>{annualAcc.totalLong_termDebts.secondYear}</td>
                      <td>{annualAcc.totalLong_termDebts.thirdYear}</td>
                    </tr>
                    <tr>
                      <td>
                        {t("CREDIT_REPORT_ANNUAL_ACCOUNTS_UNTAXED_RESERVES")}
                      </td>
                      <td>{annualAcc.untaxedReserves.firstYear}</td>
                      <td>{annualAcc.untaxedReserves.secondYear}</td>
                      <td>{annualAcc.untaxedReserves.thirdYear}</td>
                    </tr>
                    <tr>
                      <td>
                        {t("CREDIT_REPORT_ANNUAL_ACCOUNTS_TOTAL_EQUALITY")}
                      </td>
                      <td>{annualAcc.totalEquity.firstYear}</td>
                      <td>{annualAcc.totalEquity.secondYear}</td>
                      <td>{annualAcc.totalEquity.thirdYear}</td>
                    </tr>
                    <tr>
                      <td>{t("CREDIT_REPORT_ANNUAL_ACCOUNTS_T_E_L")}</td>
                      <td>{annualAcc.totalEquity_liabilities.firstYear}</td>
                      <td>{annualAcc.totalEquity_liabilities.secondYear}</td>
                      <td>{annualAcc.totalEquity_liabilities.thirdYear}</td>
                    </tr>
                    <tr>
                      <td>{t("CREDIT_REPORT_ANNUAL_ACCOUNTS_NUMBER_EMP")}</td>
                      <td>{annualAcc.numberEmployees.firstYear}</td>
                      <td>{annualAcc.numberEmployees.secondYear}</td>
                      <td>{annualAcc.numberEmployees.thirdYear}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="creditReport__box1">
              <div className="creditReport__box1__header">
                {t("CREDIT_REPORT_ANNUAL_ACCOUNTS_KEY_RATIOS")}
              </div>
              <div className="creditReport__box1__body">
                <table>
                  <thead>
                    <tr>
                      <th>
                        {t(
                          "CREDIT_REPORT_ANNUAL_ACCOUNTS_KEY_RATIOS"
                        ).toUpperCase()}
                      </th>
                      <th>{firstYear}</th>
                      <th>{secondYear}</th>
                      <th>{thirdYear}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        {t(
                          "CREDIT_REPORT_ANNUAL_ACCOUNTS_KEY_RATIOS_NET_MARGIN"
                        )}{" "}
                        (%)
                      </td>
                      <td>{keyRatios.netMargin.firstYear}</td>
                      <td>{keyRatios.netMargin.secondYear}</td>
                      <td>{keyRatios.netMargin.thirdYear}</td>
                    </tr>
                    <tr>
                      <td>
                        {t(
                          "CREDIT_REPORT_ANNUAL_ACCOUNTS_KEY_RATIOS_RATE_OF_RETURN"
                        )}
                      </td>
                      <td>{keyRatios.rateOfReturn.firstYear}</td>
                      <td>{keyRatios.rateOfReturn.secondYear}</td>
                      <td>{keyRatios.rateOfReturn.thirdYear}</td>
                    </tr>
                    <tr>
                      <td>
                        {t(
                          "CREDIT_REPORT_ANNUAL_ACCOUNTS_KEY_RATIOS_DEGREE_DEBT"
                        )}
                      </td>
                      <td>{keyRatios.degreeDebt.firstYear}</td>
                      <td>{keyRatios.degreeDebt.secondYear}</td>
                      <td>{keyRatios.degreeDebt.thirdYear}</td>
                    </tr>
                    <tr>
                      <td>
                        {t(
                          "CREDIT_REPORT_ANNUAL_ACCOUNTS_KEY_RATIOS_EQUITY_RATIO"
                        )}{" "}
                        (%)
                      </td>
                      <td>{keyRatios.equityRatio.firstYear}</td>
                      <td>{keyRatios.equityRatio.secondYear}</td>
                      <td>{keyRatios.equityRatio.thirdYear}</td>
                    </tr>
                    <tr>
                      <td>
                        {t(
                          "CREDIT_REPORT_ANNUAL_ACCOUNTS_KEY_RATIOS_CURRENT_RATIO"
                        )}{" "}
                        (%)
                      </td>
                      <td>{keyRatios.currentRatio.firstYear}</td>
                      <td>{keyRatios.currentRatio.secondYear}</td>
                      <td>{keyRatios.currentRatio.thirdYear}</td>
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
              <div className="creditReport__box1__header">
                {t("CREDIT_REPORT_INDUSTRY")}
              </div>
              <div className="creditReport__box1__body">
                <div className="row">
                  <span> {t("CREDIT_REPORT_INDUSTRY")}</span>
                  <span>
                    {data.GETDATA_RESPONSE &&
                      data.GETDATA_RESPONSE[0] &&
                      data.GETDATA_RESPONSE[0].BRANSCH +
                        " " +
                        data.GETDATA_RESPONSE[0].BRANSCH_TEXT}
                  </span>
                </div>
                <div className="row">
                  <span> {t("CREDIT_REPORT_SECONDARY_INDUSTRY")}</span>
                  <span>
                    {data.SECONDARY_INDUSTRIES &&
                      data.SECONDARY_INDUSTRIES.map((item, index) => {
                        return (
                          <div style={{ marginBottom: 5 }}>
                            {item.INDUSTRY_CODE +
                              " " +
                              item.INDUSTRY_DESCRIPTION}
                          </div>
                        );
                      })}
                  </span>
                </div>
              </div>
            </div>
            <div className="creditReport__box1">
              <div className="creditReport__box1__header">
                {t("CREDIT_REPORT_ACTIVITY")}
              </div>
              <div className="creditReport__box1__body">
                <div className="row activityText">
                  {data.GETDATA_RESPONSE &&
                    data.GETDATA_RESPONSE[0] &&
                    data.GETDATA_RESPONSE[0].ACTIVITY_TEXT}
                </div>
              </div>
            </div>
            {/* <div className="creditReport__box1">
              <div className="creditReport__box1__header">Auditors</div>
              <div className="creditReport__box1__body">
                <div className="row">No Information</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreditReportItem;
