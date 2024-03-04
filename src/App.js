import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  const [showSettings, setShowSettings] = useState(false);

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
        <button className="Button" onClick={handleNotificationClick}>
          Notification
        </button>
        <button className="btn" onClick={handleSettingsClick}>
          Settings
        </button>
        <CurrentLocation />

        {showSettings && (
          <div className="settings-popup">
            {/* Your settings content goes here */}
            <p> <button>Change Unit to F</button></p>
            <button onClick={handleCloseSettings}>Close</button>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default App;
