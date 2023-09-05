import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import DisplayContent from './component/DisplayContent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './component/NavBar';
import Mission from './component/Missions/Mission';
import Rocket from './component/Rockets/Rocket';
import MyProfile from './component/MyProfile/MyProfile';
import './App.css';
import './component/Missions/Mission.module.css';

function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Rocket />} />
          <Route path="Mission" element={<Mission />} />
          <Route path="MyProfile" element={<MyProfile />} />
        </Routes>
      </BrowserRouter>
  </Provider>
  </div>
  );
}

export default App;
