import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const cards = [
    { icon: "💡", title: "Idea Generator", path: "/idea-generator" },
    { icon: "📊", title: "Market Research", path: "/market-research" },
    { icon: "📋", title: "Business Plan", path: "/business-plan" },
    { icon: "💰", title: "Finance", path: "/finance" },
    { icon: "📢", title: "Marketing", path: "/marketing" },
    { icon: "🤖", title: "AI Mentor", path: "/ai-mentor" },
    { icon: "⚖️", title: "Legal", path: "/legal" },
    { icon: "📄", title: "Final Report", path: "/final-report" },
    { icon: "⚙️", title: "Settings", path: "/settings" },
  ];

  return (
    <div className="dashboard">
      <h1 className="logo">LaunchMate AI</h1>
      <p className="tagline">Your Intelligent Startup Co-Founder</p>

      <h2 className="welcome">Welcome Back 👋</h2>
      <p className="subtitle">Continue building your startup</p>

      <div className="card-grid">
        {cards.map((card, index) => (
          <div
            className="card"
            key={index}
            onClick={() => navigate(card.path)}
          >
            <div className="icon">{card.icon}</div>
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;