import Modal from "components/Tailwind/Modal";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import useForm from "hooks/useForm";
import { initialValues, validationSchema } from "./schema";
import { FormikValues } from "formik";
import { useTasksContext } from "../context/TasksContext/TasksProvider";

const TaskAdd = ({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const titleRef = useRef(null);
  const { isLoading, handleAddTask } = useTasksContext();

  const [formSubmitError, setFormSubmitError] = useState("");

  const handleAddNewTask = async (values: FormikValues) => {
    const result = await handleAddTask(values);
    result.error ? setFormSubmitError(result.error) : setShowModal(false);
  };

  const form = useForm(initialValues, validationSchema, handleAddNewTask);

  return (
    <Modal title="+ New Task" showModal={showModal}>
      <form onSubmit={form.handleSubmit}>
        <div className="flex flex-col justify-around rounded-t">
          <div className="my-[12px]">
            <input
              required
              ref={titleRef}
              type="text"
              name="title"
              autoFocus
              placeholder="Task Name"
              className="outline-none focus:border-b focus:border-solid focus:border-blue-500 focus:border-1 focus:border-opacity-30 w-full bg-[#EEF1F8] p-[11px] h-[40px] mt-[12px] placeholder-[#7A7D7E] text-[14px] leading-18"
              onChange={form.handleChange}
            />
          </div>

          {form.errors.title && form.touched.title && (
            <div className="text-red-500 text-[10px]">
              {form.errors.title.toString()}
            </div>
          )}
        </div>

        <div className="w-full h-[40px]">
          <button
            type="submit"
            disabled={isLoading}
            className="theme-btn-blue w-full h-[40px] flex justify-center items-center"
          >
            + New Task
          </button>
        </div>
      </form>
      {formSubmitError && (
        <div className="text-red-500 text-[14px] text-center pt-2">
          {formSubmitError}
        </div>
      )}
    </Modal>
  );
};

export default TaskAdd;
