import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Calendar from "./components/Calendar";
import reducers from "./redux/reducers";

const store = createStore(reducers);

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
