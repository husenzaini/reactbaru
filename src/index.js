import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Product from './component/content/Product'
import store from './redux/store'
import 'bootstrap/dist/css/bootstrap.min.css';


const AppWithRouter = () => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} /> {/* localhost:3000/ */}
      <Route path="/product" component={Product} /> 
    </Router>
  </Provider>
  );

ReactDOM.render(<AppWithRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
