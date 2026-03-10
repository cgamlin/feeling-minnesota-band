import '../styles/Media.css';
import Logo from './Logo';
import videos from '../data/videos.js';

export default function Media() {
  return (
    <div className="media">
      <Logo />
      <h2>Media</h2>
      <p>Check out our latest music and videos!</p>
      <div className="videos-container">
        {videos.map((video, index) => (
          <div key={index} className="video-container">
            <label>{video.title}</label>
            <iframe
              src={video.src}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}