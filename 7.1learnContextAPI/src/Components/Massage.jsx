import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Massage() {
  const { userDetails } = useContext(UserContext);
  return <div>This is a massage page - {userDetails.massage}</div>;
}

export default Massage;
