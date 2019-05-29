import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import rootReducer from '../reducers/rootReducer';
import fbConfig from '../config/firebase-variables';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase })),
    reactReduxFirebase(fbConfig, { attachAuthIsReady: true }),
  ),
);
export default store;
