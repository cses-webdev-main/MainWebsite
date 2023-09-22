// Import Dependencies
import '../styles/AboutUs.css';
import Navbar from './Navbar';
import Footer from './Footer';
import third from '../images/about_images/about_img_1.png'
import second from '../images/about_images/about_img_2.png'
import student from '../images/about_images/about_img_3.png'



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


      <Footer />

    </div>
  );
}

export default AboutUs;