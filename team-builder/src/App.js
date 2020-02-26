import React, {useState} from 'react';

import TeamList from "./TeamList"
import Form from "./Form";
import './App.css';

function App() {

  const [team, setTeam] = useState([
    {
      id: 1,
      name: "Callahan",
      email: "123@FakeSt.com",
      job: "Smart Guy"
    }
  ]);
  const addTeamMember = member => {
    const newMem ={
      id: Date.now(),
      name: member.name,
      email: member.email,
      job: member.job
    };
    setTeam([...team, newMem]);
  };


  return (
    <div className="App">
      <h1>The A Team</h1>
      <Form addTeamMember={addTeamMember}/>
      <TeamList team={team}/>


    </div>
  );
}

export default App;
