import React, { Component } from 'react';
import ItemList from './containers/ItemList/ItemList';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route path="/" exact render={() => <ItemList apiPath={'topstories'} itemType={'topstories'} /> } />
            <Route path="/news" exact render={() => <ItemList apiPath={'topstories'} itemType={'topstories'} /> } />
            <Route path="/newest" exact render={() => <ItemList apiPath={'newstories'} itemType={'newstories'} /> } />
            <Route path="/ask" exact render={() => <ItemList apiPath={'askstories'} itemType={'askstories'} /> }  />
            <Route path="/show" exact render={() => <ItemList apiPath={'showstories'} itemType={'showstories'} /> } />
            <Route path="/jobs" exact render={() => <ItemList apiPath={'jobstories'} itemType={'jobstories'} /> } />
            <Route path="/newcomments" exact render={() => <ItemList apiPath={'updates'} itemType={'comments'} /> } />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
