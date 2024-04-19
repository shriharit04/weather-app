import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <header className="header">
        <h1>About Weather App</h1>
      </header>

      <main className="main-content">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed ac urna a tellus consequat faucibus in vitae nisi. 
            Nullam finibus pulvinar purus, sed varius dolor tempor eget.
          </p>
        </section>

        <section className="about-section">
          <h2>Features</h2>
          <ul>
            <li>Current Weather Display</li>
            <li>5-Day Forecast</li>
            <li>Hourly Forecast</li>
            <li>Weather Alerts</li>
            <li>Location-based Weather</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Contact Us</h2>
          <p>Email: info@weatherapp.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Weather App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
