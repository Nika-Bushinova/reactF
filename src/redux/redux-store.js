
import { applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from './profileReducer';
import { messageReducer } from './MessageReduser';
import sideBarReducer from './sideBar';
import usersReducer from "./UsersReducer";
import authReducer from "./authReducer";
import  thunkMiddleware  from "redux-thunk";

let reducers =combineReducers({
   profilePage:profileReducer,
   dialogsPage:messageReducer,
  sideBar:sideBarReducer,
  usersPage:usersReducer,
  auth:authReducer
})
let store=createStore(reducers, applyMiddleware(thunkMiddleware))
window.store=store
export default store;


