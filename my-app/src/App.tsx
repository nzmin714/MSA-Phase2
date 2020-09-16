import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import MediaGrid from './components/mediagrid/mediagrid';
import SearchBar from './components/searchbar/searchbar';


interface IUserInput {
  SearchQuery: (string |undefined );
  SearchType: (string| undefined);
}

function App() {

  return (
    <div className="App">
      <Header />
        <header className="App-header">

         <MediaGrid />

        </header>
      <Footer />
    </div>
    
  );
}

export default App;
