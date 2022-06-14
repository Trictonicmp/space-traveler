import { Routes, Route } from 'react-router-dom';
import Nav from './components/NavBar/Nav';
import Mission from './components/pages/Mission';
import Rockets from './components/pages/Rockets';
import Profile from './components/pages/Profile';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
