import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import IconHamberger from "../icons/IconHamberger";
import IconCloseDialog from "../icons/IconCloseDialog";
import Line from "../commonSection/Line";
import { MenuItem } from "./AdminMainNav";
import DashboardIcon from "../icons/DashboardIcon";
import CollectionIcon from "../icons/CollectionIcon";
import { useLocation } from "react-router-dom";
import UserDropdownMobile from "./UserDropdownMobile";

function AdminMobileNav() {
  const location = useLocation();
  const node = useRef();
  const [isHover, toggleHover] = useState(false);

  const mainMenu = [
    {
      id: 1,
      name: "Dashboard",
      href: "/admin",
      icon: <DashboardIcon />,
      isActive:
        location.pathname === "/admin" ||
        location.pathname === "/admin/" ||
        location.pathname.includes("/admin/dashboard"),
    },
    {
      id: 3,
      name: "Products",
      icon: <CollectionIcon />,
      href: "/admin/products",
      isActive:
        location.pathname.includes("/admin/products") ||
        location.pathname.includes("/admin/products"),
      // subMenu: subMenuCollections,
    },
  ];

  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };

  const handleClickOutside = (e) => {
    // @ts-ignore
    if (node.current?.contains(e.target)) {
      return;
    }
    toggleHover(false);
  };

  useEffect(() => {
    if (isHover) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isHover]);

  const sidebar = {
    open: (height = 1200) => ({
      pointerEvents: "all",
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      zIndex: 99,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      pointerEvents: "none",
      clipPath: "circle(0px at 0px 0px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  return (
    <div ref={node} className="relative">
      <motion.div className="w-full">
        <div className={`flex items-center justify-between h-full w-full`}>
          <IconHamberger onClick={toggleHoverMenu} />
          <UserDropdownMobile />
        </div>
        <motion.div
          initial={false}
          animate={isHover ? "open" : "closed"}
          // @ts-ignore
          variants={sidebar}
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            transformOrigin: "50% -30px",
            height: "100vh",
            width: "100vw",
            overflowY: "auto",
          }}
          className="bg-white"
        >
          <motion.div variants={variants} className="h-full mt-0">
            <div className="flex flex-col justify-between w-full h-full pt-4 pb-8 px-7">
              <div>
                <div className="flex items-center justify-between">
                  <a href="/">Logo</a>
                  <IconCloseDialog onClick={toggleHoverMenu} />
                </div>

                <Line className="mt-5 mb-3" />

                <div className="flex flex-col gap-1 mt-2">
                  {mainMenu.map((i) => (
                    <MenuItem
                      key={`main-menu-${i?.id}`}
                      icon={i?.icon}
                      name={i?.name}
                      subMenuItem={i?.subMenu}
                      href={i?.href}
                      isActive={i?.isActive}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default AdminMobileNav;
