import React, { useState } from "react";
import UserContext from "./UserContext";
function UserContextProvider(props) {
  const userDetails = {
    name: "Alok",
    class: "1St Class",
    massage: "I am learning Context API. This project made by me.",
  };
  const [state, setState] = useState(userDetails);

  const update = () => {
    setTimeout(() => {
      setState({
        name: "A.K ojha",
        class: "1St Class premium",
        massage:
          "I am learning Context API and i am changing userDetails value using state .",
      });
    }, 2000);
  };
  return (
    <UserContext.Provider value={{ state, update }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
