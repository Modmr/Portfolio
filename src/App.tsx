import * as React from 'react';
import './App.css';


import { HashRouter, NavLink, Route } from 'react-router-dom';
import Contact from './Contact';

import Home from './Home';


import Projecten from './Projecten';



class App extends React.Component {
  
  public render() {
    return (
      <HashRouter>
      
      <div className="App">
        <header className="App-header">

        <link href='https://fonts.googleapis.com/css?family=Roboto:bold' rel='stylesheet'/>
        <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'/>
        

          <h1 className="App-title">Hogeschool Rotterdam</h1>
          <h1 className="App-title">Informatica</h1>          
          <h1 className="App-title-name">Muhammet Demir</h1>
          {/* <button  className="App-header-button">Projecten</button>
          <button className="App-header-button">Contact</button> */}
          <NavLink className="App-header-button" to="/">Home</NavLink>    
          <NavLink className="App-header-button" to="/Projecten">Projecten</NavLink>
          <NavLink className="App-header-button" to="/Contact">Contact</NavLink>          
                    

          <div className="content">
          <Route exact={true} path="/" component={Home}/>
          <Route path="/Projecten" component={Projecten}/>          
          <Route path="/Contact" component={Contact}/>
          

          </div>                          
        </header>
          
        
        </div>
        </HashRouter>
    );
  }
}



export default App;
