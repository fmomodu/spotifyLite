import { useState } from "react";
import "./App.css";
import MainContent from "./components/mainContent";
import PlayBar from "./components/playBar";
import RightP from "./components/rightP";
import SideBar from "./components/sidebar";
import TopNav from "./components/topNav";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="spotify-layout">
      <TopNav search={search} setSearch={setSearch} />

      <div className="main-layout">
        <SideBar />
        <MainContent search={search} />
        <RightP />
      </div>

      <PlayBar />
    </div>
  );
}

export default App;