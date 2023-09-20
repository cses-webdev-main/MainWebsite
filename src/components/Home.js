// Import Dependencies
import '../styles/Home.css';
import Navbar from './Navbar';
import Projects from '../projects-data'

function Home() {
  return (
    <div className="HomePage">
      <header className="Home-header">
        <Navbar />
        <div className="banner">
          <div id="banner-text">
            <h1 style={{fontWeight:"900", marginBottom: 0, fontStretch:"200%"}}>CSES WebDev</h1>
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
            <a href="#" id="apply-button">Apply</a>
          </div>
        </div>
        
      </header>
    </div>
  );
}

export default Home;