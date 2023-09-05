import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import DisplayContent from './component/DisplayContent';
import './App.css';
import './component/Missions/Mission.module.css';

function App() {
  return (
    <>
      <Provider store={store}>
        <DisplayContent />
      </Provider>
    </>
  );
}

export default App;
