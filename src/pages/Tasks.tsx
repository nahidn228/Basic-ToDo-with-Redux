import { selectFilter, selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

export default function Tasks() {
  const tasks = useAppSelector(selectTasks);
  const filter = useAppSelector(selectFilter);
  console.log(tasks);
  console.log(filter);
  return (
    <div>
      <h1>This is Task Component</h1>
    </div>
  );
}
