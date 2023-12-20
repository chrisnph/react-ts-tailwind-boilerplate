import Card from "components/Tailwind/Card";
import { useTasksContext } from "../context/TasksContext/TasksProvider";
import Skeleton from "react-loading-skeleton";

const TaskLatest = () => {
  const { isLoading, taskOverview } = useTasksContext();

  return (
    <div className="w-full min-w-[204px]">
      <Card>
        <div className="h-full w-full">
          <div>
            <span className="text-[#537178] text-[1.2rem] font-medium">
              Latest Created Tasks
            </span>
          </div>
          {isLoading ? (
            <div className="mt-[13px]">
              <Skeleton count={3} />
            </div>
          ) : (
            <div className="mt-[12px] pl-[20px] text-[14px] text-[#8F9EA2]">
              <ul className="list-disc">
                {taskOverview.latestCreated.map((task, i) => (
                  <li
                    key={i}
                    className={
                      task.status === "completed"
                        ? "line-through decoration-2"
                        : ""
                    }
                  >
                    {task.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default TaskLatest;
