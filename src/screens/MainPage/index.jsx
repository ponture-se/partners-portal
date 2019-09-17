import React, { Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "HOCs/PrivateRoute";
import retry from "utils/retryLazyLoad";
//
import "./styles.scss";
import Header from "./header";
const NewApplications = lazy(() => retry(() => import("./../NewApplications")));
const OpenedApplications = lazy(() =>
  retry(() => import("./../OpenedApplications"))
);
const MyOffers = lazy(() => retry(() => import("./../MyOffers")));
const AcceptedOffers = lazy(() => retry(() => import("./../AcceptedOffers")));
const FundedApplications = lazy(() =>
  retry(() => import("./../FundedApplications"))
);
const LostApplications = lazy(() =>
  retry(() => import("./../LostApplications"))
);
//
const MainPage = props => {
  return (
    <div className="mainPage">
      <Header />
      <div className="mainPage__content">
        <Suspense fallback={<div />}>
          <Switch>
            <PrivateRoute
              exact
              key="newApplications"
              path="/:lang/newApplications"
              render={props => <NewApplications {...props} />}
            />
            <PrivateRoute
              exact
              key="openedApplications"
              path="/:lang/openedApplications"
              render={props => <OpenedApplications {...props} />}
            />
            <PrivateRoute
              exact
              key="myOffers"
              path="/:lang/myOffers"
              render={props => <MyOffers {...props} />}
            />
            <PrivateRoute
              exact
              key="acceptedOffers"
              path="/:lang/acceptedOffers"
              render={props => <AcceptedOffers {...props} />}
            />
            <PrivateRoute
              exact
              key="fundedApplications"
              path="/:lang/fundedApplications"
              render={props => <FundedApplications {...props} />}
            />
            <PrivateRoute
              exact
              key="lostApplications"
              path="/:lang/lostApplications"
              render={props => <LostApplications {...props} />}
            />
          </Switch>
        </Suspense>
      </div>
    </div>
  );
};

export default MainPage;

const b = {
  success: true,
  errorCode: null,
  message: null,
  data: {
    ROP_PUBLIC_CLAIMS19: {
      TYPE_TEXT: "Felparkeringsavgift",
      TYPE: "39",
      AMOUNT: "1150",
      CREATED_DATE: "2018-12-17",
      ORGNUMBER: "5590635834"
    },
    ROP_PUBLIC_CLAIMS18: {
      TYPE_TEXT: "Felparkeringsavgift",
      TYPE: "39",
      AMOUNT: "900",
      CREATED_DATE: "2019-05-20",
      ORGNUMBER: "5590635834"
    },
    ROP_PUBLIC_CLAIMS17: {
      TYPE_TEXT: "Felparkeringsavgift",
      TYPE: "39",
      AMOUNT: "900",
      CREATED_DATE: "2019-05-20",
      ORGNUMBER: "5590635834"
    },
    ROP_PUBLIC_CLAIMS16: {
      TYPE_TEXT: "Felparkeringsavgift",
      TYPE: "39",
      AMOUNT: "1350",
      CREATED_DATE: "2019-05-20",
      ORGNUMBER: "5590635834"
    },
    ROP_PUBLIC_CLAIMS15: {
      TYPE_TEXT: "Felparkeringsavgift",
      TYPE: "39",
      AMOUNT: "900",
      CREATED_DATE: "2019-05-20",
      ORGNUMBER: "5590635834"
    },
    ROP_PUBLIC_CLAIMS14: {
      TYPE_TEXT: "Felparkeringsavgift",
      TYPE: "39",
      AMOUNT: "150",
      CREATED_DATE: "2019-05-20",
      ORGNUMBER: "5590635834"
    },
    ROP_PUBLIC_CLAIMS13: {
      TYPE_TEXT: "Felparkeringsavgift",
      TYPE: "39",
      AMOUNT: "150",
      CREATED_DATE: "2019-06-24",
      ORGNUMBER: "5590635834"
    },
    ROP_PUBLIC_CLAIMS12: {
      TYPE_TEXT: "Felparkeringsavgift",
      TYPE: "39",
      AMOUNT: "150",
      CREATED_DATE: "2019-06-24",
      ORGNUMBER: "5590635834"
    },
    ROP_PUBLIC_CLAIMS11: {
      TYPE_TEXT: "Felparkeringsavgift",
      TYPE: "39",
      AMOUNT: "900",
      CREATED_DATE: "2019-06-24",
      ORGNUMBER: "5590635834"
    },
    HISTORICAL_DEBT_DETAILS8: {
      TOTAL_BALANCE: "7200",
      NUMBER_PRIVATE: "0",
      NUMBER_PUBLIC: "5",
      DATE: "2019-06-21 19:30:06"
    },
    HISTORICAL_DEBT_DETAILS7: {
      TOTAL_BALANCE: "7200",
      NUMBER_PRIVATE: "0",
      NUMBER_PUBLIC: "5",
      DATE: "2019-06-14 19:30:07"
    },
    HISTORICAL_DEBT_DETAILS6: {
      TOTAL_BALANCE: "7200",
      NUMBER_PRIVATE: "0",
      NUMBER_PUBLIC: "5",
      DATE: "2019-06-07 19:30:06"
    },
    HISTORICAL_DEBT_DETAILS5: {
      TOTAL_BALANCE: "7200",
      NUMBER_PRIVATE: "0",
      NUMBER_PUBLIC: "5",
      DATE: "2019-05-31 19:30:06"
    },
    HISTORICAL_DEBT_DETAILS4: {
      TOTAL_BALANCE: "7200",
      NUMBER_PRIVATE: "0",
      NUMBER_PUBLIC: "5",
      DATE: "2019-05-24 19:30:06"
    },
    HISTORICAL_DEBT_DETAILS3: {
      TOTAL_BALANCE: "1750",
      NUMBER_PRIVATE: "0",
      NUMBER_PUBLIC: "1",
      DATE: "2019-01-04 00:00:00"
    },
    HISTORICAL_DEBT_DETAILS2: {
      TOTAL_BALANCE: "1750",
      NUMBER_PRIVATE: "0",
      NUMBER_PUBLIC: "1",
      DATE: "2018-12-28 00:00:00"
    },
    HISTORICAL_DEBT_DETAILS1: {
      TOTAL_BALANCE: "1750",
      NUMBER_PRIVATE: "0",
      NUMBER_PUBLIC: "1",
      DATE: "2018-12-21 00:00:00"
    },
    MAILING_ADDRESSES1: {
      MAILING_TOWN: "STOCKHOLM",
      MAILING_ZIP: "11356",
      MAILING_ADDRESS: "Birger Jarlsgatan 57 C"
    },
    VISITING_ADDRESSES1: {
      VISITING_TOWN: "STOCKHOLM",
      VISITING_ZIP: "11356",
      VISITING_ADDRESS: "Birger Jarlsgatan 57 C"
    },
    INACTIVE_DIRECTORS9: {
      EXITINGDATE: "2017-04-13",
      APPOINTMENTDATE: "2016-05-20",
      SOCSECURITYNR: "8408240755",
      FUNCTION: "Ledamot",
      NAME: "Maddineni, Rajesh"
    },
    INACTIVE_DIRECTORS8: {
      EXITINGDATE: "2017-04-13",
      APPOINTMENTDATE: "2016-05-20",
      SOCSECURITYNR: "8408240755",
      FUNCTION: "Verkställande Direktör",
      NAME: "Maddineni, Rajesh"
    },
    INACTIVE_DIRECTORS7: {
      EXITINGDATE: "2017-04-13",
      APPOINTMENTDATE: "2016-05-20",
      SOCSECURITYNR: "9207159204",
      FUNCTION: "Suppleant",
      NAME: "Chitturi, Surya Satya Tejaswini"
    },
    INACTIVE_DIRECTORS6: {
      EXITINGDATE: "2017-04-13",
      APPOINTMENTDATE: "2016-05-20",
      SOCSECURITYNR: "9207159204",
      FUNCTION: "Vice Verkställande Direktör",
      NAME: "Chitturi, Surya Satya Tejaswini"
    },
    INACTIVE_DIRECTORS5: {
      EXITINGDATE: "2017-04-13",
      APPOINTMENTDATE: "2017-02-23",
      SOCSECURITYNR: "7502250959",
      FUNCTION: "Suppleant",
      NAME: "Bonn, Jonas Nicholas"
    },
    INACTIVE_DIRECTORS4: {
      EXITINGDATE: "2018-06-12",
      APPOINTMENTDATE: "2017-04-13",
      SOCSECURITYNR: "8408240755",
      FUNCTION: "Vice Verkställande Direktör",
      NAME: "Maddineni, Rajesh"
    },
    INACTIVE_DIRECTORS3: {
      EXITINGDATE: "2018-06-12",
      APPOINTMENTDATE: "2017-04-13",
      SOCSECURITYNR: "8408240755",
      FUNCTION: "Suppleant",
      NAME: "Maddineni, Rajesh"
    },
    INACTIVE_DIRECTORS2: {
      EXITINGDATE: "2018-06-12",
      APPOINTMENTDATE: "2017-04-13",
      SOCSECURITYNR: "7502250959",
      FUNCTION: "Ledamot",
      NAME: "Bonn, Jonas Nicholas"
    },
    INACTIVE_DIRECTORS1: {
      EXITINGDATE: "2018-06-12",
      APPOINTMENTDATE: "2017-04-13",
      SOCSECURITYNR: "7502250959",
      FUNCTION: "Verkställande Direktör",
      NAME: "Bonn, Jonas Nicholas"
    },
    SECONDARY_INDUSTRIES4: {
      INDUSTRY_DESCRIPTION:
        "Non-specialised retail sale via mail order houses or via Internet",
      INDUSTRY_CODE: "47911"
    },
    SECONDARY_INDUSTRIES3: {
      INDUSTRY_DESCRIPTION: "Warehousing and storage",
      INDUSTRY_CODE: "52100"
    },
    SECONDARY_INDUSTRIES2: {
      INDUSTRY_DESCRIPTION:
        "Wholesale of other food, including fish, crustaceans and molluscs",
      INDUSTRY_CODE: "46380"
    },
    SECONDARY_INDUSTRIES1: {
      INDUSTRY_DESCRIPTION: "Freight transport by road",
      INDUSTRY_CODE: "49410"
    },
    PAYROLL_DATA10: {
      REGISTER_DATE: "2018-09-05",
      FEE: "6535",
      PAYROLL_DATE: "2018-08"
    },
    PAYROLL_DATA9: {
      REGISTER_DATE: "2018-10-17",
      FEE: "0",
      PAYROLL_DATE: "2018-09"
    },
    PAYROLL_DATA8: {
      REGISTER_DATE: "2018-11-21",
      FEE: "3984",
      PAYROLL_DATE: "2018-10"
    },
    PAYROLL_DATA7: {
      REGISTER_DATE: "2019-01-30",
      FEE: "4713",
      PAYROLL_DATE: "2018-11"
    },
    PAYROLL_DATA6: {
      REGISTER_DATE: "2019-01-30",
      FEE: "4713",
      PAYROLL_DATE: "2018-12"
    },
    PAYROLL_DATA5: {
      REGISTER_DATE: "2019-03-06",
      FEE: "0",
      PAYROLL_DATE: "2019-01"
    },
    PAYROLL_DATA4: {
      REGISTER_DATE: "2019-03-20",
      FEE: "5969",
      PAYROLL_DATE: "2019-02"
    },
    PAYROLL_DATA3: {
      REGISTER_DATE: "2019-04-10",
      FEE: "0",
      PAYROLL_DATE: "2019-03"
    },
    PAYROLL_DATA2: {
      REGISTER_DATE: "2019-05-29",
      FEE: "628",
      PAYROLL_DATE: "2019-04"
    },
    PAYROLL_DATA1: {
      REGISTER_DATE: "2019-06-19",
      FEE: "2134",
      PAYROLL_DATE: "2019-05"
    },
    ROP_PUBLIC_CLAIMS9: {
      TYPE_TEXT: "Felparkeringsavgift",
      TYPE: "39",
      AMOUNT: "1150",
      CREATED_DATE: "2018-12-17",
      ORGNUMBER: "5590635834"
    },
    ROP_PUBLIC_CLAIMS8: {
      TYPE_TEXT: "Felparkeringsavgift",
      TYPE: "39",
      AMOUNT: "900",
      CREATED_DATE: "2019-05-20",
      ORGNUMBER: "5590635834"
    },
    ROP_PUBLIC_CLAIMS7: {
      TYPE_TEXT: "Felparkeringsavgift",
      TYPE: "39",
      AMOUNT: "1350",
      CREATED_DATE: "2019-05-20",
      ORGNUMBER: "5590635834"
    },
    ROP_PUBLIC_CLAIMS6: {
      TYPE_TEXT: "Felparkeringsavgift",
      TYPE: "39",
      AMOUNT: "900",
      CREATED_DATE: "2019-05-20",
      ORGNUMBER: "5590635834"
    },
    ROP_PUBLIC_CLAIMS5: {
      TYPE_TEXT: "Felparkeringsavgift",
      TYPE: "39",
      AMOUNT: "900",
      CREATED_DATE: "2019-05-20",
      ORGNUMBER: "5590635834"
    },
    ROP_PUBLIC_CLAIMS4: {
      TYPE_TEXT: "Felparkeringsavgift",
      TYPE: "39",
      AMOUNT: "150",
      CREATED_DATE: "2019-05-20",
      ORGNUMBER: "5590635834"
    },
    ROP_PUBLIC_CLAIMS3: {
      TYPE_TEXT: "Felparkeringsavgift",
      TYPE: "39",
      AMOUNT: "900",
      CREATED_DATE: "2019-06-24",
      ORGNUMBER: "5590635834"
    },
    ROP_PUBLIC_CLAIMS2: {
      TYPE_TEXT: "Felparkeringsavgift",
      TYPE: "39",
      AMOUNT: "150",
      CREATED_DATE: "2019-06-24",
      ORGNUMBER: "5590635834"
    },
    ROP_PUBLIC_CLAIMS1: {
      TYPE_TEXT: "Felparkeringsavgift",
      TYPE: "39",
      AMOUNT: "150",
      CREATED_DATE: "2019-06-24",
      ORGNUMBER: "5590635834"
    },
    ROP_PRIVATE_CLAIMS_APP1: {
      CREDITOR_FOREIGN: "No",
      CREDITOR_NAME: "Riddermark Bil AB",
      CREDITOR_ORGNR: "5567507693",
      TYPE_TEXT: "Application",
      TYPE: "A",
      AMOUNT: "780",
      CREATED_DATE: "2019-06-26",
      ORGNUMBER: "5590635834"
    },
    ACCOUNT_NOTES2: {
      N_ACCOUNT_COMMENT_TEXT: "-",
      N_ACCOUNT_AUDITED: "-",
      N_NO_EMPLOYEES: "0",
      N_NOT_USED_BANK_OVERDRAFT: "0",
      N_ACCEPTED_BANK_OVERDRAFT: "0",
      N_DIVIDEND: "0",
      N_PAYROLL_OVERHEAD: "0",
      N_AGREED_SEVERANCE_PAY: "No",
      N_TANTIEM_BOARD: "0",
      N_SALARY_BOARD: "0",
      N_TOT_CONTINGENT_LIAB: "0",
      N_OTHER_CONTINGENT_LIAB: "0",
      N_CONDITIONAL_EQUITY: "0",
      N_TOT_COLLATERAL: "0",
      N_OTHER_COLLATERAL: "0",
      N_REAL_ESTATE_MORTGAGE: "0",
      N_FLOATING_CHARGE: "0",
      ACCOUNTS_TYPE: "K",
      MONTHS: "8",
      DATE_TO: "2016-12-31",
      DATE_FROM: "2016-05-01"
    },
    ACCOUNT_NOTES1: {
      N_ACCOUNT_COMMENT_TEXT: "-",
      N_ACCOUNT_AUDITED: "-",
      N_NO_EMPLOYEES: "2",
      N_NOT_USED_BANK_OVERDRAFT: "0",
      N_ACCEPTED_BANK_OVERDRAFT: "0",
      N_DIVIDEND: "0",
      N_PAYROLL_OVERHEAD: "0",
      N_AGREED_SEVERANCE_PAY: "No",
      N_TANTIEM_BOARD: "0",
      N_SALARY_BOARD: "0",
      N_TOT_CONTINGENT_LIAB: "0",
      N_OTHER_CONTINGENT_LIAB: "0",
      N_CONDITIONAL_EQUITY: "0",
      N_TOT_COLLATERAL: "0",
      N_OTHER_COLLATERAL: "0",
      N_REAL_ESTATE_MORTGAGE: "0",
      N_FLOATING_CHARGE: "0",
      ACCOUNTS_TYPE: "K",
      MONTHS: "12",
      DATE_TO: "2017-12-31",
      DATE_FROM: "2017-01-01"
    },
    ACCOUNT_KEY_VALUES2: {
      KR_NET_MARGIN_PERCENT: "5,80",
      KR_RISK_BUFFER: "7,60",
      KR_DEGREE_OF_DEBT: "1,10",
      KR_ACC_RECIEV_TURNOVER_TIMES: "0",
      KR_CASH_FLOW_FROM_OP_PERCENT: "5,40",
      KR_AVG_DEBT_EQ_RATIO_PERCENT: "0",
      KR_TURNOVER_PER_EMPLOYEE: "0",
      KR_AVERAGE_PAYMENT_PERIOD_DAYS: "0",
      KR_INVENTORY_TURNOVER_TIMES: "0",
      KR_WORKING_CAPITAL: "469,50",
      KR_BALANCE_LIQUIDITY: "882,50",
      KR_QUICK_RATIO_PERCENT: "882,50",
      KR_RETURN_ON_OP_CAPITAL: "21,50",
      KR_RETURN_ON_WORKING_CAPITAL: "8,50",
      KR_RATE_OF_RETURN_TIMES: "0",
      KR_SOLIDITY_PERCENT: "46,60",
      KR_CAPITAL_TURNOVER_TIMES: "1,30",
      KR_GROSS_PROFIT_MARGIN_PERCENT: "82,20",
      KR_PROFIT_MARGIN_PERCENT: "5,80",
      KR_RETURN_ON_CAP_EMP_PERCENT: "7,60",
      KR_RETURN_ON_CAPITAL_PERCENT: "16,30",
      ACCOUNTS_TYPE: "K",
      MONTHS: "8",
      DATE_TO: "2016-12-31",
      DATE_FROM: "2016-05-01"
    },
    ACCOUNT_KEY_VALUES1: {
      KR_NET_MARGIN_PERCENT: "-15",
      KR_RISK_BUFFER: "-37,80",
      KR_DEGREE_OF_DEBT: "8,30",
      KR_ACC_RECIEV_TURNOVER_TIMES: "0",
      KR_CASH_FLOW_FROM_OP_PERCENT: "-15",
      KR_AVG_DEBT_EQ_RATIO_PERCENT: "1",
      KR_TURNOVER_PER_EMPLOYEE: "552",
      KR_AVERAGE_PAYMENT_PERIOD_DAYS: "0",
      KR_INVENTORY_TURNOVER_TIMES: "0",
      KR_WORKING_CAPITAL: "-65",
      KR_BALANCE_LIQUIDITY: "80,10",
      KR_QUICK_RATIO_PERCENT: "80,10",
      KR_RETURN_ON_OP_CAPITAL: "-23,60",
      KR_RETURN_ON_WORKING_CAPITAL: "-144,40",
      KR_RATE_OF_RETURN_TIMES: "-40",
      KR_SOLIDITY_PERCENT: "10,80",
      KR_CAPITAL_TURNOVER_TIMES: "2,50",
      KR_GROSS_PROFIT_MARGIN_PERCENT: "44,70",
      KR_PROFIT_MARGIN_PERCENT: "-14,50",
      KR_RETURN_ON_CAP_EMP_PERCENT: "-37",
      KR_RETURN_ON_CAPITAL_PERCENT: "-351,10",
      ACCOUNTS_TYPE: "K",
      MONTHS: "12",
      DATE_TO: "2017-12-31",
      DATE_FROM: "2017-01-01"
    },
    ACCOUNT_BALANCE_SHEET2: {
      BS_TOT_EQUITY_AND_LIAB: "369",
      BS_TOT_CURRENT_LIABILITIES: "40",
      BS_OTHER_SHORT_TERM_LIAB: "13",
      BS_ST_LIAB_GROUP_ASS_COMP: "0",
      BS_ACC_PAY_TRADE: "27",
      BS_LIAB_CREDIT_INST: "0",
      BS_TOT_LONG_TERM_DEBTS: "157",
      BS_OTHER_LONG_TERM_LIAB: "157",
      BS_LT_LIAB_GROUP_ASS_COMP: "0",
      BS_LT_LIAB_TO_CREDIT_INSTIT: "0",
      BS_LT_BOND_LOAN: "0",
      BS_PROVISIONS: "0",
      BS_MINORITY_INTERESTS: "0",
      BS_UNTAXED_RESERVES: "0",
      BS_TOT_EQUITY: "172",
      BS_NET_PROFIT_LOSS: "22",
      BS_SHAREHOLDER_CONTRIBUTION: "0",
      BS_GROUP_CONTRIBUTION: "0",
      BS_PROFIT_LOSS_BROUGHT_FWD: "83",
      BS_OTHER_STOCKHOLDER_EQUITY: "0",
      BS_REVALUATION_RESERVE: "0",
      BS_SHARE_PREMIUM_RESERVE: "0",
      BS_ISSUED_SHARE_CAPITAL: "67",
      BS_TOT_ASSETS: "369",
      BS_TOTAL_TURNOVER_ASSETS: "353",
      BS_OTHER_CUR_ASSETS: "0",
      BS_CASH_AND_BANK_BALANCES: "98",
      BS_SHORT_INVESTMENTS: "0",
      BS_OTHER_ACC_RECIEVE: "255",
      BS_ACC_RECIEVE_GROUP: "0",
      BS_ACCOUNTS_RECEIVABLE_TRADE: "0",
      BS_INVENTORIES: "0",
      BS_WORK_ON_CONTRACT: "0",
      BS_TOT_FIX_ASSETS: "16",
      BS_TOTAL_FINANCIAL_ASSETS: "0",
      BS_OTHER_FIN_ASSETS: "0",
      BS_LOAN_CO_OWNERS: "0",
      BS_ACC_RECIEVE_CORP_GROUP: "0",
      BS_GROUP_SHARE: "0",
      BS_TOTAL_TANGIBLE_ASSETS: "16",
      BS_OTHER_TANG_ASS_NON_DEP: "0",
      BS_OTHER_MAT_DEPRECIATION: "0",
      BS_EQUIP_TOOLS_FIX_AND_FIT: "16",
      BS_PLANT_MACHINE: "0",
      BS_LAND_BUILD: "0",
      BS_TOTAL_INTANGIBLE_ASSETS: "0",
      BS_OTHER_INTANGIBLE_ASS: "0",
      BS_GOODWILL: "0",
      BS_PATENTS: "0",
      BS_CAPT_EXP_FOR_RES_AND_DEV: "0",
      BS_SUBSCRIBED_CAPITAL_UNPAID: "0",
      ACCOUNTS_TYPE: "K",
      MONTHS: "8",
      DATE_TO: "2016-12-31",
      DATE_FROM: "2016-05-01"
    },
    ACCOUNT_BALANCE_SHEET1: {
      BS_TOT_EQUITY_AND_LIAB: "435",
      BS_TOT_CURRENT_LIABILITIES: "327",
      BS_OTHER_SHORT_TERM_LIAB: "244",
      BS_ST_LIAB_GROUP_ASS_COMP: "0",
      BS_ACC_PAY_TRADE: "83",
      BS_LIAB_CREDIT_INST: "0",
      BS_TOT_LONG_TERM_DEBTS: "61",
      BS_OTHER_LONG_TERM_LIAB: "61",
      BS_LT_LIAB_GROUP_ASS_COMP: "0",
      BS_LT_LIAB_TO_CREDIT_INSTIT: "0",
      BS_LT_BOND_LOAN: "0",
      BS_PROVISIONS: "0",
      BS_MINORITY_INTERESTS: "0",
      BS_UNTAXED_RESERVES: "0",
      BS_TOT_EQUITY: "47",
      BS_NET_PROFIT_LOSS: "-165",
      BS_SHAREHOLDER_CONTRIBUTION: "40",
      BS_GROUP_CONTRIBUTION: "0",
      BS_PROFIT_LOSS_BROUGHT_FWD: "105",
      BS_OTHER_STOCKHOLDER_EQUITY: "0",
      BS_REVALUATION_RESERVE: "0",
      BS_SHARE_PREMIUM_RESERVE: "0",
      BS_ISSUED_SHARE_CAPITAL: "67",
      BS_TOT_ASSETS: "435",
      BS_TOTAL_TURNOVER_ASSETS: "262",
      BS_OTHER_CUR_ASSETS: "0",
      BS_CASH_AND_BANK_BALANCES: "223",
      BS_SHORT_INVESTMENTS: "0",
      BS_OTHER_ACC_RECIEVE: "39",
      BS_ACC_RECIEVE_GROUP: "0",
      BS_ACCOUNTS_RECEIVABLE_TRADE: "0",
      BS_INVENTORIES: "0",
      BS_WORK_ON_CONTRACT: "0",
      BS_TOT_FIX_ASSETS: "173",
      BS_TOTAL_FINANCIAL_ASSETS: "0",
      BS_OTHER_FIN_ASSETS: "0",
      BS_LOAN_CO_OWNERS: "0",
      BS_ACC_RECIEVE_CORP_GROUP: "0",
      BS_GROUP_SHARE: "0",
      BS_TOTAL_TANGIBLE_ASSETS: "173",
      BS_OTHER_TANG_ASS_NON_DEP: "0",
      BS_OTHER_MAT_DEPRECIATION: "0",
      BS_EQUIP_TOOLS_FIX_AND_FIT: "173",
      BS_PLANT_MACHINE: "0",
      BS_LAND_BUILD: "0",
      BS_TOTAL_INTANGIBLE_ASSETS: "0",
      BS_OTHER_INTANGIBLE_ASS: "0",
      BS_GOODWILL: "0",
      BS_PATENTS: "0",
      BS_CAPT_EXP_FOR_RES_AND_DEV: "0",
      BS_SUBSCRIBED_CAPITAL_UNPAID: "0",
      ACCOUNTS_TYPE: "K",
      MONTHS: "12",
      DATE_TO: "2017-12-31",
      DATE_FROM: "2017-01-01"
    },
    ACCOUNT_PROFITLOSS_SHEET2: {
      PL_NET_PROFIT_LOSS: "22",
      PL_MINORITY_INTREST_AND_PROF: "0",
      PL_TAX: "-6",
      PL_OTHER_APPROPRIATIONS: "0",
      PL_SHAREHOLDER_CONTRIB: "0",
      PL_GROUP_CONTRIB: "0",
      PL_EXTRAORDINARY_EXP: "0",
      PL_EXTRAORDINARY_INC: "0",
      PL_PROF_LOSS_AFTER_FIN_ITEMS: "28",
      PL_TOT_FIN_INVESTMENTS: "0",
      PL_OTHER_FIN_COSTS: "0",
      PL_INTEREST_EXP_INT: "0",
      PL_INTEREST_EXP_EXT: "0",
      PL_OTHER_FIN_INC: "0",
      PL_FIN_INT_GROUP_INC: "0",
      PL_EXT_INTEREST_INC: "0",
      PL_RESULT_PARTICIPATION_GROUP: "0",
      PL_OPERATING_RESULT: "28",
      PL_TOT_OPP_EXP: "-454",
      PL_OTHER_OPP_EXPENSES: "0",
      PL_ITEM_AFFECT_COMPARE: "0",
      PL_DEPR_AND_WRITE_DOWNS: "-4",
      PL_PERSONAL_COSTS: "0",
      PL_OTHER_EXT_COSTS: "-363",
      PL_GOODS_FOR_RESALE: "0",
      PL_RAW_MAT_AND_CONS: "-86",
      PL_NET_OPERATING_INCOME: "482",
      PL_OTHER_OPP_INCOME: "0",
      PL_WORK_PERF_OWN_USE_CAPITAL: "0",
      PL_CHANGE_INVENT_WORK_PROG: "0",
      PL_NET_SALES: "482",
      ACCOUNTS_TYPE: "K",
      MONTHS: "8",
      DATE_TO: "2016-12-31",
      DATE_FROM: "2016-05-01"
    },
    ACCOUNT_PROFITLOSS_SHEET1: {
      PL_NET_PROFIT_LOSS: "-165",
      PL_MINORITY_INTREST_AND_PROF: "0",
      PL_TAX: "0",
      PL_OTHER_APPROPRIATIONS: "0",
      PL_SHAREHOLDER_CONTRIB: "0",
      PL_GROUP_CONTRIB: "0",
      PL_EXTRAORDINARY_EXP: "0",
      PL_EXTRAORDINARY_INC: "0",
      PL_PROF_LOSS_AFTER_FIN_ITEMS: "-165",
      PL_TOT_FIN_INVESTMENTS: "-4",
      PL_OTHER_FIN_COSTS: "0",
      PL_INTEREST_EXP_INT: "0",
      PL_INTEREST_EXP_EXT: "-4",
      PL_OTHER_FIN_INC: "0",
      PL_FIN_INT_GROUP_INC: "0",
      PL_EXT_INTEREST_INC: "0",
      PL_RESULT_PARTICIPATION_GROUP: "0",
      PL_OPERATING_RESULT: "-160",
      PL_TOT_OPP_EXP: "-1263",
      PL_OTHER_OPP_EXPENSES: "0",
      PL_ITEM_AFFECT_COMPARE: "0",
      PL_DEPR_AND_WRITE_DOWNS: "0",
      PL_PERSONAL_COSTS: "-165",
      PL_OTHER_EXT_COSTS: "-489",
      PL_GOODS_FOR_RESALE: "0",
      PL_RAW_MAT_AND_CONS: "-610",
      PL_NET_OPERATING_INCOME: "1103",
      PL_OTHER_OPP_INCOME: "0",
      PL_WORK_PERF_OWN_USE_CAPITAL: "0",
      PL_CHANGE_INVENT_WORK_PROG: "0",
      PL_NET_SALES: "1103",
      ACCOUNTS_TYPE: "K",
      MONTHS: "12",
      DATE_TO: "2017-12-31",
      DATE_FROM: "2017-01-01"
    },
    DIRECTORS3: {
      APPOINTMENTDATE: "2018-06-12",
      SOCSECURITYNR: "8408240755",
      FUNCTION: "Verkställande Direktör",
      NAME: "Maddineni, Rajesh"
    },
    DIRECTORS2: {
      APPOINTMENTDATE: "2018-06-12",
      SOCSECURITYNR: "8408240755",
      FUNCTION: "Ledamot",
      NAME: "Maddineni, Rajesh"
    },
    DIRECTORS1: {
      APPOINTMENTDATE: "2018-06-12",
      SOCSECURITYNR: "7502250959",
      FUNCTION: "Suppleant",
      NAME: "Bonn, Jonas Nicholas"
    },
    GETDATA_RESPONSE1: {
      ROP_PRIVATE_CLAIMS1: "0",
      ROP_PUBLIC_CLAIMS1: "9",
      HISTORICAL_DEBT_DETAILS: "8",
      MAILING_ADDRESSES: "1",
      VISITING_ADDRESSES: "1",
      INACTIVE_DIRECTORS: "9",
      SECONDARY_INDUSTRIES: "4",
      PAY_INVOICES_OUTSTANDING_DETAILS: "0",
      PAY_INVOICES_PAID_DETAILS: "0",
      PAYROLL_DATA: "10",
      DETAILREALESTATE: "0",
      DISTRAINT_REPOSSESSION_CLAIMS: "0",
      ROP_PUBLIC_CLAIMS: "9",
      ROP_PRIVATE_CLAIMS: "0",
      ROP_PRIVATE_CLAIMS_APP: "1",
      ACCOUNT_NOTES: "2",
      ACCOUNT_KEY_VALUES: "2",
      ACCOUNT_BALANCE_SHEET: "2",
      ACCOUNT_PROFITLOSS_SHEET: "2",
      COMPANY_REGNAME: "0",
      DIRECTORS: "3",
      COMPANY_INTERNAL_WARNING: "0",
      RISK_CHECK_BOARD: "1",
      RISK_CHECK_AUDITOR: "2",
      FTAX_START_DATE: "2016-06",
      MOMS_START_DATE: "2016-06",
      NR_EMPLOYEES_INTERVAL: "-",
      MOMS_NR: "SE559063583401",
      RAW_MATERIALS_CONSUMABLES: "-610",
      GOODS_FOR_RESALE: "0",
      REPRESENTATIVE_CHECK: "No",
      AUDITOR_RESERVATION: "Yes",
      PAY_INVOICES_OUTSTANDING: "",
      PAY_INVOICES_PAID: "",
      PAY_INVOICES_TOT_AVAILABLE: "",
      PAY_INVOICES_AVG_VALUE: "",
      PAY_DBT: "",
      ASSESSED_VALUE_OWNED_PART: "",
      ASSESSED_VALUE_LAND: "",
      ASSESSED_VALUE_BUILDING: "",
      AVERAGE_OWNED_PART_PERCENT: "",
      ASSESSED_VALUE_TOTAL: "",
      NUMBER_BUILDINGS: "",
      NUMBER_REALESTATE: "",
      ANTAL_ANM_AMAL1: "9",
      ANTAL_ANM_EMAL1: "0",
      ACTIVITY_TEXT:
        "Bolaget ska bedriva konsultverksamhet vid utveckling och implementering av administrativa data- och informationssystem, konsulttjänster inom logistik, samt bedriva härmed jämförlig verksamhet. Bolaget ska bedriva speditions-, transport- och åkerirörelse samt annan därmed förenlig verksamhet. Att biträda huvudkontoret med försäljning och marknadsföring i samband med dess utveckling av dataprogramvaror för svenska kunder. Bolaget ska bedriva verksamhet avseende import av hantverk ävensom idka därmed förenlig verksamhet. Bolaget skall erbjuda personer att handla mat på internet och genom applikationer från anslutna restauranger och därmed förenlig verksamhet. Bolaget levererar av färdig mat till skolor och serviceinrättningar. Aktiebolagets verksamhet ska vara att bedriva försäljning av varor på internet, såsom kläder, hemelektronik, glas, porslin, husgeråd och presentartiklar, jämte därmed förenlig verksamhet.",
      SAFE_NUMBER: "SE03959917",
      COMPANY_STATUS_CODE: "S100",
      BRANCH_ADDITIONAL_TEXT:
        "Branch value 2017: Median for companies within agents involved in the sale of food, beverages and tobacco (SNI 46170) with 1-4 employees.",
      BRANCH_RISK_BUFFER: "3,90",
      BRANCH_QUICK_RATIO: "150,70",
      BRANCH_SOLIDITY: "45,90",
      BRANCH_DEGREE_OF_DEBT: "1",
      BRANCH_RATE_OF_RETURN: "4,40",
      BRANCH_NET_MARGIN: "2,50",
      LATEST_REGNAME: "",
      BANKRUPTCY_ADM_POST_TOWN: "",
      BANKRUPTCY_ADM_POST_CODE: "",
      BANKRUPTCY_ADM_BOX_ADDRESS: "",
      BANKRUPTCY_ADM_VISIT_ADDRESS: "",
      BANKRUPTCY_ADM_PHONENOCENTRAL: "",
      BANKRUPTCY_ADM_PHONENODIR: "",
      BANKRUPTCY_ADM_FIRM: "",
      BANKRUPTCY_ADM_NAME: "",
      BANKRUPTCY_TEXT: "",
      BANKRUPTCY_DATE: "",
      BANKRUPTCY_TYPE: "",
      TURNOVER_INTERVAL: "500 - 749 tkr",
      IMMEDIATE_GROUPMOTHER_NAME: "",
      IMMEDIATE_GROUPMOTHER_ORGNR: "",
      COMPANY_ACTIVE: "Active",
      GROUPMOTHER_COUNTRY_CODE: "",
      COMPANY_STATUS_DATE: "20160520",
      COMPANY_STATUS: "Active",
      CFAR_NR: "57285637",
      EQUITY_SHARE: "70%",
      NON_LTD_OWNER_NAME: "",
      NON_LTD_OWNER_PNR: "",
      CEO_NAME: "Maddineni, Rajesh",
      CEO_PNR: "8408240755",
      DATE_ADRESS_CHANGED: "20190125",
      INVESTIGATE: "No",
      COMPANY_SIGN: "Firman tecknas var för sig av >ledamoten >suppleanten",
      UNIT_NR: "1",
      NET_TURNOVER: "1103",
      QUICK_RATIO: "80,1%",
      INVENTORY: "0",
      REVISON_APPROVED: "-",
      TOTAL_CAPITAL: "435",
      EQUITY: "47",
      NON_TAX_RESERV: "0",
      LONG_TERM_LIABS: "61",
      SHORT_TERM_LIABS: "327",
      FIXT_EQUIP: "173",
      CURRENT_ASSETS: "262",
      PROFIT_AFTER_TAX: "-165",
      PROFIT_DEPRICIATION: "-160",
      REVENUE: "1103",
      NET_PROFIT: "-165",
      BALANSLIKVIDITET: "0,8",
      SKULDSATTNINGSGRAD: "825,5%",
      RANTETACKNINGSGRAD: "-4000,0%",
      SOLIDITET: "10,8%",
      INTJANINGSFORMAGA: "-15,0%",
      INCORPORATION_DATE: "20160520",
      GROUPMOTHER_NAME: "",
      GROUPMOTHER_ORGNR: "",
      KF_DEBT_SUM_EMAL: "0",
      KF_DEBT_SUM_AMAL: "10200",
      KF_DEBT_NR_EMAL: "0",
      KF_DEBT_NR_AMAL: "8",
      KF_DEBT_DATE: "20190628",
      KF_DEBT: "10200",
      NR_EMPLOYEES: "2",
      ACCOUNT_PERIOD: "20170101-20171231",
      SUM_ANM_EMAL: "0",
      SUM_ANM_AMAL: "6550",
      ANTAL_ANM_EMAL: "0",
      ANTAL_ANM_AMAL: "9",
      SUM_ANSOKAN: "780",
      SUM_ANM: "6550",
      ANTAL_ANSOKAN: "1",
      ANTAL_ANM: "9",
      LIMIT: "0",
      BRANSCH_TEXT: "Provisionshandel med livsmedel, drycker och tobak",
      EMP_TAX: "Yes",
      MOMS: "Yes",
      "F-TAX": "Yes",
      BRANSCH: "46170",
      SHARE_CAPITAL: "66700SEK",
      RATING_TEXT: "Not credit worthy",
      RATING: "2",
      WWW_ADRESS: "",
      EMAIL_ADRESS: "",
      REGION: "STOCKHOLM",
      COMMUNITY: "SOLLENTUNA",
      FAXNR: "",
      TELEPHONE: "070-8829288",
      TOWN: "STOCKHOLM",
      ZIPCODE: "11356",
      VEHICLE_ACQUIRED: "0",
      VEHICLE_DISPOSED: "0",
      VEHICLE_LESSOR: "0",
      VEHICLE_LESSEE: "2",
      VEHICLE_OWNED: "0",
      VEHICLE_USED: "2",
      ADDRESS: "Norrsken House, Box No:53, Birger Jarlsgatan 57 c",
      ADDRESS_WITHOUT_CO: "Birger Jarlsgatan 57 c",
      CO_ADDRESS: "Norrsken House, Box No:53",
      OLD_NAME: "Nordic foodtech AB",
      COMMERCIAL_BLOCK: "CB1",
      COMPANY_LEGAL_CODE: "49",
      COMPANY_TYPE_TEXT: "Limited liability company",
      COMPANY_TYPE: "AB",
      NAME: "Nordic Express Delivery AB",
      ORGNR: "5590635834"
    }
  },
  statusCode: 200
};
