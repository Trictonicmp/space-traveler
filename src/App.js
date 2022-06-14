import { Routes, Route } from 'react-router-dom';
import Nav from './components/NavBar/Nav';
import Mission from './components/pages/Mission';
import Rocket from './components/pages/Rocket';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Rocket />} />
        <Route path='/mission' element={<Mission />} />
      </Routes>
    </>
  );
}

export default App;
