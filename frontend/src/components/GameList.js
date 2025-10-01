import React, { useEffect, useState } from 'react';

function GameList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/games')
      .then(res => res.json())
      .then(data => setGames(data));
  }, []);

  return (
    <div>
      <h2>Games</h2>
      <ul>
        {games.map(game => (
          <li key={game._id}>
            <h3>{game.title}</h3>
            <p>{game.genre}</p>
            <p>{game.description}</p>
            {game.image && <img src={game.image} alt={game.title} width={100} />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameList;