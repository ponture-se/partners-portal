import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
//
import { t } from "services/languageManager";
import {
  _cancelOffer,
  _signLoanAsFunded,
} from "services/redux/offer/myOffers/actions";
//
import "./styles.scss";
import Item from "./item";
import SquareSpinner from "components/SquareSpinner";
import { Empty, Wrong } from "components/Commons/ErrorsComponent";
//
import { cancelOffer, getAcceptedOffers } from "api/main-api";
import IssueOfferModal from "./../IssueOffer";
import ViewApplicationModal from "./../ViewApplication";
import RejectAppModal from "./../Shared/RejectAppModal";
import FundedAppModal from "./../Shared/FundedAppModal/";

const AcceptedOffers = (props) => {
  let didCancel = false;
  const [spinner, toggleSpinner] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [issueOfferVisibility, toggleIssueOffer] = useState();
  const [selectedOffer, setOffer] = useState();
  const [viewAppModalVisibility, toggleViewApp] = useState();
  const [rejectAppVisibility, handleCloseRejectAppModal] = useState({
    visibility: false,
    offerId: "",
    callback: () => {},
  });
  const [fundedAppVisibility, toggleFundedAppVisibility] = useState();

  useEffect(() => {
    _getAcceptedOffer();
    return () => {
      didCancel = true;
    };
  }, []);
  function _getAcceptedOffer() {
    toggleSpinner(true);
    getAcceptedOffers()
      .onOk((result) => {
        toggleSpinner(false);
        if (result && !didCancel) {
          setData(result);
        }
      })
      .onServerError((result) => {
        if (!didCancel) {
          toggleSpinner(false);
          setError({
            title: t("INTERNAL_SERVER_ERROR"),
            message: t("INTERNAL_SERVER_ERROR_MSG"),
          });
        }
      })
      .onBadRequest((result) => {
        if (!didCancel) {
          toggleSpinner(false);
          setError({
            title: t("BAD_REQUEST"),
            message: t("BAD_REQUEST_MSG"),
          });
        }
      })
      .unAuthorized((result) => {
        if (!didCancel) {
          toggleSpinner(false);
          setError({
            title: t("UNKNOWN_ERROR"),
            message: t("UNKNOWN_ERROR_MSG"),
          });
        }
      })
      .notFound((result) => {
        if (!didCancel) {
          toggleSpinner(false);
          setError({
            title: t("NOT_FOUND"),
            message: t("NOT_FOUND_MSG"),
          });
        }
      })
      .unKnownError((result) => {
        if (!didCancel) {
          toggleSpinner(false);
          setError({
            title: t("UNKNOWN_ERROR"),
            message: t("UNKNOWN_ERROR_MSG"),
          });
        }
      })
      .onRequestError((result) => {
        if (!didCancel) {
          toggleSpinner(false);
          setError({
            title: t("ON_REQUEST_ERROR"),
            message: t("ON_REQUEST_ERROR_MSG"),
          });
        }
      })
      .call();
  }
  function handleViewOffer(offer) {
    setOffer(offer);
    toggleIssueOffer(true);
  }
  function handleCloseIssueOffer() {
    toggleIssueOffer(false);
  }
  function handleViewApplication(offer) {
    setOffer(offer);
    toggleViewApp(true);
  }
  function handleCloseViewAppModal() {
    toggleViewApp(false);
  }
  function handleCancelOffer(offer) {
    if (props._cancelOffer) {
      props._cancelOffer(
        offer,
        typeof handleCloseRejectAppModal === "function" &&
          handleCloseRejectAppModal,
        () => {
          _getAcceptedOffer();
        }
      );
    }
  }
  function handleLoanAsFunded(offer) {
    if (props._signLoanAsFunded) {
      setOffer(offer);
      props._signLoanAsFunded(offer, () => _getAcceptedOffer());
    }
  }
  function handleFundedAppClicked(offer) {
    setOffer(offer);
    toggleFundedAppVisibility(true);
  }
  function handleCloseFundedAppModal(isSuccess) {
    toggleFundedAppVisibility(false);
    if (isSuccess) {
      _getAcceptedOffer();
    }
  }
  return (
    <div className="acceptedOffers">
      {spinner ? (
        <div className="page-loading">
          <SquareSpinner />
          <h2>{t("NEW_APPS_LOADING_TEXT")}</h2>
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
          <h2>{t("NEW_APPS_EMPTY_LIST_TITLE")}</h2>
          <span>{t("OFFERS_EMPTY_LIST_MSG")}</span>
        </div>
      ) : (
        data.map((offer) => (
          <Item
            key={offer.Id}
            item={offer}
            onViewOfferClicked={handleViewOffer}
            onViewAppClicked={handleViewApplication}
            onCancelClicked={handleCancelOffer}
            toggleReasonsModal={handleCloseRejectAppModal}
            reasonsModal={handleCloseRejectAppModal}
            onFundedAppClicked={handleFundedAppClicked}
          />
        ))
      )}
      {issueOfferVisibility && (
        <IssueOfferModal
          viewMode={true}
          offer={selectedOffer}
          isOpen={issueOfferVisibility}
          onClose={handleCloseIssueOffer}
        />
      )}
      {viewAppModalVisibility && (
        <ViewApplicationModal
          isOpen={viewAppModalVisibility}
          onClose={handleCloseViewAppModal}
          spoId={selectedOffer && selectedOffer.Supplier_Partner_Opportunity}
        />
      )}
      {rejectAppVisibility && rejectAppVisibility.visibility && (
        <RejectAppModal
          onClose={handleCloseRejectAppModal}
          activateApiCall={false}
          onSuccess={() => {
            rejectAppVisibility.callback();
            _getAcceptedOffer();
          }}
          customApiFunc={cancelOffer}
          extraData={{
            offerId: rejectAppVisibility.offerId,
            rejectSpo: true,
          }}
        />
      )}
      {fundedAppVisibility && (
        <FundedAppModal
          onClose={handleCloseFundedAppModal}
          offer={selectedOffer}
        />
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = {
  _cancelOffer,
  _signLoanAsFunded,
};

export default connect(null, mapDispatchToProps)(AcceptedOffers);
