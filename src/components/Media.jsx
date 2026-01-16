import '../styles/Media.css';
import Logo from './Logo';

export default function Media() {
  const videos = [
    { title: "Stealers Wheel - Stuck in the Middle with You", src: "https://www.youtube.com/embed/ubdYKfMnHHQ" },
    { title: "Weezer - Say It Ain't So", src: "https://www.youtube.com/embed/yPr_JDXlBbU" },
    { title: "The Eagles - Take It Easy", src: "https://www.youtube.com/embed/1dHJI3_4rJg" },
    { title: "4 Non Blondes - What's Up", src: "https://www.youtube.com/embed/TudTlb51swc" },
  ];

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