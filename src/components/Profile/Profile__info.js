import React from 'react';
import pC from './Profile.module.css'
import photo from './../../img/rick.jpg'
import Preloader from '../common/Preloader/Preloader';
export let photoProfile = photo
const ProfileInfo = (props) => {
   console.log('info1', props)
   if(!props.profile){
      return (<Preloader/>)
   } 
   return (<div className={pC.main__info}>
      <div className={pC.info__img}><img src={props.profile.photos.large} alt='photo'></img></div>
      <div className={pC.text}>
         <ul><h1>{props.profile.fullName}</h1></ul>
         <li><b>About me</b>: {props.profile.aboutMe}</li>
         <li><b>Contacts</b>: <ul>
            <li><i>Facebook</i>: {props.profile.contacts.facebook}</li>
            <li><i>Personal website</i>: {props.profile.contacts.website}</li>
            <li><i>VK</i>: {props.profile.contacts.vk}</li>
            <li><i>Twitter</i>: {props.profile.contacts.twitter}</li>
            <li><i>Instagram</i>: {props.profile.contacts.instagram}</li>
            <li><i>YouTube</i>: {props.profile.contacts.youtube}</li>
            <li><i>GitHub</i>: {props.profile.contacts.github}</li>
            <li><i>MainLink</i>: {props.profile.contacts.mainLink}</li>
            </ul></li>
         <li><b>Looking For a Job</b>: {props.profile.lookingForAJob?'Yes':'No'}</li>
         {/* <li><b>Occupation</b>: Scientist Inventor Resistance fighter, Arms dealer, Store owner, Leader of The Council of Ricks</li>
         <li><b>Place of origin</b>: Earth (Dimension C-137)</li> */}
      </div>
   </div>)
}
export default ProfileInfo