// Import Dependencies
import '../styles/Events.css';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

function Events() {
  return (
    <div className="eventsContainer">
        <Navbar />
        <div className="events-body">
            <p className="events-title">Upcoming Events</p>
        </div>
        <Footer />
    </div>
  );
}

export default Events;