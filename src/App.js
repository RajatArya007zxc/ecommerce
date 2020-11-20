import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import Headercompoent from './Components/Header/Headercompoent';
import { auth,createUserProfileDocument } from './firebase/firebase.utilse';
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

    this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{
       
       if(userAuth){
           const userRef=await createUserProfileDocument(userAuth);

           userRef.onSnapshot(snapShot=>{
               this.setState({
                   currentUser:{
                       id:snapShot.id,
                       ...snapShot.data()
                   }
               })
               console.log(this.state )
           })
          
       }
      
           this.setState({currentUser:userAuth})
       
        /*
        // this.setState({currentUser:user})
         //console.log(user)
         createUserProfileDocument(user)
    */
        })
}
 
componentWillUnmount(){
    this.unsubscribeFromAuth();
}

    render() {
        return (
            <div >
            {/* <HomePage/> */}
           {/* <Headercompoent  currentUser={this.state.currentUser}/> */}
            <Headercompoent />
            <Switch >
             <Route  exact path="/" component={HomePage}/>
             <Route  path="/shop" component={ShopComponent} />
             <Route  path="/signin" component={inOut} />
            </Switch>
       
           </div>
        )
    }
}









