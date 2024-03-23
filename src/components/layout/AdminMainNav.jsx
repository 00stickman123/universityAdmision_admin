import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import { AnimatePresence, motion } from "framer-motion";
import Line from "../commonSection/Line";
import CollectionIcon from "../icons/CollectionIcon";
import DashboardIcon from "../icons/DashboardIcon";
import AdminMobileNav from "./AdminMobileNav";

function AdminMainNav() {
  const location = useLocation();
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
      id: 2,
      name: "University",
      icon: <CollectionIcon />,
      href: "/admin/university",
      isActive:
        location.pathname.includes("/admin/university") ||
        location.pathname.includes("/admin/university"),
      // subMenu: subMenuCollections,
    },
    {
      id: 3,
      name: "MajorInPlan",
      icon: <CollectionIcon />,
      href: "/admin/mjp",
      isActive:
        location.pathname.includes("/admin/mjp") ||
        location.pathname.includes("/admin/mjp"),
    },
    {
      id: 4,
      name: "Major",
      icon: <CollectionIcon />,
      href: "/admin/major",
      isActive:
        location.pathname.includes("/admin/major") ||
        location.pathname.includes("/admin/major"),
    },
  ];

  return (
    <div className="flex flex-col z-50 w-full md:w-[276px] h-min-content md:h-screen overflow-y-auto bg-white px-4 py-[6px] md:px-6 md:pt-7 md:pb-10 shadow-lg fixed top-0 bottom-0 left-0">
      <div className="items-center justify-between hidden h-full md:flex-col md:flex">
        <div className="w-full">
          <div className="flex justify-center">
            <a href="/admin" className="w-[120px] h-[120px]">
              {/* <img
                className="w-[120px] h-[120px]"
                src="/logo-without-text.svg"
                alt="menu-logo"
              /> */}
              Logo here
            </a>
          </div>

          <Line className="mt-2" />

          <div className="flex flex-col gap-1 mt-2">
            {mainMenu?.map((i) => (
              <MenuItem
                key={i?.id}
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

      <div className="md:hidden">
        <AdminMobileNav />
      </div>
    </div>
  );
}

export default AdminMainNav;

const variants = {
  open: { opacity: 1, height: "auto" },
  collapsed: {
    opacity: 0,
    height: 0,
  },
};

export function MenuItem({
  href = "",
  subMenuItem = undefined,
  icon,
  name = "",
  isActive = false,
}) {
  const [isShowItem, setIsShowItem] = useState(isActive);
  const [isOpenMenu, setIsOpenMenu] = useState(isActive);
  const navigate = useNavigate();

  const handleClickMenuItem = (e) => {
    e.stopPropagation();
    setIsShowItem(!isShowItem);
    setIsOpenMenu(!isOpenMenu);
    if (href) {
      navigate(`${href}`);
    }
  };

  return (
    <div>
      <div
        className={`flex items-center justify-between px-4 py-3 cursor-pointer menu-item hover:bg-[#2F8DE415] ${
          isActive
            ? "bg-[#2F8DE415] text-primaryy icon-active"
            : "bg-transparent text-[#4F4F4F]"
        }
        `}
        onClick={handleClickMenuItem}
      >
        <div className="flex items-center gap-2">
          {icon}
          <p className="text-sm">{name}</p>
        </div>
        {subMenuItem && (
          <div className={`${isOpenMenu && "rotate-90"} smooth-transform`}>
            <ArrowRightIcon />
          </div>
        )}
      </div>
      <AnimatePresence initial={false}>
        {isShowItem && (
          <motion.div
            className="flex flex-col gap-2"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={variants}
            transition={{
              duration: 0.2,
            }}
          >
            {subMenuItem?.map((i) => (
              <Item key={i?.id} href={i?.href} isActive={i?.isActive}>
                {i?.name}
              </Item>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Item({ children, href = "", isActive = false }) {
  return (
    <a href={href}>
      <div
        className={`flex items-center gap-2 menu-item py-3 smooth-transform pr-8 pl-12 ${
          isActive
            ? "bg-[#2F8DE415] text-primaryy icon-active"
            : "bg-transparent text-[#4F4F4F]"
        } hover:bg-[#2F8DE415]`}
      >
        <p className="text-sm">{children}</p>
      </div>
    </a>
  );
}
