import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []); // Empty dependency array -> runs only on initial mount

  return (
    <div>
      <h1>Users:</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

//   let [count, setCount] = useState(0);

//   let increseNumber = () => {
//     if (count < 20) {
//       setCount((prevCounter) => prevCounter + 1);
//       setCount((prevCounter) => prevCounter + 1);
//       setCount((prevCounter) => prevCounter + 1);
//       setCount((prevCounter) => prevCounter + 1);
//     } else {
//       setCount(20);
//     }
//   };
//   let DecreseNumber = () => {
//     if (count > 0) {
//       count = count - 1;
//       setCount(count);
//     } else {
//       setCount(0);
//     }
//   };

//   useEffect(() => {
//     console.log("This logs every render, count is", count);
//   });

//   return (
//     <>
//       <h1>Increse and Decrese Number</h1>
//       <h2>Count is: {count}</h2>
//       <button onClick={increseNumber}>Increse</button>
//       <button onClick={DecreseNumber}>Decrese</button>
//     </>
//   );
// }

// export default App;
