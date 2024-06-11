import React from "react";
import "../css/experience.css";

const Experience = () => {
  return (
    <section className="contenedor">
      <h1>
        <span className="arrowIconTitle"></span> <span></span>
        Experience
          <ul class="timeline">
            <li>
              <div class="direction-r">
                <div class="flag-wrapper">
                  <span class="flag">Freelancer</span>
                  <span class="time-wrapper">
                    <span class="time">2013 - present</span>
                  </span>
                </div>
                <div class="desc">
                  My current employment. Way better than the position before!
                </div>
              </div>
            </li>
          </ul>
      </h1>
    </section>
  );
};

export default Experience;
