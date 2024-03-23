import { DialogOverlay } from "@reach/dialog";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import GarbageIcon from "../icons/GarbageIcon";
import DeniedBtn from "./DeniedBtn";
import MotionDialogContent from "../commonSection/MotionDialogContent";
import CloseDialogIcon from "../icons/CloseDialogIcon";
import SmallTitle from "./SmallTitle";
import PrimaryBtn from "./PrimaryBtn";
import SecondaryBtn from "./SecondaryBtn";

function DeleteBtn({ id, deleteFunction, queryKey = "", className = "" }) {
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  const handleDelete = async () => {
    try {
      await deleteFunction(id);
      close();
    } catch (error) {
      console.log("Delete error", error?.message);
    }
  };

  return (
    <div className={`${className}`}>
      <div className="hidden cursor-pointer md:block" onClick={open}>
        <GarbageIcon className="" />
      </div>
      <div className="cursor-pointer md:hidden" onClick={open}>
        <DeniedBtn>Delete</DeniedBtn>
      </div>
      <AnimatePresence>
        {showDialog && (
          <DialogOverlay
            onDismiss={close}
            className="z-50 flex items-center justify-center"
          >
            {/* @ts-ignore */}
            <MotionDialogContent
              aria-label="Delete popup"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="z-50 min-w-[343px] md:min-w-[536px] !bg-transparent"
              style={{ width: 350 }}
            >
              <motion.div
                className="flex flex-col bg-white rounded-lg"
                initial={{ y: +30 }}
                animate={{ y: 0 }}
              >
                <div className="flex items-center justify-between p-4 md:p-6 bg-[#F6F5FA] rounded-t-lg">
                  <SmallTitle>Delete confirm</SmallTitle>
                  <CloseDialogIcon onClick={close} className="cursor-pointer" />
                </div>

                <div className="px-6 mt-3 text-base text-[#4F4F4F] py-5">
                  Are you sure want to delete this?
                </div>

                <div className="flex items-center justify-end gap-4 px-6 mt-3 mb-4">
                  <PrimaryBtn onClick={handleDelete} className="w-[100px]">
                    Delete
                  </PrimaryBtn>
                  <SecondaryBtn onClick={close} className="w-[100px]">
                    Cancel
                  </SecondaryBtn>
                </div>
              </motion.div>
            </MotionDialogContent>
          </DialogOverlay>
        )}
      </AnimatePresence>
    </div>
  );
}

export default DeleteBtn;
