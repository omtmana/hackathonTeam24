import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Contact from './components/Contact';
import Home from './components/Home';
import Questions from './components/Questions';
import AvailableHousing from './components/AvailableHousing';

function App() {
  return (
    <div className="App">
      <Router>
        <nav className='nav'>
          <Link to='/'> Home </Link>
          <Link to='/contact'> Contact </Link>
          <Link to='/questions'> Questions </Link>
          <Link to='/availableHousing'> Housing </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/contact' element={<Contact />} />
          <Route path='/questions' element={<Questions />}/>
          <Route path='/availableHousing' element={<AvailableHousing />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
