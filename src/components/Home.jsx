import '../styles/Home.css';
import bandImage from '../assets/feeling-minnesota.png';
import Shows from './Shows';

export default function Home() {

  return (
    <div className="home">
      <div className="band-image">
        <img src={bandImage} alt="Feeling Minnesota Band" />
      </div>
      <div className="shows-container">
        <Shows />
      </div>
    </div>
  );
}
