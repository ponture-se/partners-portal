import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
//
import { t } from "../../services/languageManager";
//
import "./styles.scss";
import Item from "./item";
import SquareSpinner from "components/SquareSpinner";
import { Empty, Wrong } from "components/Commons/ErrorsComponent";
import IssueOfferModal from "./../IssueOffer";
import OfferDetail from "./Detail";
//
import {
  loadMyOffers,
  resetOffersState
} from "services/redux/offer/myOffers/actions";

const MyOffers = props => {
  const [tab, changeTab] = useState(1);
  const [selectedOffer, setOffer] = useState();
  const [issueOfferVisibility, toggleIssueOffer] = useState();
  const [issueOfferModalMode, setIssueOfferModalMode] = useState();

  useEffect(() => {
    if (props.loadMyOffers) props.loadMyOffers();
    return () => {
      if (props.resetOffersState) props.resetOffersState();
    };
  }, []);

  function handleViewOffer(offer) {
    // changeTab(2);
    // setOffer(offer);
    setIssueOfferModalMode("view");
    toggleIssueOffer(true);
    setOffer(offer);
  }
  function handleBack() {
    changeTab(1);
  }

  function handleEditOffer(offer) {
    setIssueOfferModalMode("update");
    toggleIssueOffer(true);
    setOffer(offer);
  }
  function handleCloseIssueOffer() {
    toggleIssueOffer(false);
  }
  return (
    <div className="myOffers">
      {props.loading ? (
        <div className="page-loading">
          <SquareSpinner />
          <h2>{t("NEW_APPS_LOADING_TEXT")}</h2>
        </div>
      ) : props.error ? (
        <div className="page-list-error animated fadeIn">
          <Wrong />
          <h2>{props.error && props.error.title}</h2>
          <span>{props.error && props.error.message}</span>
        </div>
      ) : !props.data || props.data.length === 0 ? (
        <div className="page-empty-list animated fadeIn">
          <Empty />
          <h2>{t("NEW_APPS_EMPTY_LIST_TITLE")}</h2>
          <span>{t("OFFERS_EMPTY_LIST_MSG")}</span>
        </div>
      ) : tab === 1 ? (
        props.data.map(offer => (
          <Item
            item={offer}
            onViewDetailClicked={handleViewOffer}
            onEditClicked={handleEditOffer}
          />
        ))
      ) : tab === 2 ? (
        selectedOffer && (
          <OfferDetail
            item={selectedOffer}
            onBackClicked={handleBack}
            onEditClicked={handleEditOffer}
          />
        )
      ) : null}
      {issueOfferVisibility && (
        <IssueOfferModal
          updateMode={issueOfferModalMode === "update" ? true : false}
          viewMode={issueOfferModalMode === "view" ? true : false}
          offer={selectedOffer}
          isOpen={issueOfferVisibility}
          onClose={handleCloseIssueOffer}
        />
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    loading: state.offer
      ? state.offer.myOffersReducer
        ? state.offer.myOffersReducer.loading
        : null
      : null,
    data: state.offer
      ? state.offer.myOffersReducer
        ? state.offer.myOffersReducer.data
        : null
      : null,
    error: state.offer
      ? state.offer.myOffersReducer
        ? state.offer.myOffersReducer.error
        : null
      : null
  };
}

const mapDispatchToProps = {
  loadMyOffers,
  resetOffersState
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyOffers);
