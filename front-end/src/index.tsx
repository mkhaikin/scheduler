import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import { store } from './store';
import UserStore from '../src/store/userstore/userstore';

interface State {
  userstore: UserStore,
}
const userstore = new UserStore();
export const Context = createContext<State>({
  userstore
})

ReactDOM.render(
  <Context.Provider value={ {userstore} }>
    <Provider store={store}>
      <App />
    </Provider>
    </Context.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
