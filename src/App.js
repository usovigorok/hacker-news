import React, { Component } from 'react';
import ArticleList from './containers/ItemList/ItemList';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route path="/" exact render={() => <ArticleList apiPath={'news'} /> } />
            <Route path="/news" exact render={() => <ArticleList apiPath={'news'} /> } />
            <Route path="/newest" exact render={() => <ArticleList apiPath={'newest'} /> } />
            <Route path="/ask" exact render={() => <ArticleList apiPath={'ask'} /> } />
            <Route path="/show" exact render={() => <ArticleList apiPath={'show'} /> } />
            <Route path="/jobs" exact render={() => <ArticleList apiPath={'jobs'} /> } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
