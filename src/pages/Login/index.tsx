import Card from "components/Tailwind/Card";
import { useAuthContext } from "context/AuthContext/AuthProvider";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";

const Login = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthContext();

  useEffect(() => {
    isLoggedIn && navigate("/");
  }, [isLoggedIn, navigate]);

  return (
    <>
      <div className="container-login min-w-[296px] h-auto">
        <Card bgColor="bg-white" largeShadow heightAuto padding="p-[24px]">
          <span className="text-[#537178] font-medium text-[1.2rem] leading-24">
            Login
          </span>

          <LoginForm />
        </Card>
      </div>
    </>
  );
};

export default Login;
