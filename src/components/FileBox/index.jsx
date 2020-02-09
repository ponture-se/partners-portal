import React from "react";
import "./style.scss";
const FileBox = props => {
  const { title, src, idx } = props;
  const type = props.type.toLowerCase();
  let source = "";
  try {
    source = require(`./assets/${type}.svg`);
  } catch (err) {
    source = require(`./assets/file.svg`);
  }
  return (
    <div className="fileBox" key={idx}>
      <a href={src} target="_blank">
        <div className="preview">
          <div className="extension">
            <img src={source} width="60" />
          </div>
          <span className="title">{title}</span>
        </div>
      </a>
      {/* <div className="hovered">
        <div className="title">
          <span>{title}</span>
          <a href={src} className="icon-arrow-down2" target="_blank"></a>
        </div>
      </div> */}
    </div>
  );
};

export default FileBox;
