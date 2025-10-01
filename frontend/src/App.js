import React from 'react';
import GameList from './components/GameList';
import AddGame from './components/AddGame';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div>
      <h1>JohnsonLu Game Platform</h1>
      <Login />
      <Register />
      <AddGame />
      <GameList />
    </div>
  );
}

export default App;