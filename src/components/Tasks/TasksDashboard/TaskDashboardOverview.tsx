import TaskPieChart from "./TaskPieChart";
import TaskTracker from "./TaskTracker";
import TaskLatest from "./TaskLatest";

const TasksDashboardOverview = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-[24px]">
      <TaskTracker />
      <TaskLatest />
      <TaskPieChart />
    </div>
  );
};

export default TasksDashboardOverview;
