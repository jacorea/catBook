import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import cats from './store/cats.data';
import Cats from './pages/Cats.component';
import NewCat from './pages/NewCat.component';
import Header from './components/Header/header.component.jsx';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cats: cats
    }
  }
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/cats" render={(props)=> <Cats cats={this.state.cats}/> } />
            <Route exact path="/" component={NewCat} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;