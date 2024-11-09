import React, { useContext, useEffect } from "react";
import UserContext from "../Context/UserContext";
function Home() {
  const a = useContext(UserContext);
  useEffect(() => {
    a.update();
  }, []);

  return (
    <div>
      This is a Home page of {a.state.name} <br /> {a.state.class}
      <br />
      {a.state.massage}
    </div>
  );
}

export default Home;
