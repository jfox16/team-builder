
import React, { useState } from 'react';
import './App.css';

import Form from './components/Form';
import MemberList from './components/MemberList';


const initialMembers = [
  {
    "name": "Jeff Winger",
    "email": "jeffwinger@aol.com",
    "role": "Team Lead"
  },
  {
    "name": "Britta Perry",
    "email": "bperry@gcc.edu",
    "role": "Front End Developer"
  },
]

function App() {

  const [ members, setMembers ] = useState(initialMembers);

  const addMember = (member) => {
    setMembers([ ...members, member ]);
  }

  return (
    <div className="App">

      <header className="App-header">
        <h1>Jonathan's Team Builder</h1>
      </header>
      <Form addMember={addMember} />
      <MemberList members={members} />
    </div>
  );
}

export default App;
