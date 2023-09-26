// Import Dependencies
import "../styles/Media.css"
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from 'react-router-dom'
import { FaDiscord, FaInstagram, FaLinkedinIn} from 'react-icons/fa';

export default function Media () {
    return(
        <div className="media-page">
            <Navbar />
            <h2 style={{fontSize: "40px"}}>Calendar</h2>
            <div className="calendar"></div>
            <div className="connect-with-us">
                <h3>Connect with us</h3>
                <div className="icon-container">
                    <Link to="https://www.linkedin.com/company/cses-webdev/mycompany/"><FaLinkedinIn className="media-icon"/></Link>
                    <Link to="https://www.instagram.com/cses_ucsd/"><FaInstagram className="media-icon"/></Link>
                    <Link to="https://discord.gg/vd9aFu4V"><FaDiscord className="media-icon"/></Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}