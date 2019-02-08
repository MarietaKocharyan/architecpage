import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import CenteredGrid from './components/Grid'
import Artsof from './components/Arts/index'
import SimpleCard from './components/Goal/index'
 
class App extends Component {
  render() {
      return (
        <div>
          <CenteredGrid />
          <Router>
            <Switch>
              <Route exact component={SimpleCard} /> 
              <Route path="/arts" component={Artsof} />
              {/* <Route path="/" component={} />
              <Route path="/" component={} />
              <Route path="/" component={} /> */}
            </Switch>
          </Router>
          </div>
      );
  }
}

export default App;
