import React from 'react';
import City from './Component/City'
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Search from './Component/Search';
import NavBar from './Component/NavBar/NavBar';
import './App.css';

let App = () => {
  
  return (
    <Router>
      <NavBar></NavBar>
      <main>
        <Switch>
          <Route path = '/'exact>
              <div className = "App">
                <City> </City>  
              </div> 
            </Route> 
            <Route path = '/search'exact >
              <Search> </Search> 
            </Route> 
            <Redirect to = '/' />
        </Switch>
      </main>
    
      
    </Router>
  );
}

export default App;
