import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRockets } from './redux/rockets/rockets';
import { fetchThunk } from './redux/missions/missions';
import Nav from './components/NavBar/Nav';
import Mission from './components/pages/Mission';
import Rockets from './components/pages/Rockets';
import Profile from './components/pages/Profile';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
    dispatch(fetchThunk());
  }, []);

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
