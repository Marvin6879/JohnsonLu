import React, { useState } from 'react';

function AddGame() {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:5000/api/games', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, genre, description, image, addedBy: 'admin' }),
    }).then(() => {
      setTitle('');
      setGenre('');
      setDescription('');
      setImage('');
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Game</h2>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
      <input value={genre} onChange={e => setGenre(e.target.value)} placeholder="Genre" required />
      <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" required />
      <input value={image} onChange={e => setImage(e.target.value)} placeholder="Image URL" />
      <button type="submit">Add Game</button>
    </form>
  );
}

export default AddGame;