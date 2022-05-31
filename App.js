import React from 'react';
import GameBoard from "./src/components/GameBoard/GameBoard"
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import thunk from "redux-thunk"

const App = () => {

  const store = createStore(reducers, compose(applyMiddleware(thunk)))

  return (
    <Provider store={store}>
      <GameBoard />
    </Provider>
  );
};

export default App;