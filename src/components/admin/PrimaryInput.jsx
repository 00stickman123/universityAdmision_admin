import React from "react";

function PrimaryInput({
  title = null,
  className = "",
  placeholder = "",
  type = "",
  classNameInput = "",
  id = "",
  message = "",
  accessoriesRight = null,
  error = null,
  messageError = "",
  classNameInputWrapper = "",
  classNameAccessoryRight = "",
  boldTitle = null,
  ...props
}) {
  return (
    <div className={`form-group ${className}`}>
      {boldTitle && (
        <div className="mb-1 text-sm font-medium text-black capitalize">
          {boldTitle}
        </div>
      )}
      <div className="text-sm capitalize">{title}</div>
      <div className={`relative w-full ${classNameInputWrapper}`}>
        <input
          id={id}
          placeholder={placeholder}
          {...props}
          type={type}
          className={`read-only:bg-readOnly w-full px-4 py-3 border rounded outline-none border-grayLight focus:border-primaryy hover:border-primaryy smooth-transform ${
            title ? "mt-2" : ""
          } ${classNameInput} ${accessoriesRight && "pr-11"}`}
        />
        <span className="form-message">{message}</span>
        {accessoriesRight && (
          <div
            className={`absolute top-[18px] right-4 ${classNameAccessoryRight}`}
          >
            {accessoriesRight}
          </div>
        )}
      </div>
      {error && <div className="mt-2 text-sm text-denied">{messageError}</div>}
    </div>
  );
}

export default PrimaryInput;
