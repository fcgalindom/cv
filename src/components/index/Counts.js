import React from 'react';

function CountBox({ iconClass, start, end, duration, text }) {
  return (
    <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
      <div className="count-box">
        <i className={iconClass}></i>
        <span data-purecounter-start={start} data-purecounter-end={end} data-purecounter-duration={duration} className="purecounter"></span>
        <p>{text}</p>
      </div>
    </div>
  );
}


function Counts() {
  return (
    <div className="counts container">
      <div className="row">
        <CountBox iconClass="bi bi-braces" start={0} end={232} duration={1} text="Backend Developer" />
        <CountBox iconClass="bi bi-code-slash" start={0} end={521} duration={1} text="Frontend Developer" />
        <CountBox iconClass="bi bi-database" start={0} end={1463} duration={1} text="DBA" />
        <CountBox iconClass="bi bi-pc-display" start={0} end={24} duration={1} text="Machine Learning" />
      </div>
    </div>
  );
}

export default Counts;