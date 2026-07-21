import "./Finance.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Finance() {
  const navigate = useNavigate();

  const [startupName, setStartupName] = useState("");
  const [category, setCategory] = useState("Education");
  const [businessModel, setBusinessModel] = useState("");
  const [investment, setInvestment] = useState("");
  const [teamSize, setTeamSize] = useState("");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const generateFinance = async () => {
    if (!startupName) {
      alert("Please enter Startup Name");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/finance?startup_idea=${encodeURIComponent(
          startupName
        )}`
      );

      const data = await response.json();

      if (data.finance_report) {
        setResult(data.finance_report);
      } else if (data.error) {
        setResult(data.error);
      } else {
        setResult("No result generated.");
      }
    } catch (error) {
      setResult("Failed to connect to backend.");
    }

    setLoading(false);
  };

  return (
    <div className="finance-container">

      {/* Navigation */}
      <div className="navigation-buttons">
        <button
          className="back-btn"
          onClick={() => navigate("/business-plan")}
        >
          ◀
        </button>

        <button
          className="next-btn"
          onClick={() => navigate("/marketing")}
        >
          ▶
        </button>
      </div>

      <h1>Finance Agent</h1>

      <label>💡 Startup Name</label>
      <input
        type="text"
        placeholder="AI Study Planner"
        value={startupName}
        onChange={(e) => setStartupName(e.target.value)}
      />

      <label>📂 Category</label>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Education</option>
        <option>Healthcare</option>
        <option>Finance</option>
        <option>E-Commerce</option>
      </select>

      <label>💼 Business Model</label>
      <input
        type="text"
        placeholder="Freemium"
        value={businessModel}
        onChange={(e) => setBusinessModel(e.target.value)}
      />

      <label>💰 Estimated Initial Investment</label>
      <input
        type="text"
        placeholder="₹ 2,50,000"
        value={investment}
        onChange={(e) => setInvestment(e.target.value)}
      />

      <label>👥 Team Size (Optional)</label>
      <input
        type="number"
        placeholder="2"
        value={teamSize}
        onChange={(e) => setTeamSize(e.target.value)}
      />

      <button
        className="finance-btn"
        onClick={generateFinance}
      >
        💰 Calculate Finance
      </button>

      {loading && (
        <div className="result-box">
          <h2>Generating Finance Report...</h2>
        </div>
      )}

      {!loading && result && (
        <div className="result-box">
          <h2>✨ AI Generated Result</h2>

          <div className="result-card">
            <pre
              style={{
                whiteSpace: "pre-wrap",
                fontFamily: "inherit",
              }}
            >
              {result}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}

export default Finance;