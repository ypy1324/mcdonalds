import "./App.css";
import A from "./Component/A";
import B from "./Component/B";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/A" element={<A />} />
        <Route path="/B" element={<B />} />
      </Routes>
    </>
  );
}

export default App;
