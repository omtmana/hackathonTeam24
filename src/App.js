import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Contact from './components/Contact';
import Home from './components/Home';
import Questions from './components/Questions';
import AvailableHousing from './components/AvailableHousing';
import { Nav, Navbar, Container } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">HouseHaven</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/questions">Questions</Nav.Link>
              <Nav.Link href="/availableHousing">Housing</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/availableHousing" element={<AvailableHousing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
