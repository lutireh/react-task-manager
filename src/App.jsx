import { useState } from "react";
import { useEffect } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );

  useEffect(() => {
    // what happens when tasks change
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]); // what changed

  useEffect(() => {
    async function fetchTasks() {
      // API call
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET",
        },
      );

      const data = await response.json(); //convert the response to JSON

      // save the API response in the state
      setTasks(data);
    }
    fetchTasks();
  }, []); // when useEffect is used with an empty dependency array, it runs only once when the component mounts

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
    <div className="w-screen h-screen bg-green-950 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Task Manager
        </h1>
        <AddTask onAddClick={onAddClick} />
        <Tasks
          tasks={filteredTasks}
          onTaskClick={onTaskClick}
          onDeleteClick={onDeleteClick}
          onFilterChange={setFilter}
        />
      </div>
    </div>
  );
}

export default App;
