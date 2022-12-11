import { combineReducers, legacy_createStore } from "redux";
import profileReducer from './profileReducer';
import { messageReducer } from './MessageReduser';
import sideBarReducer from './sideBar';


let reducers =combineReducers({
   profileReducer:profileReducer,
   messageReducer:messageReducer,
   sideBarReducer:sideBarReducer
})
let store=legacy_createStore(reducers)
export default store;


