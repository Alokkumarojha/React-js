import React, { useEffect, useState } from "react";
import { getNotes } from "../Appwrite/api";
import AddNoteForm from "./AddNoteForm"; // Import AddNoteForm component

function NotesList() {
  const [notes, setNotes] = useState([]);

  const fetchData = async () => {
    const data = await getNotes();
    setNotes(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Notes List</h2>

      {/* Add Note Form */}
      <AddNoteForm onNoteAdded={fetchData} />

      {/* Notes List */}
      {notes.map((note) => (
        <div key={note.$id} className="border p-3 my-2 rounded shadow">
          <h3 className="font-bold">{note.title}</h3>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
}

export default NotesList;
