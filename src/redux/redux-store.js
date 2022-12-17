
import { combineReducers, createStore} from "redux";
import profileReducer from './profileReducer';
import { messageReducer } from './MessageReduser';
import sideBarReducer from './sideBar';
import usersReducer from "./UsersReducer";


let reducers =combineReducers({
   profilePage:profileReducer,
   dialogsPage:messageReducer,
  sideBar:sideBarReducer,
  usersPage:usersReducer
})
let store=createStore(reducers)
window.store=store
export default store;


