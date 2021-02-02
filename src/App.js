import React, { Component } from 'react';
import './App.css';
import jeopardy from './components/jeopardy/Jeopardy';
import Welcome from './components/welcome/Welcome';
import Clock from './components/clock/Clock'
import Contact from './components/contact/contact';
import Navigation from "./components/navigation/Navigation";
import NoMatch from './components/NoMatch/NoMatch';
import { Route, Switch } from 'react-router-dom';
import Jeopardy from './components/jeopardy/Jeopardy';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Welcome {...props} name='Gaytri' />}
          />
          <Route path="/clock" component={Clock} />
          <Route path="/contact" component={Contact} />
          <Route path="/welcome/:name" Component={Welcome} />
          <Route path="/jeopardy" component={Jeopardy} />
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>

    );
  }
}
export default App;