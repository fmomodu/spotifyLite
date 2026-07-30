import "./App.css";
import MainContent from "./components/mainContent";
import PlayBar from "./components/playBar";
import RightP from "./components/rightP";
import SideBar from "./components/sidebar";
import TopNav from "./components/topNav";

function App() {
  return (
    <div className="spotify-layout">
      <TopNav />

      <div className="main-layout">
        <SideBar />
        <MainContent />
        <RightP />
      </div>

      <PlayBar />
    </div>
  );
}

export default App