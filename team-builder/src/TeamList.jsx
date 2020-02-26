import React, {useState} from 'react';
import './App.css';

const TeamList = props => {
  return (
    <div className="App">
      {props.team.map(t => (
        <div key={t.id}>
            <br/>
            <h2>{t.name}</h2>
            <h3>{t.job}</h3>
            <h3>{t.email}</h3>
            <br/>
        </div>
      ))}

    </div>
  );
}

export default TeamList;