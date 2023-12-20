import useModal from "components/Tailwind/Modal/hooks/useModal";
import TaskAdd from "./TaskAdd";
import Card from "components/Tailwind/Card";

const TasksEmpty = () => {
  const { showModal, setShowModal } = useModal();

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-[25%] min-w-[296px] h-[158px]">
        <Card>
          <TaskAdd showModal={showModal} setShowModal={setShowModal} />

          <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="w-full text-[#537178] text-[1.3rem] text-center">
              <span className="text-[20px] font-medium leading-7">
                You have no task.
              </span>
            </div>
            <button
              className="mt-[12px] rounded-md bg-[#5285EC] text-center text-white text-[14px] font-normal h-[40px] w-auto px-[22px] py-[11px] hover:brightness-90"
              onClick={() => setShowModal(!showModal)}
            >
              + New Task
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TasksEmpty;
