import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Components/Navbar';
import Content from './Components/Content';
import Footer from './Components/Footer';
import './index.css';


function Test(){
  return(
    <>
    <Navbar/>
    <Content/>
    <Footer/>
    </>
  )
}


ReactDOM.render(<Test/>,document.getElementById('root'));

