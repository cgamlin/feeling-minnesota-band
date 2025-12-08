import '../styles/Logo.css';
import bandLogo from '../assets/band-logo.png';

export default function Logo() {
  return (
    <div className="band-header">
      <img src={bandLogo} className="band-logo" alt="band logo" />
      <h1 className="band-name">Feeling Minnesota</h1>
    </div>
  )
}