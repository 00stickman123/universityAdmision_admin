import React from "react";
import { EDIT_BUTTON_STATUS } from "../../constants/constant";
import EditIcon from "../icons/EditIcon";
import SecondaryBtn from "./SecondaryBtn";

function EditButton({
  editBtn = EDIT_BUTTON_STATUS.SHOW,
  onClick = null,
  className = "",
}) {
  return (
    <div onClick={onClick}>
      {editBtn === EDIT_BUTTON_STATUS.SHOW && (
        <EditIcon className={`hidden md:block cursor-pointer ${className}`} />
      )}
      <SecondaryBtn
        className={`w-full md:hidden ${
          editBtn === EDIT_BUTTON_STATUS.SHOW ? "block" : "hidden"
        }`}
      >
        Edit
      </SecondaryBtn>
    </div>
  );
}

export default EditButton;
