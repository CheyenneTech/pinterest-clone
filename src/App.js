

// App.js
import React, { useState } from 'react';
import './App.css';
import pinsData from './data'; // Assuming you have the 'data.js' file with the pins data.
import Masonry from 'react-masonry-css';
import InfiniteScroll from 'react-infinite-scroll-component';


function App() {
  const [pins, setPins] = useState(pinsData);

  function handleLike(id) {
    setPins((prevPins) =>
      prevPins.map((pin) =>
        pin.id === id ? { ...pin, isLiked: !pin.isLiked } : pin
      )
    );
  }

  function handleSave(id) {
    setPins((prevPins) =>
      prevPins.map((pin) =>
        pin.id === id ? { ...pin, isSaved: !pin.isSaved } : pin
      )
    );
  }

  return (
    <div className="container">
      <header>
        <h1>Pinterest Lookalike</h1>
      </header>
      <main>
        <div className="grid">
          {pins.map((pin) => (
            <div key={pin.id} className="grid-item">
              <img src={pin.image} alt={pin.title} />
              <p>{pin.title}</p>
              <div className="actions">
                <button
                  className={pin.isLiked ? 'liked' : ''}
                  onClick={() => handleLike(pin.id)}
                >
                  {pin.isLiked ? 'Liked' : 'Like'}
                </button>
                <button
                  className={pin.isSaved ? 'saved' : ''}
                  onClick={() => handleSave(pin.id)}
                >
                  {pin.isSaved ? 'Saved' : 'Save'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <p>Created by Cheyenne Edwards</p>
        <p>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
