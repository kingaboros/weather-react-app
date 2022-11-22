import React from 'react';

import Credentials from './components/Credentials/Credentials';
import Search from './components/Search/Search';

import Header from './components/Header/Header';
import SearchResult from './components/Weather/SearchResult';
import Forecast from './components/Weather/Forecast';

import './App.scss';

const App = () => {
  return (
    <div className="appContainer">
      <header>
        <Header />
        <Search />
        <SearchResult />
        <Forecast />
      </header>
      <footer>
        <Credentials />
      </footer>
    </div>
  );
};

export default App;
