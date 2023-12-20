import { ReactNode, createContext, useContext } from "react";
import useAuth from "./hooks/useAuth";
import { FormikValues } from "formik";

interface AuthContextProps {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isLoggedIn: boolean;
  userInfo: any;
  handleLogin: (credentials: FormikValues) => Promise<any>;
  handleLogout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  isLoading: false,
  setIsLoading: () => {},
  isLoggedIn: false,
  userInfo: {},
  handleLogin: async () => {},
  handleLogout: () => {},
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const {
    isLoading,
    setIsLoading,
    isLoggedIn,
    userInfo,
    handleLogin,
    handleLogout,
  }: AuthContextProps = useAuth();

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        setIsLoading,
        isLoggedIn,
        userInfo,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context)
    throw new Error("useAuthContext must be used within a AuthProvider");

  return context;
};

export { AuthProvider, AuthContext, useAuthContext };
