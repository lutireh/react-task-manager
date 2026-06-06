import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, filter, onTaskClick, onDeleteClick, onFilterChange }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams({
      title: task.title,
      description: task.description,
    }).toString();
    navigate(`/task?${query}`);
  }

  return (
    <div>
      <div className="space-y-4 p-6 bg-green-950 border border-green-800 rounded-md shadow">
        <div className="flex gap-2">
          <button
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              filter === "all"
                ? "bg-green-500 text-green-950"
                : "bg-green-900 text-green-100 hover:bg-green-800"
            }`}
            onClick={() => onFilterChange("all")}
          >
            All
          </button>
          <button
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              filter === "completed"
                ? "bg-green-500 text-green-950"
                : "bg-green-900 text-green-100 hover:bg-green-800"
            }`}
            onClick={() => onFilterChange("completed")}
          >
            Completed
          </button>
          <button
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              filter === "incomplete"
                ? "bg-green-500 text-green-950"
                : "bg-green-900 text-green-100 hover:bg-green-800"
            }`}
            onClick={() => onFilterChange("incomplete")}
          >
            Incomplete
          </button>
        </div>
      </div>

      {tasks.length === 0 ? (
        <p className="text-green-200 text-sm text-center py-6">
          No tasks found.
        </p>
      ) : (
        <ul className="space-y-4 p-6 bg-green-100 rounded-md shadow">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center gap-2 rounded-md bg-green-900 border border-green-800 p-2 min-h-14 hover:border-green-500 transition"
            >
              <span
                className={`mx-2 my-auto h-3 w-3 rounded-full ${
                  task.isCompleted
                    ? "bg-green-400"
                    : "bg-green-900 border border-green-500"
                }`}
              />
              <button
                className={`flex-1 text-left px-3 py-2 rounded-md text-green-50 truncate ${
                  task.isCompleted
                    ? "line-through text-green-300 opacity-70"
                    : ""
                }`}
                onClick={() => onTaskClick(task.id)}
              >
                <span
                  className="block truncate"
                  dangerouslySetInnerHTML={{ __html: task.title }}
                />
              </button>
              <button
                className="shrink-0 p-2 rounded-md text-green-100 hover:bg-green-800"
                onClick={() => onSeeDetailsClick(task)}
              >
                <ChevronRightIcon size={20} />
              </button>
              <button
                className="shrink-0 p-2 rounded-md text-green-100 hover:bg-red-500 hover:text-white"
                onClick={() => onDeleteClick(task.id)}
              >
                <TrashIcon size={20} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Tasks;
