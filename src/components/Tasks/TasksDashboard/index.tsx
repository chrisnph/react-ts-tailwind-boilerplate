import useModal from "components/Tailwind/Modal/hooks/useModal";
import TasksDashboardOverview from "./TaskDashboardOverview";
import TaskAdd from "../TaskAdd";
import TaskListing from "./TaskListing";

const TasksDashboard = () => {
  const { showModal, setShowModal } = useModal();
  return (
    <>
      <TaskAdd showModal={showModal} setShowModal={setShowModal} />
      <div className="h-full py-[12px] md:py-[22px] flex flex-col">
        <TasksDashboardOverview />

        <div className="mt-[50px]">
          <TaskListing showModal={showModal} setShowModal={setShowModal} />
        </div>
      </div>
    </>
  );
};

export default TasksDashboard;
