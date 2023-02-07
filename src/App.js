import { Route, Routes } from "react-router-dom";
import "./App.css";
import DesktopHeader from "./components/desktop-header";
import HomeMain from "./components/desktop-home-main";
import { Destination, Crew, Technology } from "./pages";

function App() {
  return (
    <div className="Home-page">
      <DesktopHeader />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/home" element={<HomeMain />} />
        <Route path="destination" element={<Destination />} />
        <Route path="crew" element={<Crew />} />
        <Route path="technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
