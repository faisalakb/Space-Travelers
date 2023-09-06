import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NavBar from './component/NavBar';
import Mission from './component/DisplayContent';
import Rocket from './component/Rockets/Rocket';
import MyProfile from './component/MyProfile/MyProfile';
import { fetchMission } from './component/Missions/Mission';
import './App.css';
import './component/Missions/Mission.module.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMission());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="Mission" element={<Mission />} />
        <Route path="MyProfile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
