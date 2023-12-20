import { useCallback, useEffect, useState } from "react";
import { useTasksContext } from "../context/TasksContext/TasksProvider";
import PieChart from "react-minimal-pie-chart";
import Card from "components/Tailwind/Card";
import Skeleton from "react-loading-skeleton";

interface PieChartDataTypes {
  title: string;
  value: number;
  color: string;
}

const TaskPieChart = () => {
  const { isLoading, taskOverview } = useTasksContext();

  const [pieChartData, setPieChartData] = useState<PieChartDataTypes[]>();

  const handlePieChartChange = useCallback(() => {
    setPieChartData([
      {
        title: "Completed Tasks",
        value: taskOverview.completedTask,
        color: "#5285EC",
      },
      {
        title: "Total Tasks",
        value: taskOverview.totalTask - taskOverview.completedTask,
        color: "#E8ECEC",
      },
    ]);
  }, [taskOverview]);

  useEffect(() => {
    handlePieChartChange();
  }, [taskOverview, handlePieChartChange]);

  if (!pieChartData) return <></>;

  return (
    <div className="w-full min-w-[204px]">
      <Card>
        <div className="h-full w-full flex flex-col justify-between">
          <div className="flex flex-col items-end space-y-0">
            <div className="flex items-center space-x-2">
              <span className="rounded-full w-[10px] h-[10px] bg-[#5285EC]" />
              <span className="text-[10px] text-[#8F9EA2]">
                Completed Tasks
              </span>
            </div>
          </div>
          {isLoading ? (
            <div className="flex justify-center items-center p-0">
              <div className="h-[142px] w-[128px] mt-4">
                <Skeleton circle className="h-[128px] max-w-[128px]" />
              </div>
            </div>
          ) : (
            <PieChart
              data={pieChartData}
              radius={40}
              startAngle={-90}
              segmentsStyle={{ transition: "stroke .0s", cursor: "pointer" }}
              className="h-[158px] w-full"
            />
          )}
        </div>
      </Card>
    </div>
  );
};

export default TaskPieChart;
