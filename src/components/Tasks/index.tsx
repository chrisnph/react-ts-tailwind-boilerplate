import { useEffect } from "react";
import { useTasksContext } from "./context/TasksContext/TasksProvider";
import TasksEmpty from "./TasksEmpty";
import TasksDashboard from "./TasksDashboard";

const Tasks = () => {
  const {isLoading, tasks, handleGetTasks } = useTasksContext();

  useEffect(() => {
    handleGetTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isLoading && tasks.length < 1) return <TasksEmpty />;

  return <TasksDashboard />;
};

export default Tasks;
