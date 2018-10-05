import React, { Component } from 'react';
import ArticleList from './containers/ArticleList/ArticleList';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route path="/" exact render={() => <ArticleList apiPath={'topstories'} /> } />
            <Route path="/news" exact render={() => <ArticleList apiPath={'topstories'} /> } />
            <Route path="/newest" exact render={() => <ArticleList apiPath={'newstories'} /> } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
