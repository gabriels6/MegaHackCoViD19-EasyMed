import React , { useState, useEffect} from 'react';
import './App.css';
import api from './services/api';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link
 } from "react-router-dom";
import MainPage from './components/MainPage/index.js'
import CadastroReceita from './components/CadastroReceita/index'

function App() {
 
  

  return (
    <div className="App">
      
        <Router>
        <div className = "TopBar">
        <Link to = "/"><button>Início</button></Link>
        <Link to = "/Historico"><button id = "focused">Histórico de prescrições</button></Link>
        <Link to = "/Prontuarios"><button>Prontuários</button></Link>
        <span id = "ProfileIcon">JS</span>

            <span>
            <i className="material-icons">
            settings
            </i>
            </span>
          </div>
       <Switch>
       <Route path = "/CadastroReceita">
      
         <CadastroReceita/>
        </Route>
        <Route path="/Historico">

            <MainPage/>
            
        </Route>
        
        </Switch> 
        </Router>
        
        
    </div>
  );
}

export default App;
