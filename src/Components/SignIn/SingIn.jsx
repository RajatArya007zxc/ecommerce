import React, { Component } from 'react'

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
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                     <label>EMAIL</label>

                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                    <label>PASSWORD</label>


                    <input type="submit" value="Submit Form" />
                </form>
            </div>
        )
    }
}
