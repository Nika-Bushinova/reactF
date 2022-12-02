import React from 'react';
import pC from'./Profile.module.css'
import Posts from './posts/posts';
let nameProfile='Rick Sanchez'
function Profile(){
   return(
      <main className={pC.wrapper__content}>
<div className={pC.main__bg}> </div>
<div className={pC.main__info}>
  <div className={pC.info__img}></div>
  <div className={pC.text}>
   <ul><h1>{nameProfile}</h1></ul> 
    <li><b>Species</b>: Human (Cyborg)</li>
    <li><b>Age</b>: 70</li>
    <li><b>Statuse</b>: alive</li>
    <li><b>Occupation</b>: Scientist Inventor Resistance fighter (formerly) Arms dealer[1] Store owner (briefly)[2] Leader of The Council of Ricks (formerly)</li>
    <li><b>Place of origin</b>: Earth (Dimension C-137)</li>
  </div>
</div>
<Posts />
</main>
   )
}
export default Profile