import bandLogo from '../assets/band-logo.jpg';
import bandPicture from '../assets/band-members.jpg';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className="home">
      <div className="band-header">
        <img src={bandLogo} className="band-logo" alt="band logo" />
        <h1 className="band-name">Feeling Minnesota</h1>
      </div>
      <img src={bandPicture} className="responsive-img" alt="band members" />
    </div>
  );
}
