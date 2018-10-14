import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Calendar from "./components/Calendar";
import reducers from "./redux/reducers";
import { loadState, saveState } from "./redux/localStorage";

const persistedStore = loadState();

const store = createStore(reducers, persistedStore);

store.subscribe(() => {
  saveState(store.getState());
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Calendar />
      </Provider>
    );
  }
}

export default App;
