import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './mission/mission.redux';
import rocketsReducer from './rockets/rockets';

export default configureStore({
  reducer: {
    mission: missionReducer,
    rocket: rocketsReducer,
  },
});
