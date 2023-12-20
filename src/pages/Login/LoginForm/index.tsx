import useForm from "hooks/useForm";
import { initialValues, validationSchema } from "./schema";
import { FormikValues } from "formik";
import { useState } from "react";
import LoadingSpinner from "components/FramerMotion/LoadingSpinner";
import { useAuthContext } from "context/AuthContext/AuthProvider";

const LoginForm = () => {
  const { handleLogin, isLoading, setIsLoading } = useAuthContext();
  const [formSubmitError, setFormSubmitError] = useState<string | "">("");

  const handleLoginFormSubmit = async (values: FormikValues) => {
    setIsLoading(true);
    const result = await handleLogin(values);
    setIsLoading(false);

    result.error && setFormSubmitError(result.error);
  };

  const form = useForm(initialValues, validationSchema, handleLoginFormSubmit);

  return (
    <>
      <form className="flex flex-col" onSubmit={form.handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Id"
          className="outline-none focus:border-b focus:border-solid focus:border-blue-500 focus:border-1 focus:border-opacity-30 w-full bg-[#EEF1F8] p-[11px] h-[40px] mt-[12px] placeholder-[#7A7D7E] text-[14px] leading-18"
          value={form.values.username}
          onChange={form.handleChange}
        />
        {form.errors.username && form.touched.username && (
          <div className="text-red-500 text-[10px]">
            {form.errors.username.toString()}
          </div>
        )}

        <input
          type="password"
          name="password"
          placeholder="Name"
          className="outline-none focus:border-b focus:border-solid focus:border-blue-500 focus:border-1 focus:border-opacity-30 w-full bg-[#EEF1F8] p-[11px] h-[40px] mt-[12px] placeholder-[#7A7D7E] text-[14px] leading-18"
          value={form.values.password}
          onChange={form.handleChange}
        />
        {form.errors.password && form.touched.password && (
          <div className="text-red-500 text-[10px]">
            {form.errors.password.toString()}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="theme-btn-blue mt-[12px] h-[43px] flex justify-center items-center"
        >
          {!isLoading ? (
            "Login"
          ) : (
            <LoadingSpinner
              color="#ffffff"
              spinnerWidth="w-[14px]"
              spinnerHeight="h-[14px]"
            />
          )}
        </button>
      </form>

      {formSubmitError && (
        <div className="text-red-500 text-[14px] text-center pt-2">
          {formSubmitError}
        </div>
      )}
    </>
  );
};

export default LoginForm;
