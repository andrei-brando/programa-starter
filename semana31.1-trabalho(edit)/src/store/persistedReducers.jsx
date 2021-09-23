/* eslint-disable import/no-anonymous-default-export */
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'counter-example',
      storage,
      whitelist: ['counter', 'cards'],
    },
    reducers
  );

  return persistedReducers;
};
