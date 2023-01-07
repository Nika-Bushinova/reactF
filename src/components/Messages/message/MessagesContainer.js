import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreater} from '../../../redux/MessageReduser';
import Messages from './Messages';
import { Navigate } from "react-router-dom";
import { withAuthRedirect } from '../../../HOC/AuthRedirect';
import { compose } from 'redux';
let mapStateToProps=(state)=>{
   return{
      state:state,
      messages:state.dialogsPage,

   }
}
let mapDispatchToProps=(dispatch)=>{

   return{
      sendMessage:(message)=>{
         dispatch(addMessageActionCreater(message))
      }
   
   }
}



export default compose(
   connect(mapStateToProps,mapDispatchToProps),
   withAuthRedirect
   )(Messages)
