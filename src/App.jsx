import './App.css'
import { useState, useEffect } from 'react';
import hackLogo from './Assets/hacktoberfest-logo.png';
import owaspLogo from './Assets/logo-owasp.png';
import 'animate.css';

function App() {
  const [binaryStream, setBinaryStream] = useState(generateRandomBinaryStream());

  // Function to generate a random binary stream
  function generateRandomBinaryStream() {
    return Array.from({ length: window.innerWidth }, () =>
      Math.random() <= 0.5 ? '0' : '1'
    ).join('');
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBinaryStream(generateRandomBinaryStream());
    }, 150);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
    <section className='hero'>
      <div className='binStream'>
        {binaryStream}
      </div>

      <div className='logos'>
        <img src={hackLogo} alt='Hacktoberfest logo' />
        <div className="multiply animate__animated animate__rotateIn"> ✖ </div>
        <img src={owaspLogo} alt='OWASP logo' />
      </div>
      <a href="/" className="button recruit">Register for<br/> Recruitments!</a>
    </section>
    <section className='about'>
      <div className='about-box'>
        <h3 className='about-heading'>About Hacktoberfest</h3>
        <p>
          Hacktoberfest'23 marks the 10th edition of Hacktoberfest, organized by DigitalOcean, a month-long celebration of open-source coding and software Team OWASP provides five open source projects to which you can display and contribute - Web-Dev Tasks, Tech Think Tank, Algorithm Visualiser, Tab Saver Extension and Backend-automation NPM. These projects are widely available for contribution by people from various tech stacks. Hack out four pristine pull/merge requests and win exciting goodies and swags!
        </p>
      </div>
    </section>
    </>
  );
}

export default App

