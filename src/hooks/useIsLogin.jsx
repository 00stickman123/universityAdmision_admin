import { useSelector } from "react-redux";

export function useIsLogin() {
  const { user } = useSelector((state) => state.auth);
  return {
    isLogin: user,
    // isAdmin : user && user?.role === "admin"
  };
}
