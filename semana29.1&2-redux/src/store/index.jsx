import { persistStore } from 'redux-persist';
import { createStore } from 'redux';

import persistedReducers from './persistedReducers';
import rootReducer from './modules/rootReducer';

const store = createStore(persistedReducers(rootReducer));
const persistor = persistStore(store);

export { store, persistor };
