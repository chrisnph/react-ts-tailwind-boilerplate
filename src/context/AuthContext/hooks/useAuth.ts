import { FormikValues } from "formik";
import useAxios from "hooks/useAxios";
import { useState } from "react";

const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem("isLoggedIn") === "true"
  );
  const [userInfo, setUserInfo] = useState(() => {
    const storageUserInfo = localStorage.getItem("userInfo");
    return storageUserInfo ? JSON.parse(storageUserInfo) : null;
  });

  const handleLogin = async (credentials: FormikValues) => {
    try {
      const {
        data: { error, data },
      } = await useAxios.post("/auth/login", credentials);

      if (!error) {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");

        setUserInfo(data);
        localStorage.setItem("userInfo", JSON.stringify(data));
      }

      return { data, error };
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userInfo");
  };

  return {
    isLoading,
    setIsLoading,
    isLoggedIn,
    setIsLoggedIn,
    handleLogin,
    handleLogout,
    userInfo,
    setUserInfo,
  };
};

export default useAuth;
