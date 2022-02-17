import React, {Component} from 'react';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';

import {Provider} from 'react-redux';
import store  from "./store";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
 
function App() {
  return (
    <div className="App">
     <AppNavbar />
     <ShoppingList/>
    </div>
  );
}
 
export default App;
