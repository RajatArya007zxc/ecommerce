import {combineReducers } from 'redux';
import UserReducer from './userReducer/UserReducer'



export default combineReducers({
    user:UserReducer
})