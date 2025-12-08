import '../styles/Shows.css';

export default function Shows() {
  const shows = [
    { date: 'November 15, 2025', event: 'Farmington Dance Parents Night Out', location: 'Celts Pub, Farmington, MN' },
    { date: 'August 5, 2025', event: 'Private Event for National Night Out', location: 'Lakeville, MN' },
    { date: 'July 26, 2025', event: 'Private BBQ Event', location: '' }
  ];

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
            <p><strong>Event:</strong> {show.event}</p>
            {show.location && (
              <div>
                <p><strong>Location:</strong> {show.location}</p>
                <button onClick={() => handleShowClick(show)}>View on Google Maps</button>
              </div>
              )}
          </li>
        ))}
      </ul>
    </div>
  );
}