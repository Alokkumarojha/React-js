import { useEffect, useState } from "react";
import { getNotes, addNote, deleteNote, updateNote } from "./api";

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editNoteId, setEditNoteId] = useState(null);

  useEffect(() => {
    async function fetchNotes() {
      const fetchedNotes = await getNotes();
      setNotes(fetchedNotes);
    }
    fetchNotes();
  }, []);

  // ✅ Add / Update Note Function
  const handleAddOrUpdateNote = async () => {
    if (editMode) {
      // 📝 Updating Existing Note
      const updatedNote = await updateNote(editNoteId, title, content);
      if (updatedNote) {
        setNotes(
          notes.map((note) => (note.$id === editNoteId ? updatedNote : note))
        );
        setEditMode(false);
        setEditNoteId(null);
      }
    } else {
      // ➕ Adding New Note
      const newNote = await addNote(title, content);
      if (newNote) {
        setNotes([...notes, newNote]);
      }
    }
    setTitle("");
    setContent("");
  };

  // ✅ Edit Note Function
  const handleEditNote = (note) => {
    setTitle(note.title);
    setContent(note.content);
    setEditMode(true);
    setEditNoteId(note.$id);
  };

  return (
    <div className="App">
      <h1>📝 Notes App</h1>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={handleAddOrUpdateNote}>
          {editMode ? "✏️ Update Note" : "➕ Add Note"}
        </button>
      </div>
      <ul>
        {notes.map((note) => (
          <li key={note.$id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button onClick={() => handleEditNote(note)}>✏️ Edit</button>
            <button onClick={() => deleteNote(note.$id)}>❌ Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
