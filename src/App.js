import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import SearchBar from './components/SearchBar';
import {FiSearch}  from "react-icons/fi";
import './App.css';


const App=()=> {
  return (
    <div className="App">
     <Header/>
     <Home>
     <SearchBar></SearchBar>
     </Home>
    </div>
  );
}

export default App;
