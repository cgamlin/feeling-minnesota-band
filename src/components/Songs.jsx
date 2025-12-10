import '../styles/Songs.css';
import Logo from './Logo';
import songs from '../data/songs.js';

export default function Songs() {
  return (
    <div className="songs">
      <Logo />
      <h2>Song List</h2>
      <div className="songs-content">
        {songs.map((song, index) => (
          <div key={index} className="song-item">
            <h4>{song}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}