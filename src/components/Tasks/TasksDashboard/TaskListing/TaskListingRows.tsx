import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "components/Tailwind/Card";
import { useTasksContext } from "components/Tasks/context/TasksContext/TasksProvider";
import TasksTypes from "components/Tasks/typings";
import { useCallback, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

const TaskListingRows = () => {
  const { isLoading, tasks, handleEditTask, handleDeleteTask, query } = useTasksContext();
  const [filteredTasks, setFilteredTask] = useState<TasksTypes.tasks[] | []>(
    []
  );

  const handleSearchTask = useCallback(() => {
    const results = tasks.filter(({ title }) => {
      return title.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredTask(results);
  }, [query, tasks]);

  useEffect(() => {
    handleSearchTask();
  }, [query, handleSearchTask]);

  const handleEditing = (taskId: string) => {
    const inputElement = document.getElementById(
      `title-${taskId}`
    ) as HTMLInputElement | null;

    const inputElementIndicator = document.getElementById(
      `editAction-${taskId}`
    ) as HTMLInputElement | null;

    if (inputElement && inputElementIndicator) {
      inputElementIndicator.style.display = "flex";
      inputElement.disabled = false;
      inputElement.select();
      inputElement.classList.add("border-b", "border-[#8F9EA2]");
    }
  };

  const handleSaveTask = (taskId: string) => {
    const inputElement = document.getElementById(
      `title-${taskId}`
    ) as HTMLInputElement | null;

    const inputSaveIndicator = document.getElementById(
      `editAction-${taskId}`
    ) as HTMLInputElement | null;

    const taskStatus = document.getElementById(
      `complete-${taskId}`
    ) as HTMLInputElement | null;

    if (inputElement && inputSaveIndicator && taskStatus) {
      inputSaveIndicator.style.display = "none";
      inputElement.disabled = true;
      inputElement.classList.remove("border-b", "border-[#8F9EA2]");
      handleEditTask(taskId, { title: inputElement.value });
    }
  };

  const handleCancelEditTask = (taskId: string) => {
    const inputElement = document.getElementById(
      `title-${taskId}`
    ) as HTMLInputElement | null;

    const inputCancelIndicator = document.getElementById(
      `editAction-${taskId}`
    ) as HTMLInputElement | null;

    if (inputElement && inputCancelIndicator) {
      inputCancelIndicator.style.display = "none";
      inputCancelIndicator.disabled = true;
      inputElement.value = tasks.find((task) => task._id === taskId)!.title;
      inputElement.blur();
      inputElement.classList.remove("border-b", "border-[#8F9EA2]");
    }
  };

  return (
    <div className="mt-[16px] mb-[32px]">
      <Card largeShadow heightAuto>
        {(query.length > 0 ? filteredTasks: tasks).map(({ _id, title, status }, i) => (
          <div key={_id}>
            <div
              key={_id}
              className="flex justify-between items-center space-x-4"
            >
              <div className="flex items-center space-x-3 w-full">
                <div className="relative gap-2 line-through">
                  <input
                    id={`complete-${_id}`}
                    checked={status === "completed"}
                    onChange={() =>
                      handleEditTask(_id, {
                        status:
                          status === "completed" ? "incomplete" : "completed",
                      })
                    }
                    type="checkbox"
                    className="relative peer shrink-0 appearance-none border-2 border-[#95A4AB] rounded-sm bg-transparent mt-1 w-[19px] h-[19px] cursor-pointer"
                  />
                  <svg
                    className="w-[24px] h-[24px] absolute top-0 ml-1 hidden peer-checked:block pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#707070"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>

                <input
                  id={`title-${_id}`}
                  type="text"
                  defaultValue={title}
                  className={`outline-none text-[20px] font-medium w-full bg-transparent ${
                    status === "completed"
                      ? "text-[#537178] line-through"
                      : "text-[#5285EC]"
                  }`}
                  disabled
                />

                <div
                  id={`editAction-${_id}`}
                  className="hidden p-0 m-0 space-x-1"
                >
                  <button
                    className="bg-red-500 text-[12px] text-white font-bold py-0.5 px-2 rounded-md opacity-90"
                    onClick={() => handleCancelEditTask(_id)}
                  >
                    Cancel
                  </button>

                  <button
                    className="bg-green-500 text-[12px] text-white font-bold py-0.5 px-2 rounded-md opacity-90"
                    onClick={() => handleSaveTask(_id)}
                  >
                    Save
                  </button>
                </div>
              </div>
              <div className="flex space-x-4">
                <div>
                  <button onClick={() => handleEditing(_id)}>
                    <FontAwesomeIcon
                      icon={faPencilAlt}
                      className="text-[#647278] hover:text-[orange] text-[16px]"
                    />
                  </button>
                </div>
                <div>
                  <button onClick={() => handleDeleteTask(_id)}>
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      className="text-[#647278] hover:text-red-500 text-[16px]"
                    />
                  </button>
                </div>
              </div>
            </div>

            {i !== tasks.length - 1 && <hr className="my-[16px]" />}
          </div>
        ))}
        {isLoading && (
          <Skeleton count={1} className="h-[45px] mt-3" />
        )}

      </Card>
    </div>
  );
};

export default TaskListingRows;
