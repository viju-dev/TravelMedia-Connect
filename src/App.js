import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import SearchBar from './components/SearchBar';
import ProductDetail from './components/ProductDetail';
import {FiSearch,FiArrowLeftCircle,FiArrowLeft}  from "react-icons/fi";
import { Routes,Route } from 'react-router-dom';
import './App.css';


const App=()=> {

  let [selectPost,setSelectPost] = useState({});

  useEffect(
    () => {
      console.log(selectPost,setSelectPost);
    },[]
)
  
  return (
    <div className="App">
      <Header/>
     <Routes>
      <Route path='' element={<Home setSelectPost={setSelectPost} selectPost={selectPost}><h3 className="title">Social Media For Travellers</h3><SearchBar/></Home>}/>
      <Route path='/home' element={<Home setSelectPost={setSelectPost} selectPost={selectPost}><h3 className="title">Social Media For Travellers</h3><SearchBar/></Home>}/>
      <Route path={`/item/${selectPost.id}`} element={<Home setSelectPost={setSelectPost}><ProductDetail/><h3 className="title">{<div className='iconContainer'><FiArrowLeft/></div>}Post Number #{selectPost}</h3></Home>}/>
     </Routes>
    </div>
  );
}

export default App;

{/* <Header/>
     <Home>
     <SearchBar></SearchBar>
     </Home> */}