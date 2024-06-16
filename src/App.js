import photo from './Photo.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={photo} className="Portfolio-photo" alt="photo" />
      <h2>
        Hi, I'm <span>Artur Ter-Baghdasarov</span>, Front-End Developer
      </h2>
      <p>
        If you're a business owner ready to initiate a web development
        project with a freelance web developer or a developer seeking to
        collaborate on an exciting project, feel free to reach out to me.
        Let's team up and work together!
      </p>
    </div>
  );
}

export default App;