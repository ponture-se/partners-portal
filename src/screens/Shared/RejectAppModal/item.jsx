import React, { useState } from "react";
export default function Item(props) {
  const { data } = props;
  const [checked, toggleChecked] = useState(false);
  function handleChange(e) {
    toggleChecked(e.target.checked);
    if (props.onChange) props.onChange(data);
  }
  return (
    <div className="custom_checkbox">
      <div className="left">
        <label className="checkBox">
          <input
            type="checkbox"
            id={"chk" + data.Id}
            onChange={handleChange}
            checked={checked}
          />
          <span className="checkmark" />
        </label>
      </div>
      <div className="right">
        <label htmlFor={"chk" + data.Id}>{data.Translated_Label}</label>
        <label>{/* {t("FIELD_INVISIBLE_INFO")} */}</label>
      </div>
    </div>
  );
}
