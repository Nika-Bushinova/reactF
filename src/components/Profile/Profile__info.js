import React from 'react';
import pC from './Profile.module.css'
import photo from './../../img/rick.jpg'
import Preloader from '../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus'
import { addFrase } from '../../redux/profileReducer';
export let photoProfile = photo
const ProfileInfo = (props) => {
   if(!props.profile){
      return (<Preloader/>)
   } 
   return (<div className={pC.main__info}>
      <div className={pC.info__img}><img src={props.profile.photos.large} alt='Photo'></img></div>
      <div className={pC.text}>
         <ul><h1>{props.profile.fullName}</h1>
         <ProfileStatus status={props.statusFrase} addFrase={props.addFrase} updateStatus={props.updateStatus}/>
         </ul>
         <li><b>About me</b>: {props.profile.aboutMe}</li>
         <li><b>Contacts</b>: <ul>
            <li> <b>{!props.profile.contacts.facebook!=null?props.profile.contacts.facebook:`Facebook:   ${props.profile.contacts.facebook}`}</b></li>
            <li><b>{!props.profile.contacts.website?props.profile.contacts.website:`Personal website:   ${props.profile.contacts.website}`}</b></li>
            <li><b>{!props.profile.contacts.vk?props.profile.contacts.vk:`VK: ${props.profile.contacts.vk}`}</b></li>
            <li><b>{!props.profile.contacts.twitter?props.profile.contacts.twitter:`Twitter:   ${props.profile.contacts.twitter}`}</b></li>
            <li><b>{!props.profile.contacts.instagram?props.profile.contacts.instagram:`Instagram:   ${props.profile.contacts.instagram}`}</b></li>
            <li><b>{!props.profile.contacts.youtube?props.profile.contacts.youtube:`YouTube:   ${props.profile.contacts.youtube}`}</b></li>
            <li><b>{!props.profile.contacts.github?props.profile.contacts.github:`GitHub:   ${props.profile.contacts.github}`}</b></li>
            <li><b>{!props.profile.contacts.mainLink?props.profile.contacts.mainLink:`MainLink:   ${props.profile.contacts.mainLink}`}</b></li>
            </ul></li>
         <li><b>Looking For a Job</b>: {props.profile.lookingForAJob?'Yes':'No'}</li>
         {/* <li><b>Occupation</b>: Scientist Inventor Resistance fighter, Arms dealer, Store owner, Leader of The Council of Ricks</li>
         <li><b>Place of origin</b>: Earth (Dimension C-137)</li> */}
      </div>
   </div>)
}
export default ProfileInfo