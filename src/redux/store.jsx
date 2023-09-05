import { configureStore } from '@reduxjs/toolkit';
import missionReducer from '../component/Missions/Mission';

const store = configureStore({
  reducer: {
    missionSlice: missionReducer,
  },
});

export default store;
