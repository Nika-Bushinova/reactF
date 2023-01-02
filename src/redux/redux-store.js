

import profileReducer from './profileReducer';
import { messageReducer } from './MessageReduser';
import sideBarReducer from './sideBar';
import usersReducer from "./UsersReducer";
import authReducer from "./authReducer";
import { configureStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import  thunkMiddleware  from "redux-thunk";
import loginReducer from "../components/Login/LoginReducer";

let reducers =combineReducers({
   profilePage:profileReducer,
   dialogsPage:messageReducer,
  sideBar:sideBarReducer,
  usersPage:usersReducer,
  auth:authReducer,
  login:loginReducer
})

let store = configureStore(
  {reducer:reducers},
  applyMiddleware(thunkMiddleware),
);
window.store=store
export default store;


