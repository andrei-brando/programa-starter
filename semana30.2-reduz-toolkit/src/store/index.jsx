import { createStore } from 'redux';
import { persistStore } from 'redux-persist';

import rootReducers from './modules/rootReducers';
import persistedReducers from './persistedReducers';

const store = createStore(persistedReducers(rootReducers));
const persistor = persistStore(store);

export { store, persistor };
