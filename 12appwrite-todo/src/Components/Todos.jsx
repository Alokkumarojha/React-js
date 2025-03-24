import React, { useState, useEffect } from "react";
import { databases, client } from "../../Appwrite/appwriteConfig";
import TodoForm from "./TodoForm";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      try {
        const response = await databases.listDocuments(
          "67dab3bb0024d3089edc",
          "67dab411003d7f8627dd"
        );

        setTodos(response.documents);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  // Delete todo function

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this todo?")) return; // Confirmation dialog

    setDeletingId(id); // Show loading state

    try {
      await databases.deleteDocument(
        "67dab3bb0024d3089edc",
        "67dab411003d7f8627dd",
        id
      );

      setTodos((prevTodos) => prevTodos.filter((todo) => todo.$id !== id)); // Remove from UI
    } catch (error) {
      console.error("Error deleting todo:", error);
      alert("Failed to delete todo. Please try again."); // Show error message
    } finally {
      setDeletingId(null); // Reset loading state
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <p className="text-xl font-bold mb-2">Todo List</p>
        <TodoForm setTodos={setTodos} />
        {loading ? (
          <p>Loading ...</p>
        ) : todos.length === 0 ? (
          <p className="text-center text-gray-500">No todos available.</p>
        ) : (
          <div>
            {todos &&
              todos.map((item) => (
                <div key={item.$id}>
                  <div className="p-4 flex items-center justify-between border-b-2 bg-gray-100 rounded-lg mb-1">
                    <div>
                      <p>{item.todo}</p>
                    </div>
                    <div>
                      <span
                        className={`text-red-400 cursor-pointer ${
                          deletingId === item.$id
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                        }`}
                        onClick={() => handleDelete(item.$id)}
                      >
                        Delete
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Todos;
