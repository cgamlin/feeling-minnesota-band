import bandPicture from '../assets/band-members.jpg';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className="home">
      <img src={bandPicture} className="responsive-img" alt="band members" />
    </div>
  );
}
