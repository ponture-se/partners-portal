import React, { useState, useEffect } from "react";
import { downloadAppAsset } from "api/main-api";
import SafeValue from "utils/SafeValue";
import separateNumberByChar from "utils/separateNumberByChar";
import FileBox from "components/FileBox";
import { t } from "services/languageManager";
const RealEstate = props => {
  const RE = props.data.opportunityDetails.real_estate;
  const Attachments = SafeValue(
    props,
    "data.opportunityAttachments",
    "array",
    []
  );
  // additional_details: null;

  //fields
  const realEstateType = SafeValue(
    RE,
    "real_estate_type",
    "string",
    t("NOT_SPECIFIED")
  );
  const realEstateSize = SafeValue(
    RE,
    "real_estate_size",
    "string",
    t("NOT_SPECIFIED")
  );
  const realEstatePrice = separateNumberByChar(
    String(SafeValue(RE, "real_estate_price", "nubmer", "0"))
  );
  const realEstateUsageCategory = SafeValue(
    RE,
    "real_estate_usage_category",
    "array",
    []
  );
  const realEstateTaxationValue = separateNumberByChar(
    String(SafeValue(RE, "real_estate_taxation_value", "number", "0"))
  );
  const realEstateAddress = SafeValue(
    RE,
    "real_estate_address",
    "string",
    t("NOT_SPECIFIED")
  );
  const realEstateCity = SafeValue(
    RE,
    "real_estate_city",
    "string",
    t("NOT_SPECIFIED")
  );
  const realEstateLink = SafeValue(
    RE,
    "real_estate_link",
    "string",
    t("NOT_SPECIFIED")
  );
  const realEstateDescription = SafeValue(
    RE,
    "real_estate_description",
    "string",
    t("NOT_SPECIFIED")
  );
  const ownInvestmentAmount = separateNumberByChar(
    String(SafeValue(RE, "own_investment_amount", "number", "0"))
  );
  const description = SafeValue(
    RE,
    "description",
    "string",
    t("NOT_SPECIFIED")
  );
  const realEstateDocument = SafeValue(
    RE,
    "real_estate_document",
    "string",
    ""
  );
  return (
    <>
      <div className="viewAppItem__header" style={{ margin: "20px 0px 0 0px" }}>
        <span className="viewAppItem__title">{t("BL_REALESTATE_INFO")}</span>
      </div>
      <div className="RE-info-body">
        <div className="viewAppItem__bodyRow">
          <div className="viewAppItem__bodyRow__left">
            <span>{t("BL_REALESTATE_TYPE")}</span>
          </div>
          <div className="viewAppItem__bodyRow__right">
            <span className="tag">{realEstateType}</span>
          </div>
        </div>
        <div className="viewAppItem__bodyRow">
          <div className="viewAppItem__bodyRow__left">
            <span>{t("BL_REALESTATE_SIZE")}</span>
          </div>
          <div className="viewAppItem__bodyRow__right">
            <span>{realEstateSize}</span>
          </div>
        </div>
        <div className="viewAppItem__bodyRow">
          <div className="viewAppItem__bodyRow__left">
            <span>{t("BL_REALESTATE_PRICE")}</span>
          </div>
          <div className="viewAppItem__bodyRow__right">
            <span>{realEstatePrice}</span>
          </div>
        </div>
        <div className="viewAppItem__bodyRow">
          <div className="viewAppItem__bodyRow__left">
            <span>{t("BL_REALESTATE_USAGE_CATEGORY")}</span>
          </div>
          <div className="viewAppItem__bodyRow__right">
            <span>
              {realEstateUsageCategory.length > 0
                ? realEstateUsageCategory.map((item, key) => (
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
            <span>{t("BL_REALESTATE_TAXATION_VALUE")}</span>
          </div>
          <div className="viewAppItem__bodyRow__right">
            <span>{realEstateTaxationValue + " Kr"}</span>
          </div>
        </div>
        <div className="viewAppItem__bodyRow">
          <div className="viewAppItem__bodyRow__left">
            <span>{t("BL_REALESTATE_ADDRESS")}</span>
          </div>
          <div className="viewAppItem__bodyRow__right">
            <span>{realEstateAddress}</span>
          </div>
        </div>
        <div className="viewAppItem__bodyRow">
          <div className="viewAppItem__bodyRow__left">
            <span>{t("BL_REALESTATE_CITY")}</span>
          </div>
          <div className="viewAppItem__bodyRow__right">
            <span>{realEstateCity}</span>
          </div>
        </div>
        <div className="viewAppItem__bodyRow">
          <div className="viewAppItem__bodyRow__left">
            <span>{t("BL_REALESTATE_LINK")}</span>
          </div>
          <div className="viewAppItem__bodyRow__right">
            <span>{realEstateLink}</span>
          </div>
        </div>
        <div className="viewAppItem__bodyRow">
          <div className="viewAppItem__bodyRow__left">
            <span>{t("BL_REALESTATE_DESCRIPTION")}</span>
          </div>
          <div className="viewAppItem__bodyRow__right">
            <span>{realEstateDescription}</span>
          </div>
        </div>
        <div className="viewAppItem__bodyRow">
          <div className="viewAppItem__bodyRow__left">
            <span>{t("BL_OWN_INVESTMENT_AMOUNT")}</span>
          </div>
          <div className="viewAppItem__bodyRow__right">
            <span>{ownInvestmentAmount}</span>
          </div>
        </div>
        <div className="viewAppItem__bodyRow">
          <div className="viewAppItem__bodyRow__left">
            <span>{t("BL_PURCHASE_DESCRIPTION")}</span>
          </div>
          <div className="viewAppItem__bodyRow__right">
            <span>{description}</span>
          </div>
        </div>
        <div className="viewAppItem__bodyRow">
          <div className="viewAppItem__bodyRow__left">
            <span>{t("BL_REALESTATE_FILE")}</span>
          </div>
          <div className="viewAppItem__bodyRow__right">
            <span>
              {realEstateDocument ? (
                <>
                  {Attachments.map(
                    (item, idx) =>
                      item.id === realEstateDocument && (
                        <FileBox
                          idx={idx}
                          title={item.title}
                          type={item.fileExtension}
                          src={downloadAppAsset.call(this, item.id)}
                        />
                      )
                  )}
                </>
              ) : (
                t("NOT_SPECIFIED")
              )}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default RealEstate;
