import { useRef } from "react";
import TaskListingRows from "./TaskListingRows";
import { useTasksContext } from "components/Tasks/context/TasksContext/TasksProvider";

const TaskListing = ({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { setQuery } = useTasksContext();
  const searhTaskRef = useRef(null);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-[20px] text-[#537178] font-medium text-center md:text-left w-full md:w-auto space-x-4">
          <span>Task</span>
        </div>

        <div className="items-center flex flex-col md:flex-row w-full md:w-auto space-x-0 md:space-x-4 space-y-[8px] md:space-y-0 px-[15px] md:px-0">
          <input
            ref={searhTaskRef}
            type="text"
            name="searchTaskRef"
            placeholder="Search by task name"
            className="outline-none bg-[#D9DFEB] p-[11px] h-[40px] placeholder-[#7A7D7E] text-[14px] font-medium rounded-md w-full md:w-auto text-center md:text-left"
            onChange={({ currentTarget: { value } }) => setQuery(value)}
          />
          <button
            type="button"
            className="theme-btn-blue h-[40px] font-medium flex justify-center items-center w-full md:w-auto"
            onClick={() => setShowModal(!showModal)}
          >
            + New Task
          </button>
        </div>
      </div>

      <TaskListingRows />
    </>
  );
};

export default TaskListing;
