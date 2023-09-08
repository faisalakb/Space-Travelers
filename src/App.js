import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { getRockets } from './redux/rockets/rocketSlice';
import DisplayContent from './component/Missions/DisplayContent';
import NavBar from './component/NavBar';
import Rocket from './component/Rockets/RocketDisplay';
import MyProfile from './component/MyProfile/MyProfile';
import { fetchMission } from './redux/missionSlice/Mission';
import './App.css';
import './component/Missions/Mission.module.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchMission());
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="Mission" element={<DisplayContent />} />
        <Route path="MyProfile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
