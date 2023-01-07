import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { LoginAPI } from './../../API/APIJS';
import {LoginThunkCreator, setNameLogin} from './LoginReducer'

const LoginForm = (props) => {//п.2 вызовется хэндлсабмит, в котором вызовится то, что пришло ниже в п.3
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field placeholder='email' name='email' component={'input'}></Field>
         </div>
         <div>
            <Field placeholder='password' name='password' component={'input'}></Field>
         </div>
         <div>
            <Field placeholder='name' name='name' component={'input'}></Field>
         </div>
         <div>
            <Field type={'checkbox'} name='rememberMe' component={'input'} />Remember me
         </div>
         <div>
            <button>Login</button>
         </div>

      </form>
   )
}
const Formredux=reduxForm({form:'login'})(LoginForm)
class Login extends React.Component{
   componentDidMount=()=>{
      let formData=this.props.formData
      this.props.LoginThunkCreator(formData)
   }
   render=()=>(
      <div>
         <h1>Login
         </h1>
         <Formredux onSubmit={(this.props.LoginThunkCreator)} /* setEmailLogin={this.setEmailLogin} setNameLogin={this.setNameLogin} *//>
      </div>
   )
}
let mapStateToProps=(state)=>{//по идее для регистрации

}

export default connect(null, {LoginThunkCreator})(Login)

