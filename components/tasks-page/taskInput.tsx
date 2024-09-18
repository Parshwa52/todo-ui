import { useState, FormEvent, useEffect } from "react";
import axios from "axios";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Task } from "../../types";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TaskFormProps {
  task?: Task | null;
  onSave: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ task, onSave }) => {
  const [taskName, setTaskName] = useState(task ? task.task : "");
  const [updateTaskName, setUpdateTaskName] = useState(task ? task.task : "");
  const [updateTaskStatus, setUpdateTaskStatus] = useState(
    task ? task.status : ""
  );

  // Use useEffect to update state when the task prop changes
  useEffect(() => {
    if (task) {
      setUpdateTaskName(task.task);
      setUpdateTaskStatus(task.status);
    }
  }, [task]);

  const handleAddTask = async (e: FormEvent) => {
    e.preventDefault();
    if (!taskName) return;
    const url = "/api/tasks";
    const method = "POST";
    await axios({ url, method, data: { task: taskName, status: "Pending" } });
    setTaskName("");
    onSave();
  };

  const handleUpdateTask = async (e: FormEvent) => {
    e.preventDefault();
    console.log({ updateTaskName });
    console.log({ updateTaskStatus });
    console.log(task!.id);
    // const taskId
    // // e.preventDefault();
    // if (!task.id) return;
    const url = `/api/tasks/${task!.id}`;
    const method = "PUT";
    await axios({
      url,
      method,
      data: { task: updateTaskName, status: updateTaskStatus },
    });
    setUpdateTaskName("");
    onSave();
  };

  return (
    <div className="mt-20">
      <h1 className="text-3xl font-bold mt-5 mb-5">Add the task</h1>
      <form onSubmit={handleAddTask}>
        <Input
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Enter task"
          className="w-[50%] mb-5"
        />
        <Button type="submit">Add Task</Button>
      </form>

      {task && (
        <div className="border border-black p-5 md:w-[50%] w-full mt-10">
          <h1 className="text-3xl font-bold mt-5 mb-5">Update the task</h1>
          <form onSubmit={handleUpdateTask}>
            <Input
              value={updateTaskName}
              onChange={(e) => setUpdateTaskName(e.target.value)}
              placeholder="Enter task"
              className="w-[50%] mb-5"
            />

            <Select
              defaultValue="Pending"
              value={updateTaskStatus}
              onValueChange={(value) => setUpdateTaskStatus(value)}
              required={true}
            >
              <SelectTrigger className="w-full mb-5">
                <SelectValue placeholder="Select task status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Task Status</SelectLabel>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Doing">Doing</SelectItem>
                  <SelectItem value="Done">Done</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Button type="submit" disabled={updateTaskStatus === ""}>
              Update Task
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default TaskForm;
