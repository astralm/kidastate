import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { applyRouterMiddleware, Router, Route, hashHistory, IndexRedirect, Redirect } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import reducers from './reducers';
import { fromJS, Map } from 'immutable';
import appMiddleware from './middleware.js';
import * as Phoenix from 'phoenix';
import initMiddlewareEvents from './middleware_events/index.js';
import { updateUser, updateState } from './actions';

const mobile_hash = (() => {
  let result = [];
  for (let k = 0; k < 32; k++){
    let rand = Math.ceil(Math.random() * 2),
        symbol = (Math.random() * 0xFFF).toString(16)[0];
    result.push(rand == 2 ? symbol.toUpperCase() : symbol.toLowerCase());
  }
  return result.join('');
})();
const socket = new Phoenix.Socket("wss://apiteam.ru/socket/websocket/websocket", { params: { token: mobile_hash } });
socket.connect();
const channel = socket.channel('iosql', {});
channel.join().receive("ok", data => {
}).receive("error", data => {
  console.error(data);
});
const middleware = routerMiddleware(hashHistory);
const store = createStore(
  reducers,
  applyMiddleware(middleware, appMiddleware(channel))
);

store.subscribe(() => {
  localStorage.setItem('state', JSON.stringify(store.getState().app.toJS()));
});

if(localStorage.state)
  store.dispatch(updateState(localStorage.state));
store.dispatch(updateUser({mobile_hash}));

initMiddlewareEvents(channel, mobile_hash, store);

const history = syncHistoryWithStore(hashHistory, store);

function scrollToTop() {
  window.scrollTo(0, 0);
}

const rootRoute = {
  childRoutes: [{
    path: '/',
    component: require('./containers/App'),
    indexRoute: { onEnter: (nextState, replace) => replace('/app') },
    childRoutes: [
      require('./routes/app'),
      require('./routes/404'),
      require('./routes/500'),
      require('./routes/confirmEmail'),
      require('./routes/forgotPassword'),
      require('./routes/login'),
      require('./routes/fullscreen'),
      {
        path: '*',
        indexRoute: { onEnter: (nextState, replace) => replace('/404') },
      }
    ]
  }]
};

render(
  <Provider store={store}>
    <Router
      onUpdate={scrollToTop}
      history={history}
      routes={rootRoute}
        />
  </Provider>,
  document.getElementById('app-container')
);
