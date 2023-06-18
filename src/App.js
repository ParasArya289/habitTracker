import { Navbar } from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Archive } from "./Pages/Archive/Archive";
import { Home } from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </div>
  );
}

export default App;
