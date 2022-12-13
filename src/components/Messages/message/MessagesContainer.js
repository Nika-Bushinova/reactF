import React from 'react';
import { addMessageActionCreater, updTextMessageActionCreater } from '../../../redux/MessageReduser';
import Messages from './Messages';
const MessagesContainer = (props) => {//add classes
   console.log('messagesCont', props)
   let createMessage = () => {
      props.dispatch(addMessageActionCreater())
   }
   let onMessageChange = (text) => {
      props.dispatch(updTextMessageActionCreater(text))
   }
   return (
      <Messages updTextMessageBody={onMessageChange} sendMessage={createMessage} messages={props.store._state.dialogsPage} />
   )
}
export default MessagesContainer