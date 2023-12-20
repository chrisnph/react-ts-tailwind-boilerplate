import { object, string } from "yup";

export const initialValues = {
  username: "",
  password: "",
};

export const validationSchema = object({
  username: string()
    .required("Id is required")
    .min(6, "Id need to be at least 6 characters"),
  password: string()
    .required("Password is required")
    .min(8, "Password need to be at least 8 characters"),
});
