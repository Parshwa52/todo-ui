"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import TaskForm from "@/components/tasks-page/taskInput";
import TaskList from "@/components/tasks-page/taskList";
import { Task } from "../types";

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get<Task[]>("/api/tasks");
      setTasks(response.data);
    };
    fetchTasks();
  }, []);

  const handleSave = async () => {
    const response = await axios.get<Task[]>("/api/tasks");
    setTasks(response.data);
    setEditingTask(null);
  };

  const handleEdit = (task: Task) => {
    setEditingTask(task);
  };

  const handleDelete = async (id: number) => {
    await axios.delete(`/api/tasks/${id}`);
    const response = await axios.get<Task[]>("/api/tasks");
    setTasks(response.data);
  };

  return (
    <div className="pl-5">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold">Todo List</h1>
      </div>
      <TaskList tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />
      <TaskForm task={editingTask} onSave={handleSave} />
    </div>
  );
};

export default Home;
