import TasksTypes from "components/Tasks/typings";
import { FormikValues } from "formik";
import useAxios from "hooks/useAxios";
import { useEffect, useState } from "react";

const useTask = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState<TasksTypes.tasks[] | []>([]);
  const [query, setQuery] = useState<string>("");

  const [taskOverview, setTaskOverview] = useState<TasksTypes.taskOverview>({
    completedTask: 0,
    totalTask: 0,
    latestCreated: [],
  });

  useEffect(() => {
    tasks.length > 0 &&
      setTaskOverview({
        completedTask: tasks.filter((task) => task.status === "completed")
          .length,
        totalTask: tasks.length,
        latestCreated: tasks
          .sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
          .slice(0, 3),
      });
  }, [tasks]);

  const handleGetTasks = async () => {
    try {
      setIsLoading(true);

      const {
        data: { data, error },
      } = await useAxios.get("/task/all");

      !error && setTasks(data);
      setIsLoading(false);

      return { data, error };
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddTask = async (values: FormikValues) => {
    try {
      setIsLoading(true);

      const {
        data: { data, error },
      } = await useAxios.post("/task/add", values);

      !error && setTasks([...(tasks || []), data]);
      setIsLoading(false);

      return { data, error };
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteTask = async (taskId: string) => {
    try {
      setIsLoading(true);

      const updatedTask = tasks.filter((task) => task._id !== taskId);

      const {
        data: { data, error },
      } = await useAxios.delete("/task/remove/" + taskId);

      !error && setTasks(updatedTask);
      setIsLoading(false);

      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditTask = async (taskId: string, requestData: FormikValues) => {
    try {
      setIsLoading(true);

      const currentTask = tasks.find((task) => task._id === taskId);
      const updatedTask = tasks.filter((task) => task._id !== taskId);


      const {
        data: { data, error },
      } = await useAxios.patch("/task/edit/" + taskId, requestData);

      if (!error && currentTask) {
        if (requestData.status) {
          currentTask!.status = requestData.status;
        }

        if (requestData.title) {
          currentTask!.title = requestData.title;
        }

        setTasks([...updatedTask, currentTask]);
      }

      setIsLoading(false);

      return data;
    } catch (error) {
      console.error(error);
    }
  };

  return {
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
  };
};

export default useTask;
