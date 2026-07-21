import "./Marketing.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Marketing() {
  const navigate = useNavigate();

  const [startupName, setStartupName] = useState("");
  const [category, setCategory] = useState("Education");
  const [businessModel, setBusinessModel] = useState("");
  const [targetAudience, setTargetAudience] = useState("Students");
  const [usp, setUSP] = useState("");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const generateMarketing = async () => {
    if (!startupName) {
      alert("Please enter Startup Name");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/marketing?startup_idea=${encodeURIComponent(
          startupName
        )}`
      );

      const data = await response.json();

      if (data.marketing_report) {
        setResult(data.marketing_report);
      } else if (data.error) {
        setResult(data.error);
      } else {
        setResult("No marketing strategy generated.");
      }
    } catch (error) {
      setResult("Failed to connect to backend.");
    }

    setLoading(false);
  };

  return (
    <div className="marketing-container">

      {/* Navigation */}
      <div className="navigation-buttons">
        <button
          className="back-btn"
          onClick={() => navigate("/finance")}
        >
          ◀
        </button>

        <button
          className="next-btn"
          onClick={() => navigate("/ai-mentor")}
        >
          ▶
        </button>
      </div>

      <h1>Marketing Agent</h1>

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

      <label>👥 Target Audience</label>
      <select
        value={targetAudience}
        onChange={(e) => setTargetAudience(e.target.value)}
      >
        <option>Students</option>
        <option>Professionals</option>
        <option>Businesses</option>
      </select>

      <label>📣 USP (Unique Selling Proposition)</label>
      <input
        type="text"
        placeholder="Personalized AI learning roadmaps and doubt solving"
        value={usp}
        onChange={(e) => setUSP(e.target.value)}
      />

      <button
        className="marketing-btn"
        onClick={generateMarketing}
      >
        📣 Generate Marketing Strategy
      </button>

      {loading && (
        <div className="result-box">
          <h2>Generating Marketing Strategy...</h2>
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

export default Marketing;