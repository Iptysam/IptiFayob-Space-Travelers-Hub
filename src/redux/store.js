import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './mission/mission.redux';

export default configureStore({
  reducer: {
    mission: missionReducer,
  },
});
