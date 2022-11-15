import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';

export const allMissions = createAsyncThunk('mission/allMissions', async (_, thunk) => {
  try {
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(thunk.rejectWithValue(error.response));
    return thunk.rejectWithValue(error.response.data);
  }
});

const MissionSlice = createSlice({
  name: 'mission',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(allMissions.fulfilled, (state, action) => action.payload);
  },
});

export default MissionSlice.reducer;
