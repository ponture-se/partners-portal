import React, { useState } from "react";
import "./styles.scss";

export default function Modal(props) {
  return (
    <div className="modal-back animated fadeIn">
      <div
        className={
          "modal " +
          (props.size === "large"
            ? "lg"
            : props.size === "medium"
            ? "md"
            : props.size === "small"
            ? "sm"
            : "md")
        }
      >
        {props.children}
      </div>
    </div>
  );
}
