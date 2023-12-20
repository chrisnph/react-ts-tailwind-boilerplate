import Card from "components/Tailwind/Card";
import { useTasksContext } from "../context/TasksContext/TasksProvider";
import Skeleton from "react-loading-skeleton";

const TaskTracker = () => {
  const { isLoading, taskOverview } = useTasksContext();

  return (
    <div className="w-full min-w-[204px]">
      <Card>
        <div className="h-full w-full flex flex-col justify-between">
          <span className="text-[#537178] text-[1.2rem] font-medium">
            Task Completed
          </span>
          {isLoading ? (
            <Skeleton className="h-[58px] max-w-[58px]" />
          ) : (
            <div className="flex items-end">
              <div className="min-w-[16px]">
                <span className="text-[#5285EC] text-[3rem]">
                  {taskOverview.completedTask}
                </span>
              </div>

              <span className="text-[1.2rem] text-[#8F9EA2]">
                {" "}
                / {taskOverview.totalTask}
              </span>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default TaskTracker;
