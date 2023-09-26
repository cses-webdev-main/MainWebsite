// Import Dependencies
import "../styles/Footer.css";
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FaDiscord, FaInstagram, FaLinkedinIn} from 'react-icons/fa';

/*
 * !! Load this component on every page
 */
function Footer() {
    return(
        <div className="footerContainer">
			    <p id="footerWebdev">
				    CSES WebDev
			    </p>

          <div className="footerText">
            <Link to="https://www.linkedin.com/company/cses-webdev/mycompany/" className="footerLinks">
					    <FaLinkedinIn className="icon" />
				    </Link>
            <Link to="https://www.instagram.com/cses_ucsd/" className="footerLinks">
					    <FaInstagram className="icon" />
				    </Link>
            <Link to="https://discord.gg/vd9aFu4V" className="footerLinks">
					    <FaDiscord className="icon" />
				    </Link>
          </div>
        </div>
    );
}

export default Footer;