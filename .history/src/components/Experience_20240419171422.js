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
                  <span class="flag">Oryzativa</span>
                  <span class="time-wrapper">
                    <span class="time">2022 - Actual</span>
                  </span>
                </div>
                <p class="desc">
                  My current employment. Way better than the position before!
                </p>
              </div>
            </li>
          </ul>
      </h1>
    </section>
  );
};

export default Experience;
