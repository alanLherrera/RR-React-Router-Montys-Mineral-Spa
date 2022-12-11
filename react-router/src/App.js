import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import './App.css';

import Home from './components/Home'
import About from './components/About'
import Packages from './components/Packages'


function App() {

  const packages = ['Activate your Crystals', 'Monkey Meditation', 'Soak in the Hotsprings', 'Hypnotherapy', 'Mineral Bath']

  return (
    <div className="App">
      <Router>
      <header>
        <h1 className="title">Welcome to Monty's Mineral SPA</h1>

        <div className="navBar">
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <link to='/about'>About Us</link>
            </li>
            <li>
              <link to='/packages'>Our Packages</link>
            </li>
          </ul>
        </div>

      </header>
      <div classname="display">
        <Routes>
          <Route path="/" element={<Home />}
        </Routes>

      </div>
      </Router>
    </div>
  );
}

export default App;





