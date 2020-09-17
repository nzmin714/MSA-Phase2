import React, { useState } from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import MediaGrid from './components/mediagrid/mediagrid';
import SearchBar from './components/searchbar/searchbar';


interface IUserInput {
  SearchQuery: (string | undefined);
  SearchType: (string | undefined);
}

function App() {

  const [UserInput, setUserInput] = useState<IUserInput>({
    SearchQuery: "",
    SearchType: "movie"
  });

  function SetUserInput(a: IUserInput) {
    setUserInput(a);    
  }
  

  return (
    <div className="App">
      <Header />
        <header className="App-header">

          <p>Please show</p>
          <SearchBar SetUserInput={(a: IUserInput) => SetUserInput(a)}/>
          <MediaGrid SearchQuery={UserInput.SearchQuery} SearchType={UserInput.SearchType} />
        

        </header>
      <Footer />
    </div>
    
  );
}

export default App;
