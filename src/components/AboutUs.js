// Import Dependencies
import '../styles/AboutUs.css';
import Navbar from './Navbar';
import Footer from './Footer';
import third from '../images/about_images/about_img_1.png'
import second from '../images/about_images/about_img_2.png'
import student from '../images/about_images/about_img_3.png'
import Board from '../board'


function AboutUs() {
  return (
    <div className="aboutContainer">
      <header className="aboutNavbar">
        <Navbar />
      </header>

      <div className="mission-container">
        <div className="mission-statement">
            <h1>MISSION STATEMENT</h1>
            <p style={{textAlign: "left"}}>At Triton WebDev, our mission is to empower clubs and organizations by providing 
                comprehensive website development and maintenance services.  We create high-
                quality, professional websites that effectively communicate each organization’s 
                unique identity and purpose.</p>
        </div>
      </div>

      <div className="intro-container">
        <div className="for-student">
          <div className="intro-text">
            <h3>For Students</h3>
            <p>Join a team of skilled designers, developers, and administrators and collaborate 
            closely with clients to bring their visions to life. Contribute to meaningful projects 
            and get hands-on experience with cross-collaboration, the Software Development 
            Life Cycle (SDLC), and client work.</p>
          </div>

          <div className="img-container">
            <img src={student} alt="student" className="img"/>
          </div>

        </div>

        <div className="for-client">

          <div className="img-container">
            <img src={second} alt="client" className="img"/>
          </div>

          <div className="intro-text">
            <h3>For Clients</h3>
            <p>We tailor our services to meet your specific needs, ensuring user-friendly, visually 
            appealing, and search engine optimized websites. Our goal is to harness the power 
            of the web to support clubs and organizations, enabling them to thrive in the digital 
            era. Together, we can make a lasting impact by leveraging the web to amplify your  
            impact.</p>
          </div>

        </div>

        <div className="different">

          <div className="intro-text">
            <h3>What Makes Us Different</h3>
            <p>We go beyond initial development by offering ongoing website maintenance, 
            including timely updates, content management, and technical support. We 
            understand the dynamic nature of websites and are committed to keeping our 
            clients’ online presence up-to-date and secure</p>
          </div>
          
          <div className="img-container">
            <img src={third} alt="laptop" className="img"/>
          </div>

        </div>
      </div>

      <div className="team-section">
        {Board.map(
          member => {
            return(
              <div key={member.name}>
                <h3>{member.name}</h3>
                <h4>{member.position}</h4>
              </div>
              
            )
          }
        )}

      </div>

      <div className="cohorts">
        <h2>Summer 2023 Cohort</h2>
        <div className="summer">
            <div>
              <h3>CSES WebDev</h3>
              <p>Kevin Kim</p>
              <p>Angela Tsai</p>
              <p>Saleha Ahemdi</p>
              <p>Sebstian Mejia</p>
              <p>Swati Menon</p>
              <p>Rachel Paner</p>
            </div>

            <div>
              <h3>Tritones</h3>
              <p>Ryan Rickey</p>
              <p>Nick Campos</p>
              <p>William Zhao</p>
              <p>Shawn Malal</p>
              <p>Anjili Mathi</p>
              <p>Sophia Fang</p>
            </div>

            <div>
              <h3>Dollar Lunch Club</h3>
              <p>Snigdha Allada</p>
              <p>Julianna Hall</p>
              <p>Ketan Jain</p>
              <p>Alexa Anderson</p>
            </div>
            
        </div>

      </div>


      <Footer />

    </div>
  );
}

export default AboutUs;