import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { downloadAppAsset } from "api/main-api";
import SafeValue from "utils/SafeValue";
import { t } from "services/languageManager";
import separateNumberByChar from "utils/separateNumberByChar";
const BusinessAcquisition = props => {
  const BA = props.data.acquisition;

  //fields
  const objectName = SafeValue(BA, "object_name", "string", t("NOT_SPECIFIED"));
  const objectCompanyName = SafeValue(
    BA,
    "object_company_name",
    "string",
    t("NOT_SPECIFIED")
  );
  const objectOrgNumber = SafeValue(
    BA,
    "object_organization_number",
    "string",
    t("NOT_SPECIFIED")
  );
  const objectIndustryBranch = SafeValue(BA, "object_industry", "string", "");
  const objectPrice = separateNumberByChar(String(BA.object_price));
  const objectValuationLetter = SafeValue(
    BA,
    "object_valuation_letter",
    "string",
    ""
  );
  const objectAnnualReport = SafeValue(
    BA,
    "object_annual_report",
    "string",
    ""
  );
  const objectLatestBalanceSheet = SafeValue(
    BA,
    "object_balance_sheet",
    "string",
    ""
  );
  const objectLatestIncomeStatement = SafeValue(
    BA,
    "object_income_statement",
    "string",
    ""
  );
  const purchaserCompanyLatestBalanceSheet = SafeValue(
    BA,
    "account_balance_sheet",
    "string",
    ""
  );
  const purchaserCompanyLatestIncomeStatement = SafeValue(
    BA,
    "account_income_statement",
    "string",
    ""
  );
  const purchaserGuaranteesAvailable = SafeValue(
    BA,
    "available_guarantees",
    "string",
    ""
  );
  const purchaserGuaranteesDescription = SafeValue(
    BA,
    "available_guarantees_description",
    "string",
    t("NOT_SPECIFIED")
  );
  const experience = SafeValue(
    BA,
    "purchaser_profile",
    "string",
    t("NOT_SPECIFIED")
  );
  const purchaseType = SafeValue(BA, "purchase_type", "string", "");
  const ownInvestmentAmount = separateNumberByChar(
    String(BA.own_investment_amount)
  );
  const ownInvestmentDetails = SafeValue(
    BA,
    "own_investment_details",
    "string",
    ""
  );
  const additionalFiles = SafeValue(BA, "additional_files.0", "string", "");
  const businessPlan = SafeValue(BA, "business_plan.0", "string", "");
  const additionalDetails = SafeValue(
    BA,
    "additional_details",
    "string",
    t("NOT_SPECIFIED")
  );
  const description = SafeValue(
    BA,
    "description",
    "string",
    t("NOT_SPECIFIED")
  );
  return (
    <>
      <div className="viewAppItem__header" style={{ margin: "20px 0px 0 0px" }}>
        <span className="viewAppItem__title">{t("APP_BUSINESS_ACQ1")}</span>
      </div>
      <div className="BA-info-body">
        <div className="viewAppItem__bodyRow">
          <div className="viewAppItem__bodyRow__left">
            <span>{t("APP_BA_PURCHASE_TYPE")}</span>
          </div>
          <div className="viewAppItem__bodyRow__right">
            <span>
              {purchaseType ? (
                <span className="tag">{purchaseType}</span>
              ) : (
                t("NOT_SPECIFIED")
              )}
            </span>
          </div>
        </div>
        <div className="viewAppItem__bodyRow">
          <div className="viewAppItem__bodyRow__left">
            <span>{t("APP_OWN_INVESTMENT_AMOUNT")}</span>
          </div>
          <div className="viewAppItem__bodyRow__right">
            <span>{ownInvestmentAmount + " Kr"}</span>
          </div>
        </div>
        <div className="viewAppItem__bodyRow">
          <div className="viewAppItem__bodyRow__left">
            <span>{t("APP_ADDITIONAL_DETAILS")}</span>
          </div>
          <div className="viewAppItem__bodyRow__right">
            <span>{additionalDetails}</span>
          </div>
        </div>
        <div className="viewAppItem__bodyRow">
          <div className="viewAppItem__bodyRow__left">
            <span>{t("APP_ADDITIONAL_FILES")}</span>
          </div>
          <div className="viewAppItem__bodyRow__right">
            <span>
              {additionalFiles.length !== 0 ? (
                <>
                  <a
                    href={downloadAppAsset.call(this, additionalFiles)}
                    target="_blank"
                    className="file"
                  >
                    {t("DOWNLOAD_ATTACHMENT")}
                  </a>
                </>
              ) : (
                t("NOT_SPECIFIED")
              )}
            </span>
          </div>
        </div>
        <div className="viewAppItem__bodyRow">
          <div className="viewAppItem__bodyRow__left">
            <span>{t("APP_BUSINESS_PLAN")}</span>
          </div>
          <div className="viewAppItem__bodyRow__right">
            <span>
              {businessPlan ? (
                <>
                  <a
                    href={downloadAppAsset.call(this, businessPlan)}
                    target="_blank"
                    className="file"
                  >
                    {t("DOWNLOAD_ATTACHMENT")}
                  </a>
                </>
              ) : (
                t("NOT_SPECIFIED")
              )}
            </span>
          </div>
        </div>
        <div className="viewAppItem__bodyRow">
          <div className="viewAppItem__bodyRow__left">
            <span>{t("APP_OWN_INVESTMENT_DETAILS")}</span>
          </div>
          <div className="viewAppItem__bodyRow__right">
            <span>{ownInvestmentDetails}</span>
          </div>
        </div>
        <div className="viewAppItem__bodyRow">
          <div className="viewAppItem__bodyRow__left">
            <span>{t("APP_PURCHASE_OF_DESCRIPTION")}</span>
          </div>
          <div className="viewAppItem__bodyRow__right">
            <span>{description}</span>
          </div>
        </div>
        <div className="viewAppItem__bodyRow">
          <div className="viewAppItem__bodyRow__left">
            <span>{t("APP_OBJECT_NAME")}</span>
          </div>
          <div className="viewAppItem__bodyRow__right">
            <span>{objectName}</span>
          </div>
        </div>
        <div className="viewAppItem__bodyRow">
          <div className="viewAppItem__bodyRow__left">
            <span>{t("APP_OBJECT_COMPANY_NAME")}</span>
          </div>
          <div className="viewAppItem__bodyRow__right">
            <span>{objectCompanyName}</span>
          </div>
        </div>
        <div className="viewAppItem__bodyRow">
          <div className="viewAppItem__bodyRow__left">
            <span>{t("APP_OBJECT_ORG_NUMBER")}</span>
          </div>
          <div className="viewAppItem__bodyRow__right">
            <span>{objectOrgNumber}</span>
          </div>
        </div>
        <div className="viewAppItem__bodyRow">
          <div className="viewAppItem__bodyRow__left">
            <span>{t("APP_OBJECT_PRICE")}</span>
          </div>
          <div className="viewAppItem__bodyRow__right">
            <span>{objectPrice + " Kr"}</span>
          </div>
        </div>
        <div className="viewAppItem__bodyRow">
          <div className="viewAppItem__bodyRow__left">
            <span>{t("APP_OBJECT_INDUSTRY_BRANCH")}</span>
          </div>
          <div className="viewAppItem__bodyRow__right">
            <span>{objectIndustryBranch}</span>
          </div>
        </div>
        <div className="viewAppItem__bodyRow">
          <div className="viewAppItem__bodyRow__left">
            <span>{t("APP_OBJECT_VALUATION_LETTER")}</span>
          </div>
          <div className="viewAppItem__bodyRow__right">
            <span>
              {objectValuationLetter ? (
                <>
                  <a
                    href={downloadAppAsset.call(this, objectValuationLetter)}
                    target="_blank"
                    className="file"
                  >
                    {t("DOWNLOAD_ATTACHMENT")}
                  </a>
                </>
              ) : (
                t("NOT_SPECIFIED")
              )}
            </span>
          </div>
        </div>
        <div className="viewAppItem__bodyRow">
          <div className="viewAppItem__bodyRow__left">
            <span>{t("APP_OBJECT_ANNUAL_REPORT")}</span>
          </div>
          <div className="viewAppItem__bodyRow__right">
            <span>
              {objectAnnualReport ? (
                <>
                  <a
                    href={downloadAppAsset.call(this, objectAnnualReport)}
                    target="_blank"
                    className="file"
                  >
                    {t("DOWNLOAD_ATTACHMENT")}
                  </a>
                </>
              ) : (
                t("NOT_SPECIFIED")
              )}
            </span>
          </div>
        </div>
        <div className="viewAppItem__bodyRow">
          <div className="viewAppItem__bodyRow__left">
            <span>{t("APP_OBJECT_LATEST_BALANCE_SHEET")}</span>
          </div>
          <div className="viewAppItem__bodyRow__right">
            <span>
              {objectLatestBalanceSheet ? (
                <>
                  <a
                    href={downloadAppAsset.call(this, objectLatestBalanceSheet)}
                    target="_blank"
                    className="file"
                  >
                    {t("DOWNLOAD_ATTACHMENT")}
                  </a>
                </>
              ) : (
                t("NOT_SPECIFIED")
              )}
            </span>
          </div>
        </div>
        <div className="viewAppItem__bodyRow">
          <div className="viewAppItem__bodyRow__left">
            <span>{t("APP_OBJECT_LATEST_INCOME_STATEMENT")}</span>
          </div>
          <div className="viewAppItem__bodyRow__right">
            <span>
              {objectLatestIncomeStatement ? (
                <>
                  <a
                    href={downloadAppAsset.call(
                      this,
                      objectLatestIncomeStatement
                    )}
                    target="_blank"
                    className="file"
                  >
                    {t("DOWNLOAD_ATTACHMENT")}
                  </a>
                </>
              ) : (
                t("NOT_SPECIFIED")
              )}
            </span>
          </div>
        </div>
        <div className="viewAppItem__bodyRow">
          <div className="viewAppItem__bodyRow__left">
            <span>{t("APP_PURCHASER_COMPANY_LATEST_BALANCE_SHEET")}</span>
          </div>
          <div className="viewAppItem__bodyRow__right">
            <span>
              {purchaserCompanyLatestBalanceSheet ? (
                <>
                  <a
                    href={downloadAppAsset.call(
                      this,
                      purchaserCompanyLatestBalanceSheet
                    )}
                    target="_blank"
                    className="file"
                  >
                    {t("DOWNLOAD_ATTACHMENT")}
                  </a>
                </>
              ) : (
                t("NOT_SPECIFIED")
              )}
            </span>
          </div>
        </div>
        <div className="viewAppItem__bodyRow">
          <div className="viewAppItem__bodyRow__left">
            <span>{t("APP_PURCHASER_COMPANY_LATEST_INCOME_STATEMENT")}</span>
          </div>
          <div className="viewAppItem__bodyRow__right">
            <span>
              {purchaserCompanyLatestIncomeStatement ? (
                <>
                  <a
                    href={downloadAppAsset.call(
                      this,
                      purchaserCompanyLatestIncomeStatement
                    )}
                    target="_blank"
                    className="file"
                  >
                    {t("DOWNLOAD_ATTACHMENT")}
                  </a>
                </>
              ) : (
                t("NOT_SPECIFIED")
              )}
            </span>
          </div>
        </div>
        <div className="viewAppItem__bodyRow">
          <div className="viewAppItem__bodyRow__left">
            <span>{t("APP_PURCHASER_GUARANTEES_AVAILABLE")}</span>
          </div>
          <div className="viewAppItem__bodyRow__right">
            <span>
              {purchaserGuaranteesAvailable
                ? purchaserGuaranteesAvailable.split(",").map((item, key) => (
                    <span className="tag" key={key}>
                      {item}
                    </span>
                  ))
                : t("NOT_SPECIFIED")}
            </span>
          </div>
        </div>
        <div className="viewAppItem__bodyRow">
          <div className="viewAppItem__bodyRow__left">
            <span>{t("APP_PURCHASER_GUARANTEES_DESCRIPTION")}</span>
          </div>
          <div className="viewAppItem__bodyRow__right">
            <span>{purchaserGuaranteesDescription}</span>
          </div>
        </div>
        <div className="viewAppItem__bodyRow">
          <div className="viewAppItem__bodyRow__left">
            <span>{t("APP_EXPERIENCE")}</span>
          </div>
          <div className="viewAppItem__bodyRow__right">
            <span>{experience}</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default BusinessAcquisition;
