import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivacyPolicy from './components/PrivacyPolicy';
import Team from './components/Team';
import Contact from './components/contact';
import Event from './components/Event';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/policy" element={<PrivacyPolicy/>} />
          <Route exact path="/team" element={<Team/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/event" element={<Event/>} />
          {/* <Route exact path="/visitpagelarge/:id" element={<VisitPageLarge />} /> */}
          {/* <Route exact path="/visitpagesmall/:id" element={<VisitPageSmall />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;