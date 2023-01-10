import React, { useState } from 'react';
import pC from './Profile.module.css'
import photo from './../../img/rick.jpg'
import { addFrase } from './../../redux/profileReducer';
import { useEffect } from 'react';
export let photoProfile = photo

export const ProfileStatuswithHooks=(props)=>{
console.log(props)
let [editMode, setEditMode]=useState(false)
let [status, setStatus]=useState(props.status)
useEffect(()=>{

   setStatus(props.status)
},[props.status])
const activateMode=()=>{
   setEditMode(true)
}
const deactivateEditMode=()=>{
   setEditMode(false)
   props.updateStatus(status)
}
const onSatusChange=(e)=>{
   setStatus(e.currentTarget.value)
   console.log(e.currentTarget.value)
}

      return (<div>
         { !editMode&& <h2 onClick={activateMode}  >{props.status||'No status' }</h2>}
         {editMode && <div><textarea onBlur={deactivateEditMode} onChange={onSatusChange}value={status} autoFocus={true}   className={pC.textArea}></textarea></div>}
      </div>)
   
}
export default ProfileStatuswithHooks