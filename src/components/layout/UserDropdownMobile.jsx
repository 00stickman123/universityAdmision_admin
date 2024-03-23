import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AvatarIcon from "../icons/AvatarIcon";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import { DialogOverlay } from "@reach/dialog";
import MotionDialogContent from "../commonSection/MotionDialogContent";
import LogoutIcon from "../icons/LogoutIcon";
import Line from "../commonSection/Line";
import IconCloseDialog from "../icons/IconCloseDialog";

function UserDropdownMobile() {
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return (
    <div>
      <div onClick={open} className="flex items-center">
        <AvatarIcon />
        <ArrowDownIcon color="#373737" />
      </div>

      <AnimatePresence>
        {showDialog && (
          <DialogOverlay
            onDismiss={close}
            className="z-50 flex flex-col justify-end"
          >
            {/* @ts-ignore */}
            <MotionDialogContent
              aria-label="User-mobile"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                y: 300,
                transition: {
                  duration: 0.15,
                },
              }}
              className="z-50 !w-screen !m-0 !bg-transparent !p-0"
            >
              <motion.div
                className="flex flex-col w-full h-full pb-20 bg-white rounded-t-2xl"
                initial={{ y: 50 }}
                animate={{ y: 0 }}
              >
                <div className="flex items-center justify-between p-5">
                  <IconCloseDialog className="" onClick={close} />
                  <div className="font-bold">Admin</div>
                </div>
                <Line />
                <div className="px-6">
                  <MenuItem
                    icon={<LogoutIcon />}
                    label="Log Out"
                    onClick={() => {
                      // handle logout here
                    }}
                  />
                </div>
              </motion.div>
            </MotionDialogContent>
          </DialogOverlay>
        )}
      </AnimatePresence>
    </div>
  );
}

export default UserDropdownMobile;

function MenuItem({ isActive = false, href = "/", label, icon, ...props }) {
  return (
    <a
      className={`items-center px-3 rounded py-[14px] gap-2 flex cursor-pointer ${
        isActive ? "bg-[#F6F5FA]" : "bg-transparent"
      }`}
      href={href || "/admin"}
      {...props}
    >
      <div className={`${isActive ? "menu-icon-active" : ""}`}>{icon}</div>
      <p
        className={`text-sm text-center ${
          isActive ? "text-primaryy" : "text-gray"
        }`}
      >
        {label}
      </p>
    </a>
  );
}
