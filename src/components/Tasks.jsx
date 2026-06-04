import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, onDeleteClick, onFilterChange }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams({
      title: task.title,
      description: task.description,
    }).toString();
    navigate(`/task?${query}`);
  }
  return (
    <ul className="space-y-4 p-6  bg-green-100 rounded-md shadow">
      <li className="flex gap-4 w-full items-center">
        <button
          className="bg-green-500 text-white p-2 rounded-md"
          value="all"
          onClick={(event) => onFilterChange(event.target.value)}
        >
          All
        </button>
        <button
          className=" bg-green-500 text-white p-2 rounded-md"
          value="completed"
          onClick={(event) => onFilterChange(event.target.value)}
        >
          Completed
        </button>
        <button
          className=" bg-green-500 text-white p-2 rounded-md"
          value="incomplete"
          onClick={(event) => onFilterChange(event.target.value)}
        >
          Incomplete
        </button>
      </li>

      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            className={`bg-green-800 text-left text-white p-2 rounded-md w-full ${task.isCompleted && "line-through"}`}
            onClick={() => onTaskClick(task.id)}
          >
            {task.title}
          </button>
          <button
            className="bg-green-800 p-2 rounded-md text-white"
            onClick={() => onSeeDetailsClick(task)}
          >
            <ChevronRightIcon />
          </button>
          <button
            className="bg-green-800 p-2 rounded-md text-white"
            onClick={() => onDeleteClick(task.id)}
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
