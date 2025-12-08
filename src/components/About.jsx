import '../styles/About.css';
import Logo from './Logo';

export default function About() {
  const bandMembers = [
    {
      name: 'Ashley',
      image: 'images/ashley.webp',
      bio: 'Vocals'
    },
    {
      name: 'Chris',
      image: 'images/chris.webp',
      bio: 'Electric Guitar, Vocals'
    },
    {
      name: 'Jeff',
      image: 'images/jeff.webp',
      bio: 'Vocals, Acoustic Guitar'
    },
    {
      name: 'Mitch',
      image: 'images/mitch.webp',
      bio: 'Vocals, Acoustic Guitar'
    }
  ];

  return (
    <div className="about">
      <Logo />
      <h1>About Us</h1>
      <p>Feeling Minnesota is an acoustic band made up of seasoned musicians who simply love playing live music. Blending country, rock, and pop favorites with a fresh acoustic twist, we perform the songs we love—delivering the kind of setlist that feels like your favorite playlist comes to life.</p>
      <p>With stripped-down arrangements, rich three-part harmonies, and a laid-back, authentic vibe, we bring new energy to familiar hits. The result is a nostalgic yet modern sound that connects with any crowd.</p>
      <p>We’re always expanding our song list across genres and are happy to take requests to make your event truly personal. Whether it’s a backyard party, a brewery night, or a special celebration, we’d love to be part of your next gathering.</p>
      <h2>Meet the Band</h2>
      <div className="band-members">
        {bandMembers.map((member, index) => (
          <div key={index} className="member">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}