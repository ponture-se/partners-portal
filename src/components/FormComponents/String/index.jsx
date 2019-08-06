import React, { useState, useEffect, useMemo, useRef } from "react";
import PropTypes from "prop-types";
import { t, currentLangName } from "./../../../services/languageManager";
import "./styles.scss";

var url_pattern = /^(http[s]?|ftp|torrent|image|irc):\/\/(-\.)?([^\s\/?\.#-]+\.?)+(\/[^\s]*)?$/i;

const StringInput = props => {
  const inputRef = useRef(null);
  const { field, formData } = props;
  const [error, setError] = useState();
  const [input, setInput] = useState("");

  useMemo(() => {
    if (field.isRequired === true) if (props.init) props.init(field.name, true);
  }, []);
  useEffect(() => {
    if (field.isFocus) {
      inputRef.current.focus();
    }
  }, []);
  // set value to input
  useEffect(() => {
    if (formData && formData[field.name]) {
      setInput(props.formData[field.name]);
    } else {
      if (field.defaultValue) {
        setInput(field.defaultValue);
        setValueToParentForm(field.defaultValue);
      } else setInput("");
    }
  }, [formData]);

  function setValueToParentForm(inputValue) {
    if (props.onChangeValue) {
      let value = inputValue;
      let isValid = true;
      let e;
      const char_count = inputValue.length;
      if (field.isRequired && char_count === 0) {
        isValid = false;
        e = t("STRING_IS_REQUIRED", field.title[currentLangName]);
      }
      if (isValid && field.appearance === "email") {
        if (!validateEmail(inputValue)) {
          isValid = false;
          e = t("STRING_INCORRECT_EMAIL");
        }
      }
      if (isValid && field.appearance === "url") {
        if (!inputValue.match(url_pattern)) {
          isValid = false;
          e = t("STRING_INCORRECT_URL");
        }
      }
      if (isValid && field.appearance === "phoneNumber") {
        if (!isPhoneNumber(inputValue)) {
          isValid = false;
          e = t("STRING_INCORRECT_PHONE_NUMBER");
        }
      }
      if (isValid && field.limit) {
        const type = field.limit.type;
        const min = field.limit.min ? parseInt(field.limit.min) : 0;
        const max = field.limit.max ? parseInt(field.limit.max) : 1000000;
        if (type === "between") {
          if (char_count >= min && char_count <= max) {
          } else {
            isValid = false;
            e = t("STRING_INCORRECT_MIN_MAX", min, max);
          }
        } else if (type === "atLeast") {
          if (char_count < min) {
            isValid = false;
            e = t("STRING_INCORRECT_MIN", min);
          }
        } else {
          if (char_count < min) {
            isValid = false;
            e = t("STRING_INCORRECT_MAX", max);
          }
        }
      }
      props.onChangeValue(field, value, isValid);
      setError(e);
    }
  }
  function handleOnChange(e) {
    setInput(e.target.value);
    setValueToParentForm(e.target.value);
  }
  return (
    <div className={"formInput " + (error ? "--invalid" : "")}>
      <div className="formInput__header">
        <div className="formInput__header__left">
          <span className="elementTitle">{field.title}</span>
        </div>
        <div className="formInput__header__center" />
        <div className="formInput__header__right" />
      </div>
      <div className="formInput__body">
        <div className="formInput__body__left" />
        <div className="formInput__body__center">
          {field.isMultiLine !== undefined && field.isMultiLine ? (
            <textarea
              ref={inputRef}
              className="element textArea"
              placeholder={field.title[currentLangName]}
              value={input}
              onChange={handleOnChange}
              readOnly={props.viewMode}
            />
          ) : (
            <input
              ref={inputRef}
              type={field.appearance ? field.appearance : "text"}
              className="element --medium"
              placeholder={field.title}
              value={input}
              onChange={handleOnChange}
              readOnly={props.viewMode}
              minLength={
                field.limit &&
                (field.limit.type === "between" ||
                  field.limit.type === "atLeast") &&
                field.limit.min
              }
              maxLength={
                field.limit &&
                (field.limit.type === "between" ||
                  field.limit.type === "noMoreThan") &&
                field.limit.max
              }
            />
          )}
        </div>
        <div className="formInput__body__right" />
      </div>
      <div className="formInput__footer">
        <div className="formInput__footer__left">
          {!error ? (
            <span className="elementInfo">{field.description}</span>
          ) : (
            <span className="elementInfo">{error}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default StringInput;

// propTypes
StringInput.propTypes = {
  field: PropTypes.object.isRequired,
  formData: PropTypes.object.isRequired
};

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
function isPhoneNumber(phoneNumber) {
  var p = /^(\+98|0098|0)?9\d{9}$/;
  return p.test(phoneNumber);
}
