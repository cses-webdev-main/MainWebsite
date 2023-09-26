// Import Dependencies
import '../styles/AboutUs.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn} from 'react-icons/fa';

import Navbar from './Navbar';
import Footer from './Footer';

import third from '../images/about_images/about_img_1.png';
import second from '../images/about_images/about_img_2.png';
import student from '../images/about_images/about_img_3.png';

import Board from '../board-data';
import Cohorts from '../cohort-data';

function AboutUs() {
  const wideLayout = 
  <div className="intro-group">
    <div className="img-container-about">
      <img src={second} alt="client" className="img-about"/>
    </div>
    <div className="intro-text">
      <h3 className="intro-title">For Clients</h3>
      <p className="intro-content">We tailor our services to meet your specific needs, ensuring user-friendly, visually 
      appealing, and search engine optimized websites. Our goal is to harness the power 
      of the web to support clubs and organizations, enabling them to thrive in the digital 
      era. Together, we can make a lasting impact by leveraging the web to amplify your  
      impact.</p>
    </div>
  </div>;
  const smallLayout =
  <div className="intro-group">
    <div className="intro-text">
      <h3 className="intro-title">For Clients</h3>
      <p className="intro-content">We tailor our services to meet your specific needs, ensuring user-friendly, visually 
      appealing, and search engine optimized websites. Our goal is to harness the power 
      of the web to support clubs and organizations, enabling them to thrive in the digital 
      era. Together, we can make a lasting impact by leveraging the web to amplify your  
      impact.</p>
    </div>
    <div className="img-container-about">
      <img src={second} alt="client" className="img-about"/>
    </div>
  </div>;
  // Initialize "For Clients" based on initial viewport width
  const [forClients, setForClients] = useState(
    window.matchMedia("(max-width: 850px)").matches ?
    smallLayout :
    wideLayout
  );

  // Dynamically change "For Clients" layout based on viewport width
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 850px)");
    mql.addEventListener("change", resize);
    function resize(e) {
      if (e.matches) {
        setForClients(smallLayout);
      } else {
        setForClients(wideLayout);
      }
    }
    return () => {
      mql.removeEventListener("change", resize);
    }
  });

  return (
    <div className="aboutContainer">
      <header className="aboutNavbar">
        <Navbar />
      </header>

      <div className="mission-container">
        <div className="mission-statement">
            <h1>MISSION STATEMENT</h1>
            <p className="mission-content">At Triton WebDev, our mission is to empower clubs and organizations by providing 
                comprehensive website development and maintenance services.  We create high-
                quality, professional websites that effectively communicate each organization's 
                unique identity and purpose.</p>
        </div>
      </div>

      <div className="intro-container">
        <div className="intro-group">
          <div className="intro-text">
            <h3 className="intro-title">For Students</h3>
            <p className="intro-content">Join a team of skilled designers, developers, and administrators and collaborate 
            closely with clients to bring their visions to life. Contribute to meaningful projects 
            and get hands-on experience with cross-collaboration, the Software Development 
            Life Cycle (SDLC), and client work.</p>
          </div>
          <div className="img-container-about">
            <img src={student} alt="student" className="img-about"/>
          </div>
        </div>

        { forClients }

        <div className="intro-group">
          <div className="intro-text">
            <h3 className="intro-title">What Makes Us Different</h3>
            <p className="intro-content">We go beyond initial development by offering ongoing website maintenance, 
            including timely updates, content management, and technical support. We 
            understand the dynamic nature of websites and are committed to keeping our 
            clients' online presence up-to-date and secure.</p>
          </div>
        
          <div className="img-container-about">
            <img src={third} alt="laptop" className="img-about"/>
          </div>
        </div>
      </div>

      <div className="team-container">
        <div className="team-titles">
          <p style={{marginBottom: 0, color: "#234F8F", fontWeight: 700}}>Meet the Team</p>
          <p style={{fontSize: "30px", marginBottom: "50px"}}>2023-2024 Board</p>
        </div>
        <div className="team-members">
          {Board.map(
            member => {
              return(
                <div className="team-member">
                  <img src={member.photo} className="team-photo" alt={member.name} />
                  <p className="team-name">{member.name}</p>
                  <p className="team-position">{member.position}</p>
                  <Link to={member.linkedin} className="team-links">
                    <FaLinkedinIn className="team-icon" />
                  </Link>
                </div>
              );
            }
          )}
        </div>
      </div>

      <div className="cohort-container">
        {Cohorts.map(
          season => {
            return(
              <div className="cohort-season">
                <h2>{season.season} Cohort</h2>
                <div className="cohort-group">
                  {season.teams.map(
                    team => {
                      return(
                        <div className="cohort-text">
                          <h3 className="cohort-team">{team.projectName}</h3>
                          {team.members.map(
                            member => {
                              return(
                                <p>{member}</p>
                              );
                            }
                          )}
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            );
          }
        )}
      </div>

      <Footer />

    </div>
  );
}

export default AboutUs;