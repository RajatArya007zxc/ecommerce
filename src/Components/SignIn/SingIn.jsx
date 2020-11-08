import React, { Component } from 'react'
import Button from '../CustomButton/Button';
import FormInput from '../FormInput/FormInput';
import './style.scss'
export default class SingIn extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          email: '',
          password: ''
        };
      }
handleSubmit=(event)=>{
    event.preventDefault();
     
this.setState({email:'',password:''})
}

handleChange=event=>{
    const{value,name} =event.target;

    this.setState({[name]:value})   
}
    render() {
        return (
            <div className="sign-in">

                <h2> I already have an account</h2>
                <span>Sign in with your email and password</span>
                

                {/* Form  */}

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" label="email" name="email" value={this.state.email} handleChange={this.handleChange} required />
                 

                    <FormInput type="password" label="password" name="password" value={this.state.password} handleChange={this.handleChange} required />
                    


                    <Button type="submit" >Sign In</Button>
                </form>
            </div>
        )
    }
}
