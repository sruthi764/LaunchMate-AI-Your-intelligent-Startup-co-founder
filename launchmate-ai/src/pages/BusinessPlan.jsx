import "./BusinessPlan.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BusinessPlan() {
  const navigate = useNavigate();

  const [startupIdea, setStartupIdea] = useState("");
  const [result, setResult] = useState("");

  const generateBusinessPlan = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/business?startup_idea=${encodeURIComponent(startupIdea)}`
      );

      const data = await response.json();

      if (data.business_plan) {
        setResult(data.business_plan);
      } else {
        alert("Failed to generate business plan");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  return (
    <div className="business-container">

      {/* Navigation */}
      <div className="navigation-buttons">
        <button
          className="back-btn"
          onClick={() => navigate("/market-research")}
        >
          ◀
        </button>

        <button
          className="next-btn"
          onClick={() => navigate("/finance")}
        >
          ▶
        </button>
      </div>

      <h1>Business Planning Agent</h1>

      <label>💡 Startup Name</label>
      <input
        type="text"
        placeholder="AI Study Planner"
        value={startupIdea}
        onChange={(e) => setStartupIdea(e.target.value)}
      />

      <label>📂 Category</label>
      <select>
        <option>Education</option>
        <option>Healthcare</option>
        <option>Finance</option>
        <option>E-commerce</option>
      </select>

      <label>💼 Business Model</label>
      <input
        type="text"
        placeholder="Freemium"
      />

      <label>👥 Target Audience</label>
      <select>
        <option>Students</option>
        <option>Professionals</option>
        <option>Businesses</option>
      </select>

      <label>₹ Funding Requirement (Optional)</label>
      <input
        type="text"
        placeholder="Enter amount (in INR)"
      />

      <button
        className="generate-btn"
        onClick={generateBusinessPlan}
      >
        ✨ Generate Business Plan
      </button>

      <div className="result-box">
        <h2>✨ AI Generated Result</h2>

        <div className="result-card">
          <pre
            style={{
              whiteSpace: "pre-wrap",
              textAlign: "left",
            }}
          >
            {result}
          </pre>
        </div>
      </div>

    </div>
  );
}

export default BusinessPlan;