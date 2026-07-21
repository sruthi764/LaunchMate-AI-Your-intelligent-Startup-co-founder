import "./Legal.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Legal() {
  const navigate = useNavigate();

  const [startupName, setStartupName] = useState("");
  const [category, setCategory] = useState("Education");
  const [businessType, setBusinessType] = useState("");
  const [location, setLocation] = useState("India");
  const [requirement, setRequirement] = useState("");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const generateLegalGuide = async () => {
    if (!startupName) {
      alert("Please enter Startup Name");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/legal?startup_idea=${encodeURIComponent(
          startupName
        )}`
      );

      const data = await response.json();

      if (data.legal_report) {
        setResult(data.legal_report);
      } else if (data.error) {
        setResult(data.error);
      } else {
        setResult("No legal guide generated.");
      }
    } catch (error) {
      setResult("Failed to connect to backend.");
    }

    setLoading(false);
  };

  return (
    <div className="legal-container">

      {/* Navigation */}
      <div className="navigation-buttons">
        <button
          className="back-btn"
          onClick={() => navigate("/ai-mentor")}
        >
          ◀
        </button>

        <button
          className="next-btn"
          onClick={() => navigate("/FinalReport")}
        >
          ▶
        </button>
      </div>

      <h1>Legal Agent</h1>

      <label>💡 Startup Name</label>
      <input
        type="text"
        placeholder="AI Study Planner"
        value={startupName}
        onChange={(e) => setStartupName(e.target.value)}
      />

      <label>📂 Business Category</label>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Education</option>
        <option>Healthcare</option>
        <option>Finance</option>
        <option>E-Commerce</option>
      </select>

      <label>💼 Business Type</label>
      <input
        type="text"
        placeholder="Private Limited Company"
        value={businessType}
        onChange={(e) => setBusinessType(e.target.value)}
      />

      <label>📍 Business Location</label>
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      >
        <option>India</option>
        <option>USA</option>
        <option>UK</option>
      </select>

      <label>📝 Legal Requirement</label>
      <input
        type="text"
        placeholder="Startup Registration & Compliance"
        value={requirement}
        onChange={(e) => setRequirement(e.target.value)}
      />

      <button
        className="legal-btn"
        onClick={generateLegalGuide}
      >
        ⚖ Generate Legal Guide
      </button>

      {loading && (
        <div className="result-box">
          <h2>Generating Legal Guide...</h2>
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

export default Legal;