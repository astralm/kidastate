import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import settings from './settings';
import app from './app.js';

const reducers = {
  routing: routerReducer,
  settings,
  app
};

module.exports = combineReducers(reducers);
