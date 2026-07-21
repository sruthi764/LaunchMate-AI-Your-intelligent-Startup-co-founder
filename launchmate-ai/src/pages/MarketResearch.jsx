import "./MarketResearch.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function MarketResearch() {
  const navigate = useNavigate();

  const [startupIdea, setStartupIdea] = useState("");
  const [category, setCategory] = useState("Education");
  const [location, setLocation] = useState("India");
  const [audience, setAudience] = useState("Students");

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!startupIdea.trim()) {
      alert("Please enter Startup Name");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/market?startup_idea=${encodeURIComponent(
          startupIdea
        )}`
      );

      const data = await response.json();

      if (data.market_research) {
        setResult(data.market_research);
      } else {
        alert("Failed to analyze market");
      }
    } catch (error) {
      console.error(error);
      alert("Backend Connection Error");
    }

    setLoading(false);
  };

  return (
    <div className="market-container">

      <div className="navigation-buttons">
        <button
          className="back-btn"
          onClick={() => navigate("/idea-generator")}
        >
          ◀
        </button>

        <button
          className="next-btn"
          onClick={() => navigate("/business-plan")}
        >
          ▶
        </button>
      </div>

      <h1>Market Research Agent</h1>

      <label>💡 Startup Name</label>

      <input
        type="text"
        placeholder="AI Study Planner"
        value={startupIdea}
        onChange={(e) => setStartupIdea(e.target.value)}
      />

      <label>📂 Category</label>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Education</option>
        <option>Healthcare</option>
        <option>Finance</option>
        <option>E-commerce</option>
      </select>

      <label>📍 Target Location</label>

      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      >
        <option>India</option>
        <option>USA</option>
        <option>UK</option>
      </select>

      <label>👥 Target Audience</label>

      <select
        value={audience}
        onChange={(e) => setAudience(e.target.value)}
      >
        <option>Students</option>
        <option>Professionals</option>
        <option>Businesses</option>
      </select>

      <button
        className="analyze-btn"
        onClick={handleAnalyze}
      >
        {loading ? "Analyzing..." : "🔍 Analyze Market"}
      </button>

      <div className="result-box">

        <h2>✨ AI Generated Result</h2>

        <div className="result-card">
          <pre
            style={{
              whiteSpace: "pre-wrap",
              fontFamily: "inherit",
            }}
          >
            {result || "Your AI Market Research will appear here..."}
          </pre>
        </div>

      </div>

    </div>
  );
}

export default MarketResearch;