import { FormikHelpers, FormikValues, useFormik } from "formik";
import { ObjectSchema } from "yup";

const useForm = (
  initialValues: FormikValues,
  validationSchema: ObjectSchema<any>,
  onSubmit: (values: FormikValues, actions: FormikHelpers<FormikValues>) => void
) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const resetForm = () => {
    formik.resetForm();
  };

  return {
    handleChange: formik.handleChange,
    handleSubmit: formik.handleSubmit,
    values: formik.values,
    errors: formik.errors,
    touched: formik.touched,
    resetForm,
  };
};

export default useForm;
