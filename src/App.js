import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './redux/store';
import DisplayContent from './component/Missions/DisplayContent';
import NavBar from './component/NavBar';
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
            <Route path="Mission" element={<DisplayContent />} />
            <Route path="MyProfile" element={<MyProfile />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
