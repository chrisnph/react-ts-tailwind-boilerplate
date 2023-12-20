import { FormikValues } from "formik";

declare namespace TasksTypes {
  export interface tasks {
    title: string;
    status: string;
    username: string;
    _id: string;
    createdAt: string;
    updatedAt?: string;
    __v?: number;
    error?: string;
    length?: number;
  }

  export interface taskOverview {
    completedTask: number;
    totalTask: number;
    latestCreated: tasks[];
  }

  export interface tasksProps {
    isLoading: boolean;
    title: string;
    status: string;
    username: string;
    createdAt: string;
  }

  export interface TasksContext {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    tasks: TasksTypes.tasks[] | [];
    setTasks: React.Dispatch<React.SetStateAction<tasks[] | []>>;
    handleGetTasks: () => Promise<any>;
    handleAddTask: (requestData: FormikValues) => Promise<any>;
    taskOverview: taskOverview;
    setTaskOverview: React.Dispatch<React.SetStateAction<any>>;
    // handleDeleteTask: (taskId: string, values: FormikValues) => Promise<any>;
    handleDeleteTask: (taskId: string) => void;
    handleEditTask: (taskId: string, requestData: FormikValues) => Promise<any>;
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
  }
}

export default TasksTypes;
