import React, { useState, useEffect} from "react";

function App() {

  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/members`)
    .then(res => res.json())
    .then(data => setMembers(data.members))
    .catch(err => console.error("API error: ", err));
  }, []);

  return (
    <div>
      <h1>Team Members</h1>
      <ul>
        {members.map((m, i) => <li key={i}>{m}</li>)}
      </ul>
    </div>
  )
}

export default App;