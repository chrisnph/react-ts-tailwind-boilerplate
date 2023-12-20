import { ReactNode, createContext, useContext } from "react";
import useTask from "./hooks/useTask";
import TasksTypes from "components/Tasks/typings";

const TasksContext = createContext<TasksTypes.TasksContext>({
  isLoading: true,
  setIsLoading: () => {},
  tasks: [],
  setTasks: () => {},
  handleGetTasks: async () => [],
  handleAddTask: async () => {},
  taskOverview: {
    completedTask: 0,
    totalTask: 0,
    latestCreated: [],
  },
  setTaskOverview: () => {},
  handleDeleteTask: () => {},
  handleEditTask: async () => {},
  query: "",
  setQuery: () => {},
});

const TasksProvider = ({ children }: { children: ReactNode }) => {
  const {
    isLoading,
    setIsLoading,
    tasks,
    setTasks,
    handleGetTasks,
    handleAddTask,
    taskOverview,
    setTaskOverview,
    handleDeleteTask,
    handleEditTask,
    query,
    setQuery,
  }: TasksTypes.TasksContext = useTask();

  return (
    <TasksContext.Provider
      value={{
        isLoading,
        setIsLoading,
        tasks,
        setTasks,
        handleGetTasks,
        handleAddTask,
        taskOverview,
        setTaskOverview,
        handleDeleteTask,
        handleEditTask,
        query,
        setQuery,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

const useTasksContext = () => {
  const context = useContext(TasksContext);

  if (!context)
    throw new Error("useTasksContext must be used within a AuthProvider");

  return context;
};

export { TasksProvider, TasksContext, useTasksContext };
