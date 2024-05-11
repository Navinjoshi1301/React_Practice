import UserContextProvider from "./context/UserContextProvider";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
 

  return (
    <UserContextProvider>
      <h1>test</h1>
      <h2>Hello </h2>
      <Login/>
      <Profile/>
    </UserContextProvider>
  );
}

export default App;
