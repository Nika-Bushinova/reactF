import React from 'react';
import pC from './Profile.module.css'
import photo from './../../img/rick.jpg'
import { nameProfile } from './Profile';
export let photoProfile = photo
const ProfileInfo = (props) => {
   console.log('info', props)
   return (<div className={pC.main__info}>
      <div className={pC.info__img}><img src={photo} alt='photo'></img></div>
      <div className={pC.text}>
         <ul><h1>{nameProfile}</h1></ul>
         <li><b>Species</b>: Human (Cyborg)</li>
         <li><b>Age</b>: 70</li>
         <li><b>Statuse</b>: alive</li>
         <li><b>Occupation</b>: Scientist Inventor Resistance fighter, Arms dealer, Store owner, Leader of The Council of Ricks</li>
         <li><b>Place of origin</b>: Earth (Dimension C-137)</li>
      </div>
   </div>)
}
export default ProfileInfo