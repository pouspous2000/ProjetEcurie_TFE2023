import { useState } from 'react';

function CreerEvenement({ onCreate }){
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEvent = {
      title,
      description,
      start,
      end
    };

    onCreate(newEvent);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Titre :</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description :</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="start">Début :</label>
        <input
          type="datetime-local"
          id="start"
          value={start.toISOString().slice(0, -8)}
          onChange={(e) => setStart(new Date(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="end">Fin :</label>
        <input
          type="datetime-local"
          id="end"
          value={end.toISOString().slice(0, -8)}
          onChange={(e) => setEnd(new Date(e.target.value))}
        />
      </div>
      <button type="submit">Créer</button>
    </form>
  );
};
export default CreerEvenement;