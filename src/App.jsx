import { useState } from "react";
import { useEffect } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(getInitialTasks());

  function getInitialTasks() {
    try {
      return JSON.parse(localStorage.getItem("tasks")) || [];
    } catch {
      localStorage.removeItem("tasks");
      return [];
    }
  }

  useEffect(() => {
    // what happens when tasks change
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]); // what changed

  const [filter, setFilter] = useState("all");
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") {
      return task.isCompleted;
    }

    if (filter === "incomplete") {
      return !task.isCompleted;
    }

    return true;
  });

  function getEmptyMessage() {
    switch (filter) {
      case "completed":
        return "No completed tasks yet.";
      case "incomplete":
        return "No incomplete tasks found.";
      default:
        return "No tasks yet. Add your first task above.";
    }
  }

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddClick(title, description) {
    const newTask = {
      id: uuidv4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-auto bg-green-950 flex justify-center p-6">
      <div className="w-full max-w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Task Manager
        </h1>
        <AddTask onAddClick={onAddClick} />
        <Tasks
          tasks={filteredTasks}
          filter={filter}
          onTaskClick={onTaskClick}
          onDeleteClick={onDeleteClick}
          onFilterChange={setFilter}
        />
      </div>
    </div>
  );
}

export default App;
