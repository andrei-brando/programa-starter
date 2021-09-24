import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const cardAdapter = createEntityAdapter({
  selectId: (card) => card.id,
});

export const { selectAll, selectIds } = cardAdapter.getSelectors(
  (state) => state.cards
);

const slice = createSlice({
  name: 'cards',
  initialState: cardAdapter.getInitialState(),
  reducers: {
    saveCard: cardAdapter.setOne,
    removeCard: cardAdapter.removeOne,
  },
});

export default slice.reducer;
export const { saveCard, removeCard } = slice.actions;
