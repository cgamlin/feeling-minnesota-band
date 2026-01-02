import '../styles/Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {currentYear} Feeling Minnesota. All rights reserved.</p>
      {/*<div>
        <a href="https://www.facebook.com/profile.php?id=61576281586529">Facebook</a>
        <a href="https://www.youtube.com/@feelingminnesota_band_mn">YouTube</a>
        <a href="#">Instagram</a>
        <a href="#">Twitter</a>
      </div>*/}
  </footer>
  )
}