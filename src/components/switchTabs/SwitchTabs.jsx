import React, { useState } from "react";

import "./style.scss";

const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0); // value of 100px is stored here

  const activeTab = (tab, index) => {
    // 100 is used because width of tabItem, movingBg is 100 in scss
    setLeft(index * 100); // 0*100=0; 1*100=100
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab, index);
  };

  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab, index) => (
          <span
            key={index}
            className={`tabItem ${selectedTab === index ? "active" : ""}`}
            onClick={() => activeTab(tab, index)}
          >
            {tab}
          </span>
        ))}
        <span className="movingBg" style={{ left: left }} />
      </div>
    </div>
  );
};

export default SwitchTabs;
