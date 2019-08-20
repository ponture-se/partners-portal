import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Modali, { useModali } from "modali";
//
import { t } from "../../services/languageManager";
//
import "./styles.scss";
import Item from "./item";
import SquareSpinner from "components/SquareSpinner";
import { Empty, Wrong } from "components/Commons/ErrorsComponent";
import IssueOfferModal from "./../IssueOffer";
import ViewApplicationModal from "./../ViewApplication";
// import OfferDetail from "./Detail";
//
import {
  loadMyOffers,
  resetOffersState,
  _cancelOffer
} from "services/redux/offer/myOffers/actions";

const MyOffers = props => {
  const [tab, changeTab] = useState(1);
  const [selectedOffer, setOffer] = useState();
  const [issueOfferVisibility, toggleIssueOffer] = useState();
  const [issueOfferModalMode, setIssueOfferModalMode] = useState();
  const [viewAppModalVisibility, toggleViewApp] = useState();

  const [completeExample, toggleCompleteModal] = useModali({
    animated: true,
    title: t("ARE_YOU_SURE"),
    message: t("OFFER_CANCEL_ALERT_MSG"),
    buttons: [
      <Modali.Button
        label={t("CANCEL")}
        isStyleCancel
        onClick={() => toggleCompleteModal()}
      />,
      <Modali.Button
        label={t("DELETE")}
        isStyleDestructive
        onClick={() => {
          props._cancelOffer(
            selectedOffer,
            () => {
              toggleCompleteModal();
            },
            () => {
              toggleCompleteModal();
            }
          );
        }}
      />
    ]
  });

  useEffect(() => {
    if (props.loadMyOffers) props.loadMyOffers();
    return () => {
      if (props.resetOffersState) props.resetOffersState();
    };
  }, []);
  useEffect(() => {
    if (props.submittedIssueOffer || props.cancelOfferSuccess) {
      if (props.loadMyOffers) props.loadMyOffers();
    }
  }, [props.submittedIssueOffer, props.cancelOfferSuccess]);

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
  function handleCancelOffer(offer) {
    if (props._cancelOffer) {
      setOffer(offer);
      toggleCompleteModal();
    }
  }
  function handleViewApplication(offer) {
    setOffer(offer);
    toggleViewApp(true);
  }
  function handleCloseViewAppModal() {
    toggleViewApp(false);
  }
  return (
    <div className="myOffers">
      <Modali.Modal {...completeExample} />
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
            key={offer.offer_id}
            item={offer}
            onViewOfferClicked={handleViewOffer}
            onEditClicked={handleEditOffer}
            onCancelClicked={handleCancelOffer}
            onViewAppClicked={handleViewApplication}
          />
        ))
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
      {viewAppModalVisibility && (
        <ViewApplicationModal
          isOpen={viewAppModalVisibility}
          onClose={handleCloseViewAppModal}
          oppId={selectedOffer && selectedOffer.opportunityData.opportunityID}
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
      : null,
    submittedIssueOffer: state.offer
      ? state.offer.issueOfferReducer
        ? state.offer.issueOfferReducer.success
        : null
      : null,
    cancelOfferSuccess: state.offer
      ? state.offer.myOffersReducer
        ? state.offer.myOffersReducer.cancel_success
        : null
      : null
  };
}

const mapDispatchToProps = {
  loadMyOffers,
  resetOffersState,
  _cancelOffer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyOffers);
