import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import Headercompoent from './Components/Header/Headercompoent';
import HomePage from './Pages/Homepage/HomePage.components';
import ShopComponent from './Pages/ShopData/ShopComponent';
import inOut from './Pages/signIn&SignUp/inOut';




function App() {


  return (
    <div >
     {/* <HomePage/> */}
     <Headercompoent/>
     <Switch >
      <Route  exact path="/" component={HomePage}/>
      <Route  path="/shop" component={ShopComponent} />
      <Route  path="/signin" component={inOut} />
     </Switch>

    </div>
  );
}

export default App;
