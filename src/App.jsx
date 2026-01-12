import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ParticipantDashboard from "./pages/ParticipantDashboard";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-yellow-400">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<ParticipantDashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
