import React from 'react';
import { addMessageActionCreater, updTextMessageActionCreater } from '../../../redux/MessageReduser';
import StoreContext from '../../../StoreContext';
import Messages from './Messages';
const MessagesContainer = (props) => {//add classes
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
}
export default MessagesContainer