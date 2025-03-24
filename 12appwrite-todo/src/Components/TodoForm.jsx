import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";
import { databases } from "../../Appwrite/appwriteConfig";

function TodoForm({ setTodos }) {
  const [todo, setTodo] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!todo.trim()) return;

    setLoading(true); // ✅ Show loading while adding

    try {
      const response = await databases.createDocument(
        "67dab3bb0024d3089edc",
        "67dab411003d7f8627dd",
        uuidv4(),
        { todo }
      );

      setTodos((prevTodos) => [...prevTodos, response]); // ✅ Update todo list instantly

      setTodo(""); // ✅ Clear input after submission
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // ✅ Stop loading
    }
  };
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex justify-center mb-10"
      >
        <input
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          value={todo}
          placeholder="Enter Todo"
          className="border p-2 w-2/3 rounded-md"
        />
        <button
          className="bg-purple-500 p-2 text-white ml-2 rounded-md"
          type="submit"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Todo"} {/* ✅ Show loading text */}
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
