import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [f,setF] = useState((36 * 9/5) + 32 )
  const handleNotificationClick = () => {
    if ("Notification" in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(
            "hey!! You will get notified your Weather conditions"
          );
        }
      });
    }
  };

  const handleSettingsClick = () => {
    setShowSettings(true);
  };

  const handleCloseSettings = () => {
    setShowSettings(false);
  };

  return (
    <React.Fragment>
      <div className="container">
        <button className="Button" style={{cursor:'pointer'}} onClick={handleNotificationClick}>
          Notification
        </button>
        <div className="dropdown">
        <button className="btn" >
          Settings
        </button>
          <div class="dropdown-content">
              <p onClick={handleSettingsClick}>View In Fahrenheit</p>
          </div>
        </div>
        <CurrentLocation />

        {showSettings && (
          <div className="settings-popup">
            {/* Your settings content goes here */}
            <p> <button> Unit {f}% F</button></p>
            <button onClick={handleCloseSettings}>Close</button>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default App;
