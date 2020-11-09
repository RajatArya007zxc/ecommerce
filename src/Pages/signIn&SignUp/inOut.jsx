import React from 'react'
import SingIn from '../../Components/SignIn/SingIn';
import './style.scss';
import SignUp from '../../Components/signup/SignUp'

export default function inOut() {
    return (
        <div className="sign-in-and-sign-up">
            <SingIn/>
            <SignUp/>
        </div>
    )
}
