import React from 'react';
import { addMessageActionCreater, updTextMessageActionCreater } from '../../../redux/MessageReduser';
import DialogItem from '../dialog/Dialogs';
import classes from '../Messages.module.css'
import Message from './Message';

const MessageTitle = (props) => {

   return <div className={classes.center}><div><img src={props.photo} alt={props.name} className={classes.img__message}></img></div>Messages</div>
}


const Messages = (props) => {//add classes
   console.log('messages', props)
   let textMessage = React.createRef()

   let createMessage = () => {
      props.dispatch(addMessageActionCreater())
   }

   let onMessageChange=()=>{
      let text = textMessage.current.value;
      let action=updTextMessageActionCreater(text)
      props.dispatch(action) 
   //   props.updMessage(text)
      
   }

   let dialogElements = props.messages.arr.map((el) => { return <DialogItem name={el.name} id={el.id} photo={el.photo} /> })
   let messageArr = props.messages.messagesData.map((el) => { return <Message text={el.message} id={el.id} photo={dialogElements[el.idM].props.photo} updMessage={props.updMessage}/> })

   return (
      <div className={classes.dialogs}>
         <div className={classes.dialogs__messages}>
            <MessageTitle photo={messageArr[0].props.photo} />
            {messageArr}

            <div className={classes.new}>New message
               <textarea ref={textMessage} onChange={onMessageChange}/></div>
            <div onClick={createMessage} >Send</div>
         </div>
         <div className={classes.dialogs__names}>
            <div>Dialogs</div>
            {dialogElements}
         </div>
      </div>
   )
}
export default Messages