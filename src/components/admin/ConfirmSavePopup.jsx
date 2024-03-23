import { DialogOverlay } from "@reach/dialog";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { SAVE_TYPE } from "../../constants/constant";
import MotionDialogContent from "../commonSection/MotionDialogContent";
import SmallTitle from "./SmallTitle";
import CloseDialogIcon from "../icons/CloseDialogIcon";
import WarningCircleIcon from "../icons/WarningCircleIcon";
import ApproveIcon from "../icons/ApproveIcon";
import SecondaryBtn from "./SecondaryBtn";
import PrimaryBtn from "./PrimaryBtn";

function ConfirmSavePopup({
  type = SAVE_TYPE.UPDATE,
  title = "",
  className = "",
  children,
  handleConfirmUpdate,
  externalInformation = undefined,
}) {
  const [showConfirmUpdateDialog, setShowConfirmUpdateDialog] = useState(false);

  return (
    <div className={`${className}`}>
      <div className="w-full" onClick={() => setShowConfirmUpdateDialog(true)}>
        {children}
      </div>
      <AnimatePresence>
        {showConfirmUpdateDialog && (
          <DialogOverlay
            onDismiss={() => setShowConfirmUpdateDialog(false)}
            className="z-50 flex items-center justify-center"
          >
            {/* @ts-ignore */}
            <MotionDialogContent
              aria-label="Save popup"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="z-50 min-w-[343px] md:min-w-[636px] !bg-transparent"
              style={{ width: 350 }}
            >
              <motion.div
                className="flex flex-col bg-white rounded-lg"
                initial={{ y: +30 }}
                animate={{ y: 0 }}
              >
                <div className="flex items-center justify-between p-4 md:p-6 bg-[#F6F5FA] rounded-t-lg">
                  <SmallTitle className="capitalize">{type} confirm</SmallTitle>
                  <CloseDialogIcon
                    onClick={() => setShowConfirmUpdateDialog(false)}
                    className="cursor-pointer"
                  />
                </div>

                <div className="flex flex-col items-center px-6 py-5 mt-3">
                  {(type === SAVE_TYPE.DISABLE ||
                    type === SAVE_TYPE.REJECT) && <WarningCircleIcon />}
                  {(type === SAVE_TYPE.UPDATE ||
                    type === SAVE_TYPE.CREATE ||
                    type === SAVE_TYPE.ENABLE ||
                    type === SAVE_TYPE.APPROVE ||
                    type === SAVE_TYPE.VIEW ||
                    type === SAVE_TYPE.SEND) && <ApproveIcon />}
                  <p className="text-lg text-[#4F4F4F] font-semibold">
                    Are you sure want to {type} this {title}
                  </p>
                </div>

                {externalInformation}

                <div className="grid w-full grid-cols-2 gap-5 min-w-[340px] px-6 mt-3 mb-4">
                  <SecondaryBtn
                    className=""
                    onClick={() => setShowConfirmUpdateDialog(false)}
                  >
                    Cancel
                  </SecondaryBtn>
                  <PrimaryBtn
                    className="capitalize"
                    onClick={() => {
                      handleConfirmUpdate();
                      setShowConfirmUpdateDialog(false);
                    }}
                  >
                    {type}
                  </PrimaryBtn>
                </div>
              </motion.div>
            </MotionDialogContent>
          </DialogOverlay>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ConfirmSavePopup;
