import "./App.css";

import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
function App() {
  return (
    <div className="App">
      <div className="app_body">
        <Sidebar>
        </Sidebar>
        <Chat></Chat>
      </div>
    </div>
  );
}

export default App;
