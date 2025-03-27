import React, { useState } from "react";
import { addNote } from "../Appwrite/api";

function AddNoteForm({ onNoteAdded }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      alert("Both title and content are important!");
      return;
    }

    const newNote = await addNote(title, content);
    if (newNote) {
      alert("Note added successfully!");
      setTitle("");
      setContent("");
      onNoteAdded(); // Refresh notes list
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
      <h2 className="text-lg font-bold mb-2">Add a New Note</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Note
      </button>
    </form>
  );
}

export default AddNoteForm;
