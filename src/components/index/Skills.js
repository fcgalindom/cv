import React from 'react';
import LinearWithValueLabel from './LinearBar';

function Skill({ name, value }) {
  return (
    <div className="progress">
      <span className="skill">{name} <i className="val">{value}%</i></span>
      <div className="progress-bar-wrap">
        <div className="progress-bar" role="progressbar" aria-valuenow={value} aria-valuemin="30" aria-valuemax="100"></div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="skills container">
      <div className="section-title">
        <h2>Skills</h2>
      </div>

      <div className="row skills-content">
        <div className="col-lg-6">
          <LinearWithValueLabel name ={"Laravel"}  valuet={100}/>
          <LinearWithValueLabel name ={"Css"}  valuet={100}/>
          <LinearWithValueLabel name ={"Javascript"}  valuet={100}/>
          <LinearWithValueLabel name ={"Php"}  valuet={100}/>
          <LinearWithValueLabel name ={"Express"}  valuet={80}/>
          
        </div>
        <div className="col-lg-6">
          <LinearWithValueLabel name ={"Python"}  valuet={100}/>
          <LinearWithValueLabel name ={"React"}  valuet={100}/>
          <LinearWithValueLabel name ={"Typescript"}  valuet={80}/>
          <LinearWithValueLabel name ={"Vue"}  valuet={80}/>
        </div>
      </div>
    </div>
  );
}

export default Skills;
