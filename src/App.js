import "./App.css";

import { Route, Routes } from "react-router-dom";
import PlaceHolder from "./components/placeholder/PlaceHolder";
import Shelves from "./pages/shelves/Shelves";
import Search from "./pages/search/Search";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<PlaceHolder />}>
          <Route index element={<Shelves />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
