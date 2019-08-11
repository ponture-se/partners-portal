import React, { useState, useCallback, useEffect, useMemo } from "react";
//
import { t, currentLangName } from "services/languageManager";
import { getProductsList } from "api/main-api";
import SquareSpinner from "components/SquareSpinner";
import { Empty, Wrong } from "components/Commons/ErrorsComponent";
import "./styles.scss";
import Item from "./Item";

const Products = props => {
  const [spinner, toggleSpinner] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [selectedProduct, setProduct] = useState();

  useEffect(() => {
    let didCancel = false;
    getProductsList()
      .onOk(result => {
        toggleSpinner(false);
        if (!didCancel) {
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
    return () => {
      didCancel = true;
    };
  }, []);

  function handleSelectedProduct(p) {
    setProduct(p);
    if (props.onSelectProduct) {
      props.onSelectProduct(p);
    }
  }

  return (
    <div className="products">
      {spinner ? (
        <div className="page-loading">
          <SquareSpinner />
          <h2>{t("ISSUE_OFFER_PRODUCTS_LOADING_TEXT")}</h2>
        </div>
      ) : error ? (
        <div className="page-list-error animated fadeIn">
          <Wrong />
          <h2>{error.title}</h2>
          <span>{error.message}</span>
        </div>
      ) : !data || data.length === 0 ? (
        <div className="page-empty-list animated fadeIn">
          <Empty />
          <h2>{t("ISSUE_OFFER_PRODUCTS_EMPTY_TITLE")}</h2>
          <span>{t("ISSUE_OFFER_PRODUCTS_EMPTY_INFO")}</span>
        </div>
      ) : (
        <div className="products__content">
          <div className="formInput">
            <div className="formInput__body">
              <input
                type="text"
                className="element"
                placeholder={t("Search in new products...")}
              />
            </div>
          </div>
          <div className="products__items">
            {data.map((p, index) => (
              <Item
                key={p.Id}
                item={p}
                index={index}
                selectedProduct={selectedProduct}
                onSelectProduct={handleSelectedProduct}
              />
            ))}
          </div>
        </div>
      )}
    </div>
 
 );
};

export default Products;
