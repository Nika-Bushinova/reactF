import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreater, updTextMessageActionCreater } from '../../../redux/MessageReduser';
import Messages from './Messages';
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
      messages:state.dialogsPage
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
const MessagesContainer = connect(mapStateToProps,mapDispatchToProps)(Messages)
export default MessagesContainer