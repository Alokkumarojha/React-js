import { databases ,ID } from "./appwriteConfig";

export const getNotes = async () => {
    try {
        const response = await databases.listDocuments(
            "67e43cbe0006710a7d1b", // Database ID
            "67e43ce30037f2b9e76f" // Collection ID
        );
        return response.documents;
    } catch (error) {
        console.error("Error fetching notes:", error);
        return [];
    }
};

// addNote function

export const addNote = async (title, content) => {
    try {
        const response = await databases.createDocument(
            "67e43cbe0006710a7d1b", // Database ID
            "67e43ce30037f2b9e76f", // Collection ID
            ID.unique(), // Unique ID generate karega
            {
                title: title,
                content: content,
            }
        );
        return response;
    } catch (error) {
        console.error("Error adding note:", error);
        return null;
    }
};

//Edit Note
 
export const updateNote = async (noteId, title, content) => {
    try {
        const response = await databases.updateDocument(
            "67e43cbe0006710a7d1b", // Database ID
            "67e43ce30037f2b9e76f", // Collection ID
            noteId, // Note ID
            { title, content } // Updated Data
        );
        return response;
    } catch (error) {
        console.error("Error updating note:", error);
    }
};

//Delete Note
// ✅ Delete Note
export const deleteNote = async (noteId) => {
    try {
        await databases.deleteDocument(
            "67e43cbe0006710a7d1b", // Database ID
            "67e43ce30037f2b9e76f", // Collection ID
            noteId // Note ID to delete
        );
    } catch (error) {
        console.error("Error deleting note:", error);
    }
};
