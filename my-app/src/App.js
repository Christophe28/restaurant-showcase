import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Error404 from "./pages/Error404";

import "./style/index.scss";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
