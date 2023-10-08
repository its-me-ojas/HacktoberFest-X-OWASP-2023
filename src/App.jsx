import './App.css'
import { useState, useEffect, useRef } from 'react';
import hackLogo from './Assets/hacktoberfest-logo.png';
import owaspLogo from './Assets/logo-owasp.png';
import MyButton from './Components/button.jsx';
import 'animate.css';
import { AiFillDownCircle } from 'react-icons/ai';

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

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

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
      <div className='recruit'>
      <a href="/" class="discoButton"><span>
          Register for<br/>Recruitments!
      </span></a>
      </div>
      <div className='scroll' onClick={handleClick}>
        <AiFillDownCircle />
      </div>
    </section>
    <section className='about' ref={ref}>
      <div className='about-box'>
        <h3 className='about-heading'>About Hacktoberfest</h3>
        <MyButton>
        <p className='about-content'>
          Hacktoberfest'23 marks the 10th edition of Hacktoberfest, organized by DigitalOcean, a month-long celebration of open-source coding and software Team OWASP provides five open source projects to which you can display and contribute - Web-Dev Tasks, Tech Think Tank, Algorithm Visualiser, Tab Saver Extension and Backend-automation NPM. These projects are widely available for contribution by people from various tech stacks. Hack out four pristine pull/merge requests and win exciting goodies and swags!
        </p>
        </MyButton>

      </div>
      <a href="/pen/" class="discoButton"><span>Register for HacktoberFest</span></a>

    </section>
    </>
  );
}

export default App

