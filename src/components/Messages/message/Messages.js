import React from 'react';
import DialogItem from '../dialog/Dialogs';
import classes from '../Messages.module.css'
import Message from './Message';

const MessageTitle = (props) => {
 
   return <div className={classes.center}><div><img src={props.photo} alt={props.name} className={classes.img__message}></img></div>Messages</div>
}
const NewMessage=()=>{
   return (
   <div className={classes.new}>New message<textarea></textarea></div>)
}
const Messages = (props) => {//add classes
  
let dialogElements = props.messagesData.arr.map((el) => { return <DialogItem name={el.name} id={el.id} photo={el.photo} /> })
let messageArr = props.messagesData.messagesData.map((el) => { return <Message text={el.message} id={el.id} photo={dialogElements[el.id].props.photo}/> })
   return (
      <div className={classes.dialogs}>
         <div className={classes.dialogs__messages}>
            <MessageTitle photo={messageArr[0].props.photo} />
          {messageArr}
           <NewMessage/>
         </div>
         <div className={classes.dialogs__names}>
            <div>Dialogs</div>
            {dialogElements}
         </div>
      </div>
   )
}
export default Messages