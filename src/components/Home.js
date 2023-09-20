// Import Dependencies
import '../styles/Home.css';
import Navbar from './Navbar';
import Footer from './Footer';

function Home() {
  return (
    <div className="homeContainer">
      <header className="homeNavbar">
        <Navbar />
      </header>
      <div className="homeContent">
        test
      </div>
      <footer className="homeFooter">
        <Footer />
      </footer>
    </div>
  );
}

export default Home;