import React from 'react';

function Interest({ iconClass, color, title }) {
  return (
    <div className="col-lg-3 col-md-4 mt-4">
      <div className="icon-box">
        <i className={iconClass} style={{ color: color }}></i>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

function Interests() {
  return (
    <div className="interests container">
      <div className="section-title">
        <h2>Interests</h2>
      </div>

      <div className="row">
        <Interest iconClass="ri-store-line" color="#ffbb2c" title="Lorem Ipsum" />
        <Interest iconClass="ri-bar-chart-box-line" color="#5578ff" title="Dolor Sitema" />
        <Interest iconClass="ri-calendar-todo-line" color="#e80368" title="Sed perspiciatis" />
        <Interest iconClass="ri-paint-brush-line" color="#e361ff" title="Magni Dolores" />
        <Interest iconClass="ri-database-2-line" color="#47aeff" title="Nemo Enim" />
        <Interest iconClass="ri-gradienter-line" color="#ffa76e" title="Eiusmod Tempor" />
        <Interest iconClass="ri-file-list-3-line" color="#11dbcf" title="Midela Teren" />
        <Interest iconClass="ri-price-tag-2-line" color="#4233ff" title="Pira Neve" />
        <Interest iconClass="ri-anchor-line" color="#b2904f" title="Dirada Pack" />
        <Interest iconClass="ri-disc-line" color="#b20969" title="Moton Ideal" />
        <Interest iconClass="ri-base-station-line" color="#ff5828" title="Verdo Park" />
        <Interest iconClass="ri-fingerprint-line" color="#29cc61" title="Flavor Nivelanda" />
      </div>
    </div>
  );
}

export default Interests;
