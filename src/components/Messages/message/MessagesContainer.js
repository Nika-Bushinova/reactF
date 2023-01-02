import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreater, updTextMessageActionCreater } from '../../../redux/MessageReduser';
import Messages from './Messages';
import { Navigate } from "react-router-dom";
import { withAuthRedirect } from '../../../HOC/AuthRedirect';
/* const MessagesContainer = (props) => {//add classes
   console.log('messagesCont', props)
  
   return (
      <StoreContext.Consumer>
         {(store)=>{
            let createMessage = () => {
               store.dispatch(addMessageActionCreater())
            }
            let onMessageChange = (text) => {
               store.dispatch(updTextMessageActionCreater(text))
            }
            return <Messages updTextMessageBody={onMessageChange} sendMessage={createMessage} messages={store._state.dialogsPage} />
         }
      
}</StoreContext.Consumer>
   )
} */
let mapStateToProps=(state)=>{
   return{
      state:state,
      messages:state.dialogsPage,

   }
}


let mapDispatchToProps=(dispatch)=>{

   return{
      sendMessage:()=>{
         dispatch(addMessageActionCreater())
      },
      updTextMessageBody:(text)=>{
         dispatch(updTextMessageActionCreater(text))
      }
   
   }
}
;
let AuthRedirectComponent = withAuthRedirect(Messages);
export default connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent )
