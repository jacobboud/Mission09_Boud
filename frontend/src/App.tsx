import './App.css';

//import json file
import bballTeams from './CollegeBasketballTeams.json';

//Welcome Message
function Welcome() {
  return (
    <h1>
      Get some info about College Basketball teams to help you prepare for March
      Madness!
    </h1>
  );
}

//Team Structure
function Team({
  school,
  name,
  city,
  state,
}: {
  school: string;
  name: string;
  city: string;
  state: string;
}) {
  return (
    <>
      <h2>
        {school} {name}
      </h2>
      <h3>
        Location: {city}, {state}
      </h3>
    </>
  );
}

//Print out all teams (must use .teams to get into json structure)
function TeamList() {
  return (
    <>
      {bballTeams.teams.map((singleTeam) => (
        <Team {...singleTeam} />
      ))}
    </>
  );
}

function App() {
  return (
    <>
      <Welcome />
      <TeamList />
    </>
  );
}

export default App;
