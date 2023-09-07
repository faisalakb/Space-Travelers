import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getRockets } from './redux/rockets/rocketSlice';
import NavBar from './component/NavBar';
import Mission from './component/Missions/Mission';
import Rocket from './component/Rockets/Rocket';
import MyProfile from './component/MyProfile/MyProfile';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  });
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
