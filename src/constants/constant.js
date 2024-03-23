export const DROP_DOWN_ANIMATE = {
  enter: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.2,
    },
    display: "block",
  },
  exit: {
    opacity: 0,
    rotateX: -15,
    transition: {
      duration: 0.2,
      delay: 0.05,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

export const EDIT_BUTTON_STATUS = {
  SHOW: "show",
  HIDE: "hide",
};

export const SAVE_TYPE = {
  UPDATE: "update",
  CREATE: "create",
  DELETE: "delete",
  DISABLE: "disable",
  ENABLE: "enable",
  APPROVE: "approve",
  REJECT: "reject",
  VIEW: "view",
  SEND: "send",
  DOWNLOAD: "download",
};
