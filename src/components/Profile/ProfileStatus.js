import React from 'react';
import pC from './Profile.module.css'
import photo from './../../img/rick.jpg'
import { addFrase } from './../../redux/profileReducer';
export let photoProfile = photo

class ProfileStatus extends React.Component {
   newPostElement=React.createRef()
   state = {//локальный стейт
      editMode: false,
      status:this.props.status
   }
   activateEditMode=()=>{
       this.setState({
         editMode:true
      }) 
   }
   deactivateEditMode=()=>{
      this.setState({
        editMode:false
     }) 
     this.props.updateStatus(this.state.status)
  }
  onStatusChange=(e)=>{
this.setState({
   status:e.currentTarget.value
})

   //let text=this.newPostElement.current.value;
  // this.props.addFrase(text)

}

componentDidUpdate(prevProps, prevState){
if(prevProps.status!==this.props.status)
this.setState({
   status:this.props.status
})
}

componentWillUnmount(){
}
   render() {
      return (<div>
         {!this.state.editMode && <h2 onClick={this.activateEditMode}>{this.props.status||'No status'}</h2>}
         {this.state.editMode && <div><textarea onBlur ={this.deactivateEditMode} value={this.state.status} autoFocus={true}  onChange={this.onStatusChange} className={pC.input}></textarea></div>}
      </div>)
   }
}
export default ProfileStatus