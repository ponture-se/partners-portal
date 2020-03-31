import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import CircleSpinner from "./../CircleSpinner";
import "./styles.scss";

let toggleAlert = props => [props];

const Alert = props => {
  const [show, _toggleAlert] = useState(false);
  const [info, setInfo] = useState();
  const [ajaxSpinner, toggleSpinner] = useState(false);
  // const extraComponent = { position: "mamad", component: false };
  const [extraComponent, setExtraComponent] = useState({});
  useEffect(() => {
    if (show) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "auto";
  }, [show]);
  useEffect(() => {
    if (info)
      setExtraComponent({
        ...info.extraComponent,
        component: () => (
          <info.extraComponent.component
            parentStates={{
              show: show,
              toggleAlert: _toggleAlert,
              info: info,
              setInfo: setInfo,
              ajaxSpinner: ajaxSpinner,
              toggleSpinner: toggleSpinner,
              handleOkBtnClicked: handleOkBtnClicked
            }}
          />
        )
      });
  }, [info]);
  toggleAlert = props => {
    if (props) {
      //construct alert
      setInfo(props);
      _toggleAlert(prev => !prev);
    } else {
      //destroy alert
      setInfo();
      _toggleAlert();
    }
  };
  function handleCloseModal() {
    if (!ajaxSpinner) _toggleAlert(prev => !prev);
  }
  function handleOkBtnClicked(data) {
    if (!info.func) {
      _toggleAlert(prev => !prev);
    } else {
      toggleSpinner(true);
      let f = info.func();
      if (f.onOk)
        f.onOk(result => {
          toggleSpinner(false);
          if (info.onSuccess) {
            info.onSuccess();
          }
          _toggleAlert(prev => !prev);
        });
      if (f.onServerError)
        f.onServerError(result => {
          toggleSpinner(false);
          if (info.onServerError) {
            info.onServerError();
          }
          _toggleAlert(prev => !prev);
        });
      if (f.onBadRequest)
        f.onBadRequest(result => {
          toggleSpinner(false);
          if (info.onServerError) {
            info.onServerError();
          }
          _toggleAlert(prev => !prev);
        });
      if (f.notFound)
        f.notFound(result => {
          toggleSpinner(false);
          if (info.onServerError) {
            info.onServerError();
          }
          _toggleAlert(prev => !prev);
        });
      if (f.unAuthorized)
        f.unAuthorized(result => {
          toggleSpinner(false);
          if (info.unAuthorized) {
            info.unAuthorized();
          }
          _toggleAlert(prev => !prev);
        });
      if (f.unKnownError)
        f.unKnownError(result => {
          toggleSpinner(false);
          if (info.unKnownError) {
            info.unKnownError();
          }
          _toggleAlert(prev => !prev);
        });
      if (f.call) f.call(data);
    }
  }
  return show
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="alert" style={info.style ? info.style : {}}>
            <div className="alert__bg" onClick={handleCloseModal} />
            <div className="alert__content animated fadeInUp faster">
              <div className="alert__header">
                <span className="title">{info.title}</span>
                <span
                  className="icon-cross closeIcn"
                  onClick={handleCloseModal}
                ></span>
                {extraComponent.component &&
                  extraComponent.position === "header" && (
                    <extraComponent.component />
                  )}
              </div>
              <div className="alert__body">
                <span>{info.description}</span>
                {extraComponent.component &&
                  extraComponent.position === "body" && (
                    <extraComponent.component />
                  )}
              </div>
              <div className="alert__footer">
                <CircleSpinner
                  show={ajaxSpinner}
                  color="black"
                  bgColor="lightgray"
                />
                &nbsp; &nbsp;
                <button
                  className="btn --light"
                  onClick={handleCloseModal}
                  disabled={ajaxSpinner}
                >
                  {info.cancelBtnText}
                </button>
                &nbsp;
                <button
                  className="btn --primary"
                  onClick={() => handleOkBtnClicked(info.data)}
                  disabled={ajaxSpinner}
                  autoFocus
                >
                  {info.okBtnText}
                </button>
                &nbsp;
                {extraComponent.component &&
                  extraComponent.position === "footer" && (
                    <extraComponent.component />
                  )}
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
};

export { Alert, toggleAlert };
