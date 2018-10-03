import React, { Component } from 'react';
import ArticleList from './containers/ArticleList';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <ArticleList />
      </div>
    );
  }
}

export default App;
