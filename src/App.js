import React, { Component, Fragment } from 'react';
import Menu from './components/Common/Menu'
import Main from './components/Common/Main'
class App extends Component {
  render() {
      return (
      <Fragment>
        <Menu />
        <Main />
      </Fragment>
      );
  }
}

export default App;
