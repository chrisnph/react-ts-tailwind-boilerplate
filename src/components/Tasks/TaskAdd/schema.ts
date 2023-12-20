import { object, string } from "yup";

export const initialValues = {
  title: "",
};

export const validationSchema = object({
  title: string()
    .required("Title is required")
    .min(3, "Title need to be at least 3 characters"),
});
