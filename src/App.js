import "./App.css";
import Home from "./pages/Home";

import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const url = "https://karthik-crypto.herokuapp.com";
  // const url = "http://localhost:8800";
  const apiType = {
    getPosts: axios.get(url + "/live/get"),
    savePost: axios.post,
    getSavedPost: axios.get(url + "/api/get"),
  };

  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                url={url}
                responseType={true}
                save={apiType.savePost}
                api={apiType.getPosts}
              />
            }
          />
          <Route
            path="/savedcrypto"
            element={
              <Home api={apiType.getSavedPost} url={url} responseType={false} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
