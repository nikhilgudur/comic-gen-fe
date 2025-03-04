// Chat.jsx
import React, { useState } from 'react';
import styles from './Chat.module.css';

const Chat = () => {
  const [title, setTitle] = useState('');
  const [numPanels, setNumPanels] = useState(5);
  const [comic, setComic] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateComic = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:8000/generate/comic', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          num_panels: numPanels,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setComic(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.comic__generator}>


      {error && <div className={styles.error}>Error: {error}</div>}

      {comic && (
        <div className={styles.comic__display}>
          <h2>{title}</h2>
          <div className={styles.panels__container}>
            {comic.panels.map((panel, index) => (
              <div key={index} className={styles.panel}>
                <img 
                  src={panel.image} 
                  alt={panel.title}
                  className={styles.panel__image}
                />
                <div className={styles.panel__info}>
                  <h3>{panel.title}</h3>
                  <p>{panel.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className={styles.controls}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter comic title"
          className={styles.title__input}
        />
        <input
          type="number"
          value={numPanels}
          onChange={(e) => setNumPanels(parseInt(e.target.value))}
          min="1"
          max="10"
          className={styles.panels__input}
        />
        <button 
          onClick={generateComic} 
          disabled={loading || !title}
          className={styles.generate__button}
        >
          {loading ? 'Generating...' : 'Generate Comic'}
        </button>
      </div>
    </div>
  );
};

export default Chat;