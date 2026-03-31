import '../styles/Shows.css';
import shows from '../data/shows.js';

export default function Shows() {
  const handleLocationClick = (show) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(show.location)}`, '_blank');
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set to the start of the day for accurate comparison

  const upcomingShows = shows
    .filter(show => new Date(show.date) >= today) // Filter out past shows
    .sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort upcoming shows by date

  return (
    <div>
      <h2>Upcoming Shows</h2>
      <p>Check back as we update our show dates!</p>
      <ul className="shows-list">
        {upcomingShows.map((show, index) => (
          <li key={index} className="show-item">
            <p><strong>Date:</strong> {show.date}</p>
            {show.time && (
              <p><strong>Time:</strong> {show.time}</p>
            )}
            <p><strong>Event:</strong> {show.event}</p>
            {show.location && (
              <div>
                <p><strong>Location:</strong> {show.location}</p>
                <button onClick={() => handleLocationClick(show)}>View on Google Maps</button>
              </div>
            )}
            {show.fbLink && (
              <p><a className='show-tickets' href={show.fbLink} target="_blank" rel="noopener noreferrer">View Facebook Event</a></p>
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