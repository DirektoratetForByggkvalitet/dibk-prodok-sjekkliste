/* globals window */

import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { state } from 'losen';
import { persistStore, autoRehydrate } from 'redux-persist';

import schema from './api/prodok-sjekkliste.json';
import handleDeeplink from './helpers/handle-deeplink';

/**
 * Create the store with middleware
 */
const store = createStore(
	combineReducers({ [state.NAME]: state.reducer(schema) }),
	undefined,
	compose(
		autoRehydrate(),
		applyMiddleware(handleDeeplink),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);

persistStore(store);

export default store;
