import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missionSlice/Mission';
import rocketsReducer from './rockets/rocketSlice';

const store = configureStore({
  reducer: {
    missionSlice: missionReducer,
    rockets: rocketsReducer,
  },
});

export default store;
