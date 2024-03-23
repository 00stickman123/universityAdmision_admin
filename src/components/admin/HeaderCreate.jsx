import React from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import PrimaryBtn from "./PrimaryBtn";
import { SAVE_TYPE } from "../../constants/constant";
import ConfirmSavePopup from "./ConfirmSavePopup";
import SecondaryBtn from "./SecondaryBtn";

function HeaderCreate({
  homeUrl = "",
  handleClickSaveCreate,
  disabledBtn = false,
  children,
  btnSaveTitle = "",
  btnSaveType = SAVE_TYPE.UPDATE,
  className = "",
}) {
  return (
    <div className={className}>
      <div className="flex flex-col justify-between gap-5 mb-5 md:items-center md:flex-row">
        <Title>{btnSaveTitle}</Title>
        <div className="flex justify-around gap-5 md:justify-end">
          <Link to={homeUrl}>
            <SecondaryBtn className="mb-0 min-w-[140px]">Cancel</SecondaryBtn>
          </Link>
          <ConfirmSavePopup
            type={btnSaveType}
            title={btnSaveTitle}
            handleConfirmUpdate={handleClickSaveCreate}
          >
            <PrimaryBtn className="min-w-[140px]" disabled={disabledBtn}>
              Save
            </PrimaryBtn>
          </ConfirmSavePopup>
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-white block-border">
        {children}
      </div>
    </div>
  );
}

export default HeaderCreate;
