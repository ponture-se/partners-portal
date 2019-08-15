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
    <div className="modal-back">
      <div className={"modal animated fadeIn " + (size ? size : "md")}>
        {props.children}
      </div>
    </div>
  );
}
