import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Homepage/HomePage.components';
import ShopComponent from './Pages/ShopData/ShopComponent';




function App() {


  return (
    <div >
     {/* <HomePage/> */}
     <Switch >
      <Route  exact path="/" component={HomePage}/>
      <Route  path="/shop" component={ShopComponent} />
     </Switch>

    </div>
  );
}

export default App;
