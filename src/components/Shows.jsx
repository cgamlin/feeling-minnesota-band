import '../styles/Shows.css';
import shows from '../data/shows.js';

export default function Shows() {
  const handleShowClick = (show) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(show.location)}`, '_blank');
  };

  return (
    <div>
      <h2>Upcoming Shows</h2>
      <p>Check back soon for our 2026 show dates!</p>
      <ul className="shows-list">
        {shows.map((show, index) => (
          <li key={index} className="show-item">
            <p><strong>Date:</strong> {show.date}</p>
            {show.time && (
              <p><strong>Time:</strong> {show.time}</p>
            )}
            <p><strong>Event:</strong> {show.event}</p>
            {show.location && (
              <div>
                <p><strong>Location:</strong> {show.location}</p>
                <button onClick={() => handleShowClick(show)}>View on Google Maps</button>
              </div>
            )}
            {show.ticketsLink && (
              <p><a className='show-tickets' href={show.ticketsLink} target="_blank" rel="noopener noreferrer">Buy Tickets</a></p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}