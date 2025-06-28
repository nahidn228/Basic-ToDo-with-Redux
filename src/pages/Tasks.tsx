import { AddTaskModal } from "@/components/module/task/AddTaskModal";
import TaskCards from "@/components/module/task/TaskCards";
import { selectFilter, selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

export default function Tasks() {
  const tasks = useAppSelector(selectTasks);
  const filter = useAppSelector(selectFilter);
  console.log(tasks);
  console.log(filter);
  return (
    <div className="max-w-7xl mx-auto px-5 mt-20">
      <div className="flex justify-between item-center">
        <h1>Tasks</h1>
        <AddTaskModal />
      </div>
      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TaskCards task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
}
