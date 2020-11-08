import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import Headercompoent from './Components/Header/Headercompoent';
import { auth } from './firebase/firebase.utilse';
import HomePage from './Pages/Homepage/HomePage.components';
import ShopComponent from './Pages/ShopData/ShopComponent';
import inOut from './Pages/signIn&SignUp/inOut';





export default class App extends React.Component {
 
    constructor(){
        super()
        this.state={
            currentUser:null
        }
    }
unsubscribeFromAuth=null;

componentDidMount(){

    this.unsubscribeFromAuth= auth.onAuthStateChanged(user=>{
         this.setState({currentUser:user})
         console.log(user)
     })
}
 
componentWillUnmount(){
    this.unsubscribeFromAuth();
}

    render() {
        return (
            <div >
            {/* <HomePage/> */}
            <Headercompoent  currentUser={this.state.currentUser}/>
            <Switch >
             <Route  exact path="/" component={HomePage}/>
             <Route  path="/shop" component={ShopComponent} />
             <Route  path="/signin" component={inOut} />
            </Switch>
       
           </div>
        )
    }
}









