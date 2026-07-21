import "./Settings.css";
import { useNavigate } from "react-router-dom";

function Settings() {
  const navigate = useNavigate();

  return (
    <div className="settings-container">

      <div className="navigation-buttons">
        <button
          className="back-btn"
          onClick={() => navigate("/dashboard")}
        >
          ◀
        </button>
      </div>

      <h1>Settings</h1>

      <div className="profile-card">
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="profile"
        />

        <div className="profile-info">
          <h3>Varshini</h3>
          <p>varshini18@gmail.com</p>

          <button className="edit-btn">
            ✏ Edit Profile
          </button>
        </div>
      </div>

      <h2 className="section-title">⚙ App Settings</h2>

      <div className="setting-card">
        <span>🌙 Dark Mode</span>
        <input type="checkbox" />
      </div>

      <div className="setting-card">
        <span>🔔 Notifications</span>
      </div>

      <div className="setting-card">
        <span>🌐 Language</span>

        <select>
          <option>English</option>
          <option>Telugu</option>
        </select>
      </div>

      <div className="setting-card">
        <span>🛡 Privacy & Security</span>
      </div>

      <h2 className="section-title">👤 Account</h2>

      <div
        className="setting-card logout"
        onClick={() => navigate("/")}
      >
        🚪 Logout
      </div>

      <button className="save-btn">
        💾 Save Changes
      </button>

    </div>
  );
}

export default Settings;