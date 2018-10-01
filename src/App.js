import React, { Component } from 'react';
import './App.css';
import ArticleList from './containers/ArticleList';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ArticleList />
      </div>
    );
  }
}

export default App;
