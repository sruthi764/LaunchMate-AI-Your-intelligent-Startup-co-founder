import "./AIMentor.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AIMentor() {
  const navigate = useNavigate();

  const [startupName, setStartupName] = useState("");
  const [category, setCategory] = useState("Education");
  const [stage, setStage] = useState("");
  const [help, setHelp] = useState("");
  const [question, setQuestion] = useState("");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const generateMentorship = async () => {
    if (!startupName) {
      alert("Please enter Startup Name");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/mentor?startup_idea=${encodeURIComponent(
          startupName
        )}`
      );

      const data = await response.json();

      if (data.mentor_report) {
        setResult(data.mentor_report);
      } else if (data.error) {
        setResult(data.error);
      } else {
        setResult("No mentorship generated.");
      }
    } catch (error) {
      setResult("Failed to connect to backend.");
    }

    setLoading(false);
  };

  return (
    <div className="mentor-container">

      {/* Navigation */}
      <div className="navigation-buttons">
        <button
          className="back-btn"
          onClick={() => navigate("/marketing")}
        >
          ◀
        </button>

        <button
          className="next-btn"
          onClick={() => navigate("/legal")}
        >
          ▶
        </button>
      </div>

      <h1>AI Mentor Agent</h1>

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

      <label>💼 Current Stage</label>
      <input
        type="text"
        placeholder="Idea Validation"
        value={stage}
        onChange={(e) => setStage(e.target.value)}
      />

      <label>🎯 What do you need help with?</label>
      <input
        type="text"
        placeholder="Business Strategy"
        value={help}
        onChange={(e) => setHelp(e.target.value)}
      />

      <label>📝 Your Question / Description</label>
      <textarea
        placeholder="How can I grow my user base in the initial stage with limited budget?"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button
        className="mentor-btn"
        onClick={generateMentorship}
      >
        ✨ Get AI Mentorship
      </button>

      {loading && (
        <div className="result-box">
          <h2>Generating AI Mentorship...</h2>
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

export default AIMentor;