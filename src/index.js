import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import Product from './component/content/Product'
import store from './redux/store'
import Login from './component/content/Login'
import Register from './component/content/Register'
import 'bootstrap/dist/css/bootstrap.min.css';


const AppWithRouter = () => (
  <Provider store={store}>
    <Router>
      <Route path="/main" component={App} /> {/* localhost:3000/ */}
      {/* <Route path="/product" component={Product} />  */}
      <Route path="/" exact component={Login} />
      <Route path="/register" component={Register} />
    </Router>
  </Provider>
  );

ReactDOM.render(<AppWithRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
