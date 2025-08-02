import { useState } from 'react';
import '../styles/Shows.css';

export default function Shows() {
  const shows = [
    { date: 'July 26, 2025', event: 'Private BBQ Event', location: '' },
    { date: 'August 5, 2025', event: 'Private Event for Nation Night Out', location: 'Lakeville, MN' },
  ];

  const [selectedShow, setSelectedShow] = useState(null);

  const handleShowClick = (show) => {
    console.log('Selected Show:', show);
    setSelectedShow(show);
  };

  const closeModal = () => {
    setSelectedShow(null);
  };

  return (
    <div className="shows">
      <h2>Upcoming Shows</h2>
      <ul className="shows-list">
        {shows.map((show, index) => (
          <li key={index} className="show-item" onClick={() => handleShowClick(show)}>
            <p><strong>Date:</strong> {show.date}</p>
            <p><strong>Event:</strong> {show.event}</p>
            <p><strong>Location:</strong> {show.location}</p>
          </li>
        ))}
      </ul>

      {selectedShow && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-icon">📅</div>
            <div className="modal-content">
              <h3>{selectedShow.event}</h3>
              <p><strong>Date:</strong> {selectedShow.date}</p>
              {selectedShow.location && (
                <p><strong>Location:</strong> {selectedShow.location}</p>
              )}
              {selectedShow.location && (
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedShow.location)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              )}
            </div>
            <button className="modal-close" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}