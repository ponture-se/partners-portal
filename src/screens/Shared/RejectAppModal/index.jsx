import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { getRejectReasons, rejectApp } from "api/main-api";
import { rejectApplication } from "services/redux/application/singleApp/actions";
import { t } from "services/languageManager";
import Modal from "components/Modal";
import CircleSpinner from "components/CircleSpinner";
import Wrong from "components/Commons/ErrorsComponent/Wrong";
import Empty from "components/Commons/ErrorsComponent/EmptySVG";
import Item from "./item";
import "./styles.scss";

function RejectApp(props) {
  let didCancel = false;
  const activateApiCall = props.activateApiCall ? props.activateApiCall : true;
  const { app } = props;
  const [spinner, toggleSpinner] = useState(true);
  const [reasons, setReasons] = useState();
  const [error, setError] = useState();
  const [selectedReasons, setSelectedReasons] = useState();
  const [isOtherSelected, toggleOtherInput] = useState();
  const [otherText, setOtherText] = useState();
  const [otherError, toggleOtherError] = useState();
  const [btnSpinner, toggleBtnSpinner] = useState();
  const [_rejectApp, _setRejectApp] = useState(() =>
    props.customApiFunc ? props.customApiFunc : rejectApp
  );
  useEffect(() => {
    getRejectReasons()
      .onOk((result) => {
        if (!didCancel) {
          toggleSpinner(false);
          setReasons(result);
        }
      })
      .unKnownError(() => {
        if (!didCancel) {
          toggleSpinner(false);
          setError(true);
        }
      })
      .call();
    return () => {
      didCancel = true;
    };
  }, []);
  function handleOtherChanged(e) {
    setOtherText(e.target.value);
  }
  function closeModal() {
    if (!btnSpinner && props.onClose) props.onClose();
  }
  function handleChangeReasons(item) {
    let r = selectedReasons ? [...selectedReasons] : [];
    if (r.indexOf(item.API_Name) > -1) {
      const rr = r.filter((res) => res !== item.API_Name);
      setSelectedReasons(rr);
      if (item.API_Name.toLowerCase() === "other") toggleOtherInput(false);
    } else {
      r.push(item.API_Name);
      setSelectedReasons(r);
      if (item.API_Name.toLowerCase() === "other") toggleOtherInput(true);
    }
  }
  function handleRejectClicked() {
    const _extraData = props.extraData ? props.extraData : {};
    if (isOtherSelected && (!otherText || otherText.length === 0)) {
      toggleOtherError(true);
    } else {
      if (isOtherSelected) toggleOtherError(false);
      toggleBtnSpinner(true);
      const obj = {
        ..._extraData,
        partnerId: props.userInfo ? props.userInfo.partnerId : null,
        oppId: app ? app.opportunityID : null,
        spoId: app ? app.spoID : null,
        closeReasons: selectedReasons,
        closeDesc: otherText ? otherText : "",
      };
      if (activateApiCall) {
        _rejectApp()
          .onOk((result) => {
            if (!didCancel) {
              toast.success(t("APP_DETAIL_REJECT_SUCCESS"));
              toggleBtnSpinner(false);
              closeModal();
              if (props.onSuccess) props.onSuccess(obj);
            }
          })
          .unKnownError(() => {
            if (!didCancel) {
              toast.error(t("UNKNOWN_ERROR"));
              toggleBtnSpinner(false);
            }
          })
          .call(obj);
      } else {
        if (props.onSuccess) props.onSuccess(obj);
      }
    }
  }
  return (
    <Modal size="lg" onClose={closeModal}>
      <div className="rejectApp">
        <div className="rejectApp__header">
          <div className="title">
            <span>{t("APP_REJECT_MODAL_TITLE")}</span>
            {app && (
              <span>
                {app.Name
                  ? app.Name + " - " + app.opportunityNumber
                  : app.opportunityNumber}
              </span>
            )}
          </div>
          <div className="closeIcon" onClick={closeModal}>
            <span className="icon-cross" />
          </div>
        </div>
        <div className="rejectApp__body">
          {spinner ? (
            <div className="spinner">
              <CircleSpinner
                show={true}
                size="large"
                bgColor="rgb(23, 145, 164)"
              />
              <h5>{t("APP_REJECT_MODAL_LOADING")}</h5>
            </div>
          ) : error ? (
            <div className="page-list-error animated fadeIn">
              <Wrong />
              <h4>{t("UNKNOWN_ERROR")}!</h4>
              <span>{t("UNKNOWN_ERROR_MSG")}</span>
            </div>
          ) : !reasons || reasons.length === 0 ? (
            <div className="page-empty-list animated fadeIn">
              <Empty />
              <h2>{t("EMPTY_LIST")}</h2>
              <span>{t("EMPTY_LIST_MSG")}</span>
            </div>
          ) : (
            <div className="reasons">
              <span>{t("APP_REJECT_MODAL_BODY_TITLE")}</span>
              <div className="reasons__body">
                {reasons.map((item) => (
                  <Item
                    data={item}
                    key={item.Id}
                    onChange={handleChangeReasons}
                  />
                ))}
              </div>
              {isOtherSelected && (
                <div
                  className={
                    "animated fadeIn formInput " +
                    (otherError ? "--invalid" : "")
                  }
                >
                  <div className="formInput__header">
                    <div className="formInput__header__left">
                      <span className="elementTitle">{t("DESCRIPTION")}</span>
                    </div>
                  </div>
                  <div className="formInput__body">
                    <textarea
                      type="text"
                      className="element textArea"
                      placeholder={t(
                        "APP_REJECT_MODAL_OTHER_INPUT_PLACEHOLDER"
                      )}
                      onChange={handleOtherChanged}
                      value={otherText}
                    />
                  </div>
                  <div className="formInput__footer">
                    <div className="formInput__footer__left">
                      <span className="elementInfo">
                        {otherError && t("ITS_REQUIRED")}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        {reasons && reasons.length > 0 && (
          <div className="rejectApp__footer">
            <button className="btn --light" onClick={closeModal}>
              {t("CANCEL")}
            </button>
            <button
              className="btn --success"
              disabled={!selectedReasons || selectedReasons.length === 0}
              onClick={handleRejectClicked}
            >
              {btnSpinner ? <CircleSpinner show={true} /> : t("REJECT")}
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
}

function mapStateToProps(state) {
  return {
    userInfo: state.authReducer ? state.authReducer.userInfo : {},
  };
}

const mapDispatchToProps = {
  rejectApplication,
};

export default connect(mapStateToProps, mapDispatchToProps)(RejectApp);
