import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import rootReducers from './modules/rootReducers';
import persistedReducers from './persistedReducers';

const store = configureStore({
  reducer: persistedReducers(rootReducers),
});

const persistor = persistStore(store);

export { store, persistor };
