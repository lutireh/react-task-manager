import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import RichTextEditor from "./RichTextEditor";

function AddTask({ onAddClick }) {
  const titleEditor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Type task title",
      }),
    ],
    content: "",
  });

  const descriptionEditor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Type task description",
      }),
    ],
    content: "",
  });

  function handleAddTask() {
    //check if title and description are not empty
    if (!titleEditor.getText().trim() || !descriptionEditor.getText().trim()) {
      return alert("Please fill in all fields");
    }
    onAddClick(titleEditor.getHTML(), descriptionEditor.getHTML());
    titleEditor.commands.clearContent();
    descriptionEditor.commands.clearContent();
  }

  return (
    <div className="space-y-4 p-6 bg-green-950 border border-green-800 rounded-md shadow flex flex-col">
      <RichTextEditor editor={titleEditor} minHeight="min-h-12" />
      <RichTextEditor editor={descriptionEditor} minHeight="min-h-28" />
      <button
        className="bg-green-500 hover:bg-green-400 text-green-950 px-4 py-2 rounded-md font-semibold self-end"
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
}

export default AddTask;
