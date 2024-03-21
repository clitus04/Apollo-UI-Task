import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainlayout from "./module/Mainlayout";
import Dashboard from "./module/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/first" element={<Dashboard />} />
          <Route path="/first/second" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
