import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

import logoImg from './assets/logo.jpg';
import imgMkj from './assets/banner.png';
import PolicyPage from './PolicyPage';

function Header() {
  const location = useLocation();
  const isPolicyPage = location.pathname === '/policy';

  return (
      <header className="header">
          <div className="container header-container">
            <div className="header-left">
              <div className="logo-wrapper">
                <img src={logoImg} alt="Nguyen Van Tuan" className="logo-img" />
                <span className="studio-name">Nguyen Van Tuan</span>
              </div>
            </div>

            {!isPolicyPage && (
              <nav className="nav">
                <Link to="/" className="nav-link">HOME</Link>
                <Link to="/policy" className="nav-link">POLICY</Link>
                <a href="#contact" className="nav-link">CONTACT</a>
              </nav>
            )}
          </div>
        </header>
  );
}

function HomePage() {

  return (
    <>
      <section id="about" className="section about">
        <div className="container about-row">
          <div className="about-text-container">
            <h2 className="highlight-title">Nguyen Van Tuan – Welcome Aboard</h2>
            <p className="about-text">Nguyen Van Tuan is a forward-thinking mobile app studio committed to crafting innovative, dependable, and easy-to-use applications. Our mission is to blend creativity with functionality, delivering solutions that span across casual gaming, productivity, lifestyle, and education. Each app we develop is carefully designed with user experience in mind — offering intuitive navigation, thoughtful details, and practical value — to make everyday life simpler, smarter, and more enjoyable for users around the globe.
            </p>
          </div>
          <div className="about-img-container">
            <img src={imgMkj} alt="About MKJ Studio" className="about-img" />
          </div>
        </div>
      </section>



      <section id="contact" className="section contact">
        <div className="container text-center">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, request support, please contact us at:<br />
            <a href="mailto: zuniganigelsnj173@gmail.com"> zuniganigelsnj173@gmail.com</a><br />
            <span style={{ display: 'inline-block', marginTop: '10px' }}>
              🏠 ADROP.AI LIMITED
                Flat 1
                24 Montem Road
                NEW MALDEN - KT3 3QW
                United Kingdom (GB)
            </span>
          </p>
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/policy" element={<PolicyPage />} />
        </Routes>
        <footer className="footer">
          <div className="container text-center">
            <p>&copy; {new Date().getFullYear()} Nguyen Van Tuan. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
