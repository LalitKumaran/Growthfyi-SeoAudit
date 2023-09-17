import React from "react";
import "../styles/loader_styles.css";
export function Loader({ url }) {
  return (
    <div>
      <div className="loaderContainer">
        <div className="loader">
          <div id="scanner"></div>
          <div id="page">
            <div id="header">
              <div id="headerDotsContainer">
                <div className="headerDots"></div>
                <div className="headerDots"></div>
                <div className="headerDots"></div>
              </div>
              <div id="headerUrlContainer">
                <div id="headerUrl">{url}</div>
              </div>
            </div>
            <div id="loaderBody"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
