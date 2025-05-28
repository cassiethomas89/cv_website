'use client';
import React, { MouseEventHandler } from "react";
import headerClick from "./HeaderClick";
import darkModeClick from "./DarkMode";

const SummaryButton = () => { 
  return (
    <button onClick={() => headerClick("Summary")}>Summary</button>
  );
}

const SkillsButton = () => { 
  return (
    <button onClick={() => headerClick("Skills")}>Skills</button>
  );
}

const ExperienceButton = () => { 
  return (
    <button onClick={() => headerClick("Experience")}>Experience</button>
  );
}

const ContactButton = () => {

  return (
    <button onClick={() => headerClick("Contact")}>Contact</button>
  );
}

const CVButton = () => {
  return (
    <button onClick={() => headerClick("CV")}>CV</button>
  );
}

const TopBanner = () => {
//     const shoot = () => {
//     alert("test");
//   }

    return <div>
        <div className="topBanner topBannerLight">
          <div className="siteTitle">
            <h1>Cassie Thomas</h1>
            <h2>Software Engineer</h2>
          </div>
          <div className="menuButtons">
            <div><SummaryButton /></div>
            <div><SkillsButton /></div>
            <div><ExperienceButton /></div>
            <div><CVButton /> </div>
            <div><ContactButton /></div>
          </div>
          <div id="darkModeDiv" className="darkModeSwitch darkModeOff">
            <label>Dark Mode</label><br/>
            <label className="switch">
              <input id="darkModeInput" type="checkbox" onClick={() => darkModeClick()} />
              <span className="slider"></span>
            </label>
          </div>
        </div>
        <hr/>
    </div>
};


export default TopBanner;