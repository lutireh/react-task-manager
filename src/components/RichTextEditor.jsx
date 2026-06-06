import { EditorContent } from "@tiptap/react";
import { Bold, Italic } from "lucide-react";

function RichTextEditor({ editor, minHeight }) {
  if (!editor) {
    return null;
  }

  return (
    <div className="space-y-2">
      <div className="flex gap-2 bg-green-900 p-2 rounded-md border border-green-800">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded-md ${
            editor.isActive("bold")
              ? "bg-green-500 text-white"
              : "bg-green-800 text-green-100 hover:bg-green-700"
          }`}
        >
          <Bold size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded-md ${
            editor.isActive("italic")
              ? "bg-green-500 text-white"
              : "bg-green-800 text-green-100 hover:bg-green-700"
          }`}
        >
          <Italic size={18} />
        </button>
      </div>
      <div
        className={`bg-green-900 text-green-50 rounded-md px-4 py-3 ${minHeight} border border-green-800 focus-within:border-green-400`}
      >
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}

export default RichTextEditor;
