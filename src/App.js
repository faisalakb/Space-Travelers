import './App.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './component/NavBar';
import Mission from './component/Missions/Mission';
import Rocket from './component/Rockets/Rocket';
import MyProfile from './component/MyProfile/MyProfile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Rocket />} />
          <Route path="Mission" element={<Mission />} />
          <Route path="MyProfile" element={<MyProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
