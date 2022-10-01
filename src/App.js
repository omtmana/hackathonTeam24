import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <nav className='nav'>
          <Link to='/'> Home </Link>
          <Link to='/contact'> Contact </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
