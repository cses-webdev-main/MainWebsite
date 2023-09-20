// Import Dependencies
import '../styles/Home.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Projects from '../projects-data';

function Home() {
  return (
    <div className="HomePage">
      <header className="Home-header">
        <Navbar />
        <div className="banner">
          <div id="banner-text">
            <h1 style={{fontWeight:"900", marginBottom: 0}}>CSES WebDev</h1>
            <h2 style={{marginTop: "3vh"}}>Bringing web design to UCSD and beyond</h2>
          </div>
        </div>

        <div className="icon-section">
          <div>
            <img src="../../public/home_images/design.png" alt="design-icon" />
            <h2 className="icon-text">Design</h2>
          </div>

          <div>
            <img src="../home_images/develop.png" alt="develop-icon" />
            <h2 className="icon-text">Develop</h2>
          </div>

          <div>
            <img src="../../public/home_images/sustain.png" alt="sustain-icon" />
            <h2 className="icon-text">Sustain</h2>
          </div>
        </div>

        <div className="project-section">
          <h1 className="title">Our Work</h1>
                    
          <div className="project-list">
          {Projects.map( p => {
            return(
            <div key={p.projectName}>
              <h2>{p.projectName}</h2>
              <img src={p.imageURL} alt="p-image" />
              <p className="project-text">Developers: {p.developer.join(", ")}</p>
              <p className="project-text">Designers: {p.designer.join(", ")}</p>
            </div>)
          })}
          </div>

          <div className="title" style={{marginBottom: "3em"}}>
            <h2>Interested in joining our Fall Cohort? Apply now!</h2>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd578y6E_BOvy9HRRJiW0lxNF4wl_4QW5DaqpTfrQ9Uo3rl7w/viewform" target="__blank" id="apply-button">Apply</a>
          </div>
        </div>
        
      </header>
      <Footer />
    </div>
  );
}

export default Home;
