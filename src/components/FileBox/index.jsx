import React from "react";
import "./style.scss";
import { downloadAppAsset } from "api/main-api";
const FileBox = (props) => {
  const { fileId, title, src, idx, id } = props;
  const type = props.type.toLowerCase();
  let source = "";
  try {
    source = require(`./assets/${type}.svg`);
  } catch (err) {
    source = require(`./assets/file.svg`);
  }

  // const download = () => {
  //   window.open(src);
  // };
  function download(e) {
    e.preventDefault();
    const _id = fileId ? fileId + "." + type : id;
    downloadAppAsset()
      .onOk((data) => {
        const downloadUrl = window.URL.createObjectURL(new Blob([data]));
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.setAttribute("download", _id);
        document.body.appendChild(link);
        link.click();
        link.remove();
      })
      .call(id);
  }
  return (
    <div className="fileBox" key={idx}>
      <div className="extension">
        <img src={source} width="60" alt="" />
      </div>
      <span className="title">
        {title}
        <a href="" className="icon-arrow-down2" onClick={download}></a>
      </span>

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
