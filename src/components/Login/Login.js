import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/formsControls';
import { required } from '../validators/validator';
import { LoginThunkCreator } from '../../redux/authReducer'


const LoginForm = (props) => {//п.2 вызовется хэндлсабмит, в котором вызовится то, что пришло ниже в п.3

   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field placeholder='email' name='email' component={Input} validate={[required]}></Field>
         </div>
         <div>
            <Field placeholder='password' name='password' type='password'component={Input} validate={[required]}></Field>
         </div>
         <div>
            <Field placeholder='name' name='name' component={Input} validate={[required]}></Field>
         </div>
         <div>
            <Field type={'checkbox'} name='rememberMe' component={Input}  validate={[required]}/>Remember me
         </div>
         <div>
            <button>Login</button>
         </div>

      </form>
   )
}
const Formredux=reduxForm({form:'login'})(LoginForm)
let Login=(props)=>{
   let onSubmit=(formData)=>{
      props.LoginThunkCreator(formData)
      if(props.isAuth){
         return <Navigate to={'/profile'}/>}
   }
      if(props.isAuth){
      return <Navigate to={'/profile'}/>}
   
  return(
      
      <div>
         
         <h1>Login
         </h1>
         <Formredux onSubmit={(onSubmit)} />
     
      </div>
   )
}
let mapStateToProps=(state)=>{//по идее для регистрации
return{isAuth:state.auth.isAuth}
}

export default connect(mapStateToProps, {LoginThunkCreator})(Login)

