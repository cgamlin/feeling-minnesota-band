import '../styles/Media.css';
import Logo from './Logo';

export default function Media() {
  return (
    <div className="media">
      <Logo />
      <h2>Media</h2>
      <p>Check out our latest music and videos!</p>
      <div className="videos-container">
        <div className="video-container">
          <label>Weezer - Say It Ain't So</label>
          <iframe
            src="https://www.youtube.com/embed/yPr_JDXlBbU"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-container">
          <label>The Eagles - Take It Easy</label>
          <iframe
            src="https://www.youtube.com/embed/1dHJI3_4rJg"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-container">
          <label>4 Non Blondes - What's Up</label>
          <iframe
            src="https://www.youtube.com/embed/TudTlb51swc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}