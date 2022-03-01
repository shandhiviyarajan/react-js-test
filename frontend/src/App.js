import * as React from 'react';
import { Provider } from 'react-redux';
import store from './core/redux/store';
import Home from './components/pages/Home';
import { ReactNotifications } from 'react-notifications-component';

function App () {
  return (
    <Provider store={store}>
      <ReactNotifications/>
      <Home/>
    </Provider>
  );
}

export default App;
