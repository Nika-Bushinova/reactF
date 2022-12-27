
import { combineReducers, createStore} from "redux";
import profileReducer from './profileReducer';
import { messageReducer } from './MessageReduser';
import sideBarReducer from './sideBar';
import usersReducer from "./UsersReducer";
import authReducer from "./authReducer";


let reducers =combineReducers({
   profilePage:profileReducer,
   dialogsPage:messageReducer,
  sideBar:sideBarReducer,
  usersPage:usersReducer,
  auth:authReducer
})
let store=createStore(reducers)
window.store=store
export default store;


