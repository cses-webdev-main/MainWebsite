// Import Dependencies
import '../styles/Events.css';
import Navbar from './Navbar';
import Footer from './Footer';

function Events() {
  return (
    <div className="eventsContainer">
      <header className="eventsNavbar">
        <Navbar />
      </header>
      
      <div className="eventsTitle">
        <h1>Upcoming Events</h1>
      </div>
    
      <footer className="homeFooter">
        <Footer />
      </footer>

    </div>
  );
}

export default Events;