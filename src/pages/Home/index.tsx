import Tasks from "components/Tasks";
import { TasksProvider } from "components/Tasks/context/TasksContext/TasksProvider";
import "./styles.scss";

const Home = () => {
  return (
    <div className="container-home w-full">
      <TasksProvider>
        <Tasks />
      </TasksProvider>
    </div>
  );
};

export default Home;
