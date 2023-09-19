// Import Dependencies
import "../styles/Navbar.css";
import { Link } from 'react-router-dom';
import WebDevLogo from "../images/cses-webdev-transparent.png"

/*
 * !! Load this component on every page
 */
function Navbar() {
    return(
        <div className="navContainer">
            <Link to="/">
				<img src={WebDevLogo} alt="CSESWebDev Logo" id="logo" />
			</Link>

            <div className="navText">
                <Link to="/about" className="navLinks">
					About Us
				</Link>
                <Link to="/events" className="navLinks">
					Events
				</Link>
                <Link to="/media" className="navLinks">
					Media
				</Link>
            </div>
        </div>
    );
}

export default Navbar;