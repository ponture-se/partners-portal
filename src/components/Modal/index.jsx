import React, { useEffect } from "react";
import "./styles.scss";

export default function Modal(props) {
  const { size } = props;
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="modal-back animated fadeIn">
      <div className={"modal " + (size ? size : "md")}>{props.children}</div>
    </div>
  );
}
