// Import Dependencies
import "../styles/Footer.css";
import { Link } from 'react-router-dom';

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
					LI
				</Link>
                <Link to="https://www.instagram.com/cses_ucsd/" className="footerLinks">
					IG
				</Link>
                <Link to="https://discord.gg/vd9aFu4V" className="footerLinks">
					DIS
				</Link>
            </div>
        </div>
    );
}

export default Footer;