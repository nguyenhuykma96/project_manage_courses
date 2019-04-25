import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// redux
import { createStore, applyMiddleware, compose } from 'redux';
import appReducer from './store/reducers/index';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);
// khoi tạo kho lưu trữ dữ iệu  với  reducer tổng là rootReducers quản lí các reducers con 
const store = createStore(appReducer,enhancer);


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
document.getElementById('root'));

serviceWorker.unregister();
