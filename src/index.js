import React from 'react'
import ReactDOM from 'react-dom'
import routes from './router/index.js'
import { Router, Route, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import store from './store'
import 'antd/dist/antd.css'

class Root extends React.Component {
  constructor () {
    super()
    this.descRoute = this.descRoute.bind(this)
  }

  descRoute (routes) {
    return routes.map((route, index) => {
      if (route.child) {
        return <Route exact={ route.exact ? route.exact : false } path={ route.path } component={ route.component } key={ index }>
          { this.descRoute(route.child) }
        </Route>
      } else {
        return <Route exact={ route.exact ? route.exact : false } path={ route.path } component={ route.component } key={ index }></Route>
      }
    })
  }

  render () {
    return (
      <Provider store={ store }>
        <Router history={ hashHistory }>{ this.descRoute(routes) }</Router>
      </Provider>
    )
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
