import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import Api from '../../../services/Api';

const http = new Api();

const teamAdapter = createEntityAdapter({
  selectId: (team) => team.id,
});

export const getTeams = createAsyncThunk(
  'teams/getAll',
  async (competitionId, thunkAPI) => {
    const { teams: teamsData } = await http.getTeams(competitionId);
    return teamsData;
  }
);

export const { selectAll } = teamAdapter.getSelectors((state) => state.teams);

const slice = createSlice({
  name: 'teams',
  initialState: teamAdapter.getInitialState(),
  reducers: {
    add: teamAdapter.addOne,
    addMany: teamAdapter.addMany,
    update: teamAdapter.setOne,
    remove: teamAdapter.removeOne,
  },
  extraReducers: {
    [getTeams.fulfilled]: (state, { payload }) => {
      state = payload;
    },
  },
});

export default slice.reducer;
export const { add, addMany, update, remove } = slice.actions;
