import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function About() {
  const a = useContext(UserContext);
  // const { userDetails } = useContext(UserContext);
  return <div>This is about page of : {a.userDetails.name}</div>;
}

export default About;
