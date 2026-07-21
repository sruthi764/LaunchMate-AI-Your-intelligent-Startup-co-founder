import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import IdeaGenerator from "./pages/IdeaGenerator";
import MarketResearch from "./pages/MarketResearch";
import BusinessPlan from "./pages/BusinessPlan";
import Finance from "./pages/Finance";
import Marketing from "./pages/Marketing";
import AIMentor from "./pages/AIMentor";
import Legal from "./pages/Legal";
import FinalReport from "./pages/FinalReport";
import Settings from "./pages/Settings";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/idea-generator" element={<IdeaGenerator />} />
        <Route path="/market-research" element={<MarketResearch />} />
        <Route path="/business-plan" element={<BusinessPlan />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/ai-mentor" element={<AIMentor />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/FinalReport" element={<FinalReport />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;