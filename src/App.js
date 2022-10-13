import "./App.css";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/savedcrypto" element={<Saved></Saved>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
