import React, { Component } from 'react';
import CenteredGrid from './components/Grid'
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router >
            <Switch>
                {/* <Route exact component={} /> */}
                {/* <Route path="library" component={MediaGalleryPage} /> */}
            </Switch>
          </Router>
          </header>
      </div>
    );
  }
}

export default App;
