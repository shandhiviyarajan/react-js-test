import * as React from 'react';
import { Provider } from 'react-redux';
import store from './core/redux/store';
import Home from './components/pages/Home';

function App () {
  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  );
}

export default App;
