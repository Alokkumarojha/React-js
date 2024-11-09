import About from "./Components/About";
import Home from "./Components/Home";
import Massage from "./Components/Massage";
import UserContextProvider from "./Context/UserContextProvider";

function App() {
  return (
    <>
      <UserContextProvider>
        <Home />
      </UserContextProvider>
    </>
  );
}

export default App;
