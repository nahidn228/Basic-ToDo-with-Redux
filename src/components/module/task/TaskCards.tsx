import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import type { ITask } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps {
  task: ITask;
}

const TaskCards = ({ task }: IProps) => {
  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex justify-between item-center">
        <div className="flex gap-2 item-center ">
          <div
            className={cn("size-3 rounded-full ", {
              "bg-green-500": task.priority == "low",
              "bg-yellow-500": task.priority == "medium",
              "bg-red-500": task.priority == "high",
            })}
          ></div>
          <h1>{task.title}</h1>
        </div>
        <div className=" gap-3 item-center ">
          <Button variant="link" className="p-0 text-red-500">
            <Trash2 />{" "}
          </Button>
          <Checkbox />
        </div>
      </div>
      <p className="mt-5"> {task.description} </p>
    </div>
  );
};

export default TaskCards;
