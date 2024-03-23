import React from "react";
import Title from "./Title";
import ConfirmSavePopup from "./ConfirmSavePopup";
import PrimaryBtn from "./PrimaryBtn";
import SecondaryBtn from "./SecondaryBtn";
import { format, parseISO } from "date-fns";
import { Link } from "react-router-dom";
import { SAVE_TYPE } from "../../constants/constant";

function HeaderEdit({
  updatedTime = "",
  homeUrl = "",
  handleClickSave,
  disabledBtn = false,
  children,
  btnSaveTitle = "",
  btnSaveType = SAVE_TYPE.UPDATE,
  classNameWrap = "",
}) {
  return (
    <div>
      <div className="flex flex-col justify-between gap-5 mb-5 md:items-center md:flex-row">
        <div>
          <Title>Edit {btnSaveTitle}</Title>
          <div className="mt-1 text-gray">
            Last update:&nbsp;
            {updatedTime
              ? format(parseISO(updatedTime), "dd/MM/yyyy HH:mm")
              : "---"}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <ConfirmSavePopup
            handleConfirmUpdate={handleClickSave}
            title={btnSaveTitle}
            type={btnSaveType}
          >
            <PrimaryBtn className="min-w-[140px]" disabled={disabledBtn}>
              Save
            </PrimaryBtn>
          </ConfirmSavePopup>
          <Link to={homeUrl}>
            <SecondaryBtn className="min-w-[140px]">Cancel</SecondaryBtn>
          </Link>
        </div>
      </div>
      <div
        className={`flex flex-col gap-4 bg-white block-border ${classNameWrap}`}
      >
        {children}
      </div>
    </div>
  );
}

export default HeaderEdit;
