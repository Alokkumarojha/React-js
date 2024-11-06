import React from "react";
import { useParams } from "react-router-dom";
function Users() {
  const { userId } = useParams();
  return (
    <div className="bg-gray-600 text-white text-3xl text-center p-4">
      Users:{userId}{" "}
    </div>
  );
}

export default Users;
