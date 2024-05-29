import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './App.css'; // Import your CSS file
import { Card } from 'react-bootstrap';
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
      <div className="buttons">
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
    'Guardian', 'Light', 'Darkness', 'Ghost', 'Traveler', 'Last City', 'Tower', 'Vanguard', 'Crucible',
    'Gunsmith', 'Raid', 'Strike', 'Nightfall', 'Exotic', 'Legendary', 'Rare', 'Common', 'Epic', 'Artifact',
    'Power', 'Light Level', 'Darkness Level', 'Hunter', 'Warlock', 'Titan', 'Fusion Rifle', 'Auto Rifle',
    'Hand Cannon', 'Pulse Rifle', 'Scout Rifle', 'Sidearm', 'Shotgun', 'Sniper Rifle', 'Submachine Gun',
    'Linear Fusion Rifle', 'Trace Rifle', 'Rocket Launcher', 'Grenade Launcher', 'Sword', 'Bow', 'Machine Gun',
    'Heavy Weapon', 'Kinetic Weapon', 'Energy Weapon', 'Primary Weapon', 'Secondary Weapon', 'Power Weapon',
    'Kinetic Ammo', 'Energy Ammo', 'Power Ammo', 'Super', 'Melee', 'Grenade', 'Class Ability', 'Arc', 'Solar',
    'Void', 'Stasis', 'Light Subclass', 'Darkness Subclass', 'Golden Gun', 'Blade Barrage', 'Nova Bomb',
    'Stormtrance', 'Arc Staff', 'Dawnblade', 'Voidwalker', 'Sunsinger', 'Sunbreaker', 'Nightstalker', 'Gunslinger',
    'Arcstrider', 'Warlock Voidwalker', 'Hunter Gunslinger', 'Titan Striker', 'Arcstrider', 'Voidwalker',
    'Stormcaller', 'Gunslinger', 'Striker', 'Sentinel', 'Shadowshot', 'Hammer of Sol', 'Blade Dancer', 'Sunsinger',
    'Defender', 'Nightstalker', 'Stormcaller', 'Sunbreaker', 'Voidwalker', 'Dawnblade', 'Arcstrider', 'Golden Gun'
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
    <div className="whole-container">
      {/* Header */}
      <header>
        <h1>Portfolio</h1>
        <nav>
          <ul>
            <li><button onClick={() => handleSectionChange('home')}>Home</button></li>
            <li><button onClick={() => handleSectionChange('about')}>About</button></li>
            <li><button onClick={() => handleSectionChange('features')}>Features</button></li>
            <li><button onClick={() => handleSectionChange('projects')}>Projects</button></li>
            <li><button onClick={() => handleSectionChange('contact')}>Contact</button></li>
            {/* Add other navigation options */}
          </ul>
        </nav>
      </header>

      {/* Sections */}
      {currentSection === 'home' && (
        <section id="home">
          <div className="header">
            <h1>Welcome to My Portfolio</h1>
            <p>Explore my work and learn more about me.</p>
            <p>There are many cool features on my website showcasing my skills, and more to come</p>
            <p>Like for instance there is a button counter and random word generator below</p>
            <button onClick={incrementButtonCount} style={{backgroundColor: 'green', border: '1px solid green', borderRadius: '5px', color: 'white', marginRight: '10px', marginBottom: '15px'}}>Increase</button>
            <button onClick={decrementButtonCount} style={{backgroundColor: 'red', border: '1px solid red', borderRadius: '5px', color: 'white', marginRight: '10px'}}>Decrease</button>
            <button onClick={multiplyButtonCount} style={{backgroundColor: 'cyan', border: '1px solid cyan', borderRadius: '5px', color: 'black', marginRight: '10px'}}>Multiply by 10</button>
            <button onClick={divideButtonCount} style={{backgroundColor: 'violet', border: '1px solid violet', borderRadius: '5px', color: 'white', marginRight: '10px'}}>Divide by 2</button>
            <p style={{marginTop: '20px'}}>Button Count: {buttonCount}</p>
            <button onClick={generateNewRandomWord} style={{marginTop: '20px'}}>Generate Random Word</button>
            {randomWord && <p style={{marginTop: '10px'}}>Random Word: {randomWord}</p>}
            <p style={{marginTop: '10px'}}>Random Number: {Math.floor(Math.random() * 100)}</p>
          </div>
        </section>
      )}

      {currentSection === 'about' && (
        <section id="about">
          <div className="header">
            <h1>About Me</h1>
            <Link to={'#'}>Hire Me</Link>
          </div>
          <div className="card">
            <img src={Picture} alt="Logo" />
            <div className="info">
              <h1>Jay Miller</h1>
              <p>
                I am a full stack developer with front-end and back-end experiences.
                A few skills I have are:
                <ul>
                  <li>1. HTML</li>
                  <li>2. CSS</li>
                  <li>3. Javascript</li>
                  <li>4. React</li>
                  <li>5. SQL</li>
                  <li>6. Django</li>
                  <li>7. Djangorestframework</li>
                  <li>8. REST API</li>
                  <li>9. JSON</li>
                  <li>10. Bootstrap</li>
                  <li>11. Git</li>
                  <li>12. GitHub</li>
                  <li>13. Communication</li>
                  <li>14. Problem Solving</li>
                  <li>15. Python</li>
                </ul>
              </p>
            </div>
          </div>
        </section>
      )}

      {currentSection === 'features' && (
        <section id="features">
          <div className="header">
            <h1>Features</h1>
            <Link to="#">See More</Link>
          </div>
          <div className="feature-cards">
            <div className="card">
              <div className="info">
                <h1>Calculator</h1>
                <Calculator />
              </div>
            </div>
            <div className="card">
              <div className="info">
                <i className='bx bxs-devices'></i>
                <p>
                  Explore a diverse collection of my creative endeavors, including web design, JavaScript, and mini projects. Each project showcases my creativity, attention to detail, and passion for delivering visually stunning and engaging experiences.
                </p>
              </div>
            </div>
            {/* Add other feature cards */}
          </div>
        </section>
      )}

      {currentSection === 'projects' && (
        <section id="projects">
          <div className="header">
            <h1>Projects</h1>
            <Link to="#">View All Projects</Link>
          </div>
          <div className="project-cards">
            <iframe title="Project 1" src="https://jaymiller2002.github.io/Tic-Tac-Toe/">
            </iframe>
            <iframe title="Project 2" src="https://jaymiller2002.github.io/weather-app-JS-Only/">           
            </iframe>
            <iframe title="Project 3" src="https://image-gallery-slider-react.vercel.app/">            
            </iframe>
            <iframe title="Project 4" src="https://to-do-list-mauve-gamma-70.vercel.app/">             
            </iframe>
            <iframe title="Project 5" src="https://jaymiller2002.github.io/random-resturant/">             
            </iframe>
            <iframe title="Project 6" src="https://jaymiller2002.github.io/New-BlogPost-React-Only/"> 
            </iframe>
          </div>
          <div className="projects-links">
          <Link to="https://jaymiller2002.github.io/Tic-Tac-Toe/">Tic-Tac-Toe</Link>
          <Link to="https://jaymiller2002.github.io/weather-app-JS-Only/">Weather App</Link>
          <Link to="https://image-gallery-slider-react.vercel.app/">Image Gallery Slider</Link>
          <Link to="https://to-do-list-mauve-gamma-70.vercel.app/">To Do List</Link>
          <Link to="https://jaymiller2002.github.io/random-resturant/">Random Resturant</Link>
          <Link to="https://jaymiller2002.github.io/New-BlogPost-React-Only/">My Blog</Link>
          </div>
        </section>
      )}

      {currentSection === 'contact' && (
        <section id="contact">
          <div className="header-contact">
            <h2>Contact Me Below</h2>
          </div>
          <div className="contact-card" style={{ textIndent: 10 }}>
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
          <div className='contact-arrows'>
            <i className='fa-solid fa-arrow-down'></i>
            <i className='fa-solid fa-arrow-down'></i>
            <i className='fa-solid fa-arrow-down'></i>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer>
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



