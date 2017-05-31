import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { applyRouterMiddleware, Router, Route, hashHistory, IndexRedirect, Redirect } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import reducers from './reducers';
import { updateUser } from './actions';
import { fromJS, Map } from 'immutable';
import appMiddleware from './middleware.js';
import * as Phoenix from 'phoenix';
import initMiddlewareEvents from './middleware_events/index.js';
import { updateUser, updateState } from 'actions/index.js';


const mobile_hash = (() => {
  let result = [];
  for(let k = 0; k < 32; k++)
    result.push(
      Math.ceil(Math.random() * 2) == 2 ?
        (Math.random() * 0xf).toString(16)[0].toUpperCase() :
        (Math.random() * 0xf).toString(16)[0].toLowerCase()
    );
  return result.join('');
})();
const socket = new Phoenix.Socket("wss://apiteam.ru/socket/websocket/websocket", { params: { token: "123" } });
socket.connect();
const channel = socket.channel('iodb', {});
channel.join().receive("ok", data => {
}).receive("error", data => {
  console.error(data);
});
initMiddlewareEvents(channel, mobile_hash);
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
