import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import DialogItem from '../dialog/Dialogs';
import classes from '../Messages.module.css'
import Message from './Message';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/formsControls';
import { maxLengthF,required } from '../../validators/validator';
const MessageTitle = (props) => {
   return <div className={classes.center}><div><img src={props.photo} alt={props.name} className={classes.img__message}></img></div>Messages</div>
}


const Messages = (props) => {//add classes
   let state = props.messages;
   let dialogElements = state.arr.map((el) => { return <DialogItem name={el.name} id={el.id} photo={el.photo} /> })
   let messageArr = state.messagesData.map((el) => { return <Message text={el.message} id={el.id} photo={dialogElements[el.idM].props.photo} /> })
   let addMessage = (values) => {
      props.sendMessage(values.message)
   }

   return (

      <div className={classes.dialogs}>
         <div className={classes.dialogs__messages}>
            <div className={classes.message_div}>
               <MessageTitle photo={messageArr[0].props.photo} />
               {messageArr}
            </div>
            <div className={classes.messageForm}>
               <FormMessageRedux onSubmit={addMessage} />
            </div>
         </div>
         <div className={classes.dialogs__names}>
            <div>Dialogs</div>
            {dialogElements}
         </div>
      </div>
   )
}
let maxLength50=maxLengthF(50);
const FormMessage = (props) => {
   return (
      <form className={classes.dialogs__message_area} onSubmit={props.handleSubmit}>

         <div className={classes.new}>
            <Field placeholder='Your message' name='message' component={Textarea} validate={[required,maxLength50]} /></div>
         <button>Send</button>
      </form>
   )
}
const FormMessageRedux = reduxForm({ form: 'Addmessages' })(FormMessage)
export default Messages