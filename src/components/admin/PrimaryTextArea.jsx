import React, { useEffect, useState } from "react";

function PrimaryTextArea({
  title = "",
  className = "",
  placeholder = "",
  onChange = null,
  id = "",
  note = null,
  ...props
}) {
  const [grayMode, setGrayMode] = useState(false);
  useEffect(() => {
    /* eslint-disable-next-line*/
    if (props.hasOwnProperty("readOnly")) {
      setGrayMode(true);
    }
  }, [props]);
  return (
    <div className={`form-group ${className}`}>
      <p className="text-sm text-gray">{title}</p>
      {note && <div className="mt-2 text-xs text-gray">{note}</div>}
      <textarea
        {...props}
        onChange={onChange}
        className={`mt-1 w-full h-full rounded-lg border px-4 py-3 smooth-transform border-grayLight outline-none focus:border-primaryy ${
          grayMode
            ? "bg-[#F8F9FB] text-[#9A9A9C] border-[#DFE3E8] focus:border-[#DFE3E8]"
            : ""
        }`}
        id={id}
        cols={30}
        rows={4}
        placeholder={placeholder}
      ></textarea>
      <span className="form-message"></span>
    </div>
  );
}

export default PrimaryTextArea;
