import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
} from 'react-router'

import './assets/stylesheets/_all.scss'

import Root from './containers/root'
import HomePage from './views/homepage'

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Root}>
        <IndexRoute component={HomePage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
