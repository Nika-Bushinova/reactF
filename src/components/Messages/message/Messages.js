import React from 'react';
import classes from '../Messages.module.css'
import DialogItem from '../dialog/Dialogs';
import { messagesData } from '../../..';
import { arr } from './../../../index';
const Message = (props) => {
   return (
      <div className={classes.message}>{props.text}</div>
   )
}
const MessageTitle = (props) => {
   return <div><img src={props.photo} alt={props.name}></img>Messages</div>
}
const NewMessage=()=>{
   return (
   <div className={classes.new}>New message<textarea></textarea></div>)
}
const Messages = (props) => {//add classes
   let messageArr=messagesData.map((el)=>{return <Message text={el.message} />})
   let dialogElements =arr.map((el)=>{return <DialogItem name={el.name1} id={el.id} photo={el.photo1} />})
   return (
      <div className={classes.dialogs}>
         <div className={classes.dialogs__messages}>
            <MessageTitle />
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