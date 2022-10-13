import "./App.css";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saved" element={<Saved></Saved>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
