import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

const API = 'https://api.spacexdata.com/v3/rockets';

export const getRocketAPI = createAsyncThunk(
  'rockets/getRockets',
  async () => {
    const resp = await axios.get(API);
    return resp.data;
  },
);

const RocketSlicer = createSlice({
  name: 'Rockets',
  initialState,
  reducers: {
    reserveRocket: {
      reducer: (state, action) => state.map((item) => (
        item.rocketId === action.payload ? { ...item, rocketReserved: true } : item
      )),
      prepare: (rocketId) => ({
        payload: rocketId,
      }),
    },
    cancelRocket: {
      reducer: (state, action) => state.map((item) => (
        item.rocketId === action.payload ? { ...item, reserveRocket: false } : item
      )),
      prepare: (rocketId) => ({
        payload: rocketId,
      }),
    },
  },

  extraReducers: {
    [getRocketAPI.fulfilled]: (state, action) => {
      const rockets = action.payload.map((item) => ({
        rocketId: item.rocket_id,
        rocketName: item.rocket_name,
        rocketDesc: item.description,
        rocketImage: item.flickr_images[0],
        rocketWiki: item.wikipedia,
      }));
      return rockets;
    },
  },
});

export const { reserveRocket, cancelRocket } = RocketSlicer.actions;

export default RocketSlicer.reducer;
