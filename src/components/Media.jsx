import '../styles/Media.css';

export default function Media() {
  return (
    <div className="media">
      <h2>Media</h2>
      <p>Check out our latest music and videos!</p>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/yPr_JDXlBbU"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}