import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './App.css'; // Import your CSS file
import Picture from './assets/Blogpic.jpeg';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const appendToDisplay = (value) => {
    setDisplay(display + value);
  };

  const clearDisplay = () => {
    setDisplay('');
  };

  const calculate = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={display} disabled />
      <div className="calculator-buttons">
        <button onClick={() => appendToDisplay('1')}>1</button>
        <button onClick={() => appendToDisplay('2')}>2</button>
        <button onClick={() => appendToDisplay('3')}>3</button>
        <button onClick={() => appendToDisplay('+')}>+</button>
        <button onClick={() => appendToDisplay('4')}>4</button>
        <button onClick={() => appendToDisplay('5')}>5</button>
        <button onClick={() => appendToDisplay('6')}>6</button>
        <button onClick={() => appendToDisplay('-')}>-</button>
        <button onClick={() => appendToDisplay('7')}>7</button>
        <button onClick={() => appendToDisplay('8')}>8</button>
        <button onClick={() => appendToDisplay('9')}>9</button>
        <button onClick={() => appendToDisplay('*')}>*</button>
        <button onClick={() => clearDisplay()}>C</button>
        <button onClick={() => appendToDisplay('0')}>0</button>
        <button onClick={() => calculate()}>=</button>
        <button onClick={() => appendToDisplay('/')}>/</button>
      </div>
    </div>
  );
};

const generateRandomWord = () => {
  const words = [
    'Guardian', 'Light', 'Darkness', 'Ghost', 'Traveler', 'LastCity', 'Tower', 'Vanguard', 'Crucible',
    'Gunsmith', 'Raid', 'Strike', 'Nightfall', 'Exotic', 'Legendary', 'Rare', 'Common', 'Epic', 'Artifact',
    'Power', 'LightLevel', 'DarknessLevel', 'Hunter', 'Warlock', 'Titan', 'FusionRifle', 'AutoRifle',
    'HandCannon', 'PulseRifle', 'ScoutRifle', 'Sidearm', 'Shotgun', 'SniperRifle', 'SubmachineGun',
    'LinearFusionRifle', 'TraceRifle', 'RocketLauncher', 'GrenadeLauncher', 'Sword', 'Bow', 'MachineGun',
    'HeavyWeapon', 'KineticWeapon', 'EnergyWeapon', 'PrimaryWeapon', 'SecondaryWeapon', 'PowerWeapon',
    'KineticAmmo', 'EnergyAmmo', 'PowerAmmo', 'Super', 'Melee', 'Grenade', 'ClassAbility', 'Arc', 'Solar',
    'Void', 'Stasis', 'LightSubclass', 'DarknessSubclass', 'GoldenGun', 'BladeBarrage', 'NovaBomb',
    'Stormtrance', 'ArcStaff', 'Dawnblade', 'Voidwalker', 'Sunsinger', 'Sunbreaker', 'Nightstalker', 'Gunslinger',
    'Arcstrider', 'WarlockVoidwalker', 'HunterGunslinger', 'TitanStriker', 'Arcstrider', 'Voidwalker',
    'Stormcaller', 'Gunslinger', 'Striker', 'Sentinel', 'Shadowshot', 'HammerofSol', 'BladeDancer', 'Sunsinger',
    'Defender', 'Nightstalker', 'Stormcaller', 'Sunbreaker', 'Voidwalker', 'Dawnblade', 'Arcstrider', 'GoldenGun'
  ];
  return words[Math.floor(Math.random() * words.length)];
};

const App = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [buttonCount, setButtonCount] = useState(0);
  const [randomWord, setRandomWord] = useState('');

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  const incrementButtonCount = () => {
    setButtonCount(buttonCount + 1);
  };

  const decrementButtonCount = () => {
    setButtonCount(buttonCount - 1);
  };

  const multiplyButtonCount = () => {
    setButtonCount(buttonCount * 10);
  };

  const divideButtonCount = () => {
    setButtonCount(buttonCount / 2);
  };

  const generateNewRandomWord = () => {
    setRandomWord(generateRandomWord());
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <h1>Portfolio</h1>
        <nav className="app-nav">
          <ul>
            <li><button className="nav-button" onClick={() => handleSectionChange('home')}>Home</button></li>
            <li><button className="nav-button" onClick={() => handleSectionChange('about')}>About</button></li>
            <li><button className="nav-button" onClick={() => handleSectionChange('features')}>Features</button></li>
            <li><button className="nav-button" onClick={() => handleSectionChange('projects')}>Projects</button></li>
            <li><button className="nav-button" onClick={() => handleSectionChange('contact')}>Contact</button></li>
            {/* Add other navigation options */}
          </ul>
        </nav>
      </header>

      {/* Sections */}
      {currentSection === 'home' && (
        <section id="home" className="app-section">
          <div className="section-content">
            <h1>Welcome to My Portfolio</h1>
            <p>Explore my work and learn more about me.</p>
            <p>There are many cool features on my website showcasing my skills, and more to come</p>
            <p>Like for instance there is a button counter and random word generator below</p>
            <button className='btn-increment' onClick={incrementButtonCount}>Increase</button>
            <button className='btn-decrement' onClick={decrementButtonCount}>Decrease</button>
            <button className='btn-multiply' onClick={multiplyButtonCount}>Multiply by 10</button>
            <button className='btn-divide' onClick={divideButtonCount}>Divide by 2</button>
            <p style={{marginTop: '20px'}}>Button Count: {buttonCount}</p>
            <button className='btn-generate-word' onClick={generateNewRandomWord}>Generate Random Word</button>
            {randomWord && <p style={{marginTop: '10px'}}>Random Word: {randomWord}</p>}
            <p style={{marginTop: '10px'}}>Random Number: {Math.floor(Math.random() * 100)}</p>
          </div>
        </section>
      )}

      {currentSection === 'about' && (
        <section id="about" className="app-section">
          <div className="section-content">
            <h1>About Me</h1>
            <div className="about-card">
              <div className="about-info">
                <h1>Jay Miller</h1>
                <p>
                  I am a full stack developer with front-end and back-end experiences.
                  A few skills I have are:
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>SQL</li>
                    <li>Django</li>
                    <li>Djangorestframework</li>
                    <li>REST API</li>
                    <li>JSON</li>
                    <li>Bootstrap</li>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>Communication</li>
                    <li>Problem Solving</li>
                    <li>Python</li>
                  </ul>
                </p>
              </div>
            </div>
            <button className='about-button'>Hire Me!</button>
          </div>
        </section>
      )}

      {currentSection === 'features' && (
        <section id="features" className="app-section">
          <div className="section-content">
            <h1>Features</h1>
            <button className='features-button'>See More</button>
            <div className="feature-cards">
              <div className="feature-card">
                <div className="feature-info">
                  <h2 className='mini-calculator-title'>Calculator</h2>
                  <Calculator />
                </div>
              </div>
              <div className="feature-card">
                <div className="feature-info">
                  <i className='bx bxs-devices'></i>
                  <p>
                    Explore a diverse collection of my creative endeavors, including web design, JavaScript, and mini projects. Each project showcases my creativity, attention to detail, and passion for delivering visually stunning and engaging experiences.
                  </p>
                </div>
              </div>
              {/* Add other feature cards */}
            </div>
          </div>
        </section>
      )}

      {currentSection === 'projects' && (
        <section id="projects" className="app-section">
          <div className="section-content">
            <h1>Projects</h1>
            <button className='projects-button'>View All Projects</button>
            <div className="project-cards">
              <iframe title="Project 1" src="https://jaymiller2002.github.io/Tic-Tac-Toe/"></iframe>
              <iframe title="Project 2" src="https://jaymiller2002.github.io/weather-app-JS-Only/"></iframe>
              <iframe title="Project 3" src="https://doglist.vercel.app/"></iframe>
              <iframe title="Project 4" src="https://to-do-list-mauve-gamma-70.vercel.app/"></iframe>
              <iframe title="Project 5" src="https://jaymiller2002.github.io/random-resturant/"></iframe>
              <iframe title="Project 6" src="https://jaymiller2002.github.io/New-BlogPost-React-Only/"></iframe>
            </div>
            <div className="projects-links">
              <a href="https://jaymiller2002.github.io/Tic-Tac-Toe/">Tic-Tac-Toe</a>
              <a href="https://jaymiller2002.github.io/weather-app-JS-Only/">Weather App</a>
              <a href="https://doglist.vercel.app/">Image Gallery Slider</a>
              <a href="https://to-do-list-mauve-gamma-70.vercel.app/">To Do List</a>
              <a href="https://jaymiller2002.github.io/random-resturant/">Random Restaurant</a>
              <a href="https://jaymiller2002.github.io/New-BlogPost-React-Only/">My Blog</a>
            </div>
          </div>
        </section>
      )}

      {currentSection === 'contact' && (
        <section id="contact" className="app-section">
          <div className="section-content">
            <h2>Contact Me Below</h2>
            <div className="contact-card">
              <Card style={{border: 'none'}}>
                <Card.Body>
                  <Card.Title>Phone Number:</Card.Title>
                  <Card.Text>
                    <button onClick={() => window.location.href = "tel:8594758431"}>(859) 475-8431</button>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{border: 'none'}}>
                <Card.Body>
                  <Card.Title>Email:</Card.Title>
                  <Card.Text>
                    <button onClick={() => window.location.href = "mailto:Jay.miller02@icloud.com"}>Jay.miller02@icloud.com</button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="app-footer">
        <div className="social-links">
          <a href="https://github.com/Jaymiller2002"><i className='fa-brands fa-github'></i></a>
          <a href="https://discord.com/"><i className='fa-brands fa-discord'></i></a>
          <a href="https://www.linkedin.com/feed/"><i className='fa-brands fa-linkedin-in'></i></a>
          {/* Add other social links */}
        </div>
        <p>&copy; 2024 My Portfolio</p>
      </footer>
    </div>
  );
}

export default App;



