import { Button } from "../ui/button";
import { Task } from "../../types";

interface TaskListProps {
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onEdit, onDelete }) => {
  const pendingTasks = tasks.filter((task) => task.status === "Pending");
  const doingTasks = tasks.filter((task) => task.status === "Doing");
  const doneTasks = tasks.filter((task) => task.status === "Done");
  return (
    <div>
      <h1 className="text-3xl font-bold mb-5">Your tasks</h1>

      <div className="flex md:flex-row flex-col gap-20">
        <ul className="border border-black p-5">
          <h1 className="text-3xl font-bold mt-5">Pending</h1>
          {pendingTasks.map((task) => (
            <li key={task.id}>
              <div className="mt-10 flex flex-row gap-10 mb-10">
                <span className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors ">
                  {task.task}
                </span>
                <Button
                  onClick={() => {
                    window.scrollTo(0, document.body.scrollHeight);
                    onEdit(task);
                  }}
                >
                  Edit
                </Button>
                <Button onClick={() => onDelete(task.id)}>Delete</Button>
              </div>
            </li>
          ))}
        </ul>

        <ul className="border border-black p-5">
          <h1 className="text-3xl font-bold mt-5">Doing</h1>
          {doingTasks.map((task) => (
            <li key={task.id}>
              <div className="mt-10 flex flex-row gap-10 mb-10">
                <span className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors ">
                  {task.task}
                </span>
                <Button
                  onClick={() => {
                    window.scrollTo(0, document.body.scrollHeight);
                    onEdit(task);
                  }}
                >
                  Edit
                </Button>
                <Button onClick={() => onDelete(task.id)}>Delete</Button>
              </div>
            </li>
          ))}
        </ul>

        <ul className="border border-black p-5">
          <h1 className="text-3xl font-bold mt-5">Done</h1>
          {doneTasks.map((task) => (
            <li key={task.id}>
              <div className="mt-10 flex flex-row gap-10 mb-10">
                <span className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors ">
                  {task.task}
                </span>
                <Button
                  onClick={() => {
                    window.scrollTo(0, document.body.scrollHeight);
                    onEdit(task);
                  }}
                >
                  Edit
                </Button>
                <Button onClick={() => onDelete(task.id)}>Delete</Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
