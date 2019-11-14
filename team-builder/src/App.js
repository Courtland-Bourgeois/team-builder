import React, { useState } from 'react';
import Form from './components/Form'
import DefaultForm from "./components/DefaultForm";
import './App.css';

function App() {

  const [teamList, setTeamList] = useState([
    {
      id: 1,
      name: 'Lacee Jeffery',
      email: 'ljeffery0@state.tx.us',
      role: 'Chemical Engineer'
    }
  ])

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    }
    setTeamList([...teamList, newMember])
  }

  return (
    <div className="App">
      <h1>Team List</h1>
      <Form addNewMember={addNewMember} />
      <DefaultForm teamList={teamList} />
    </div>
  );
}

export default App;
