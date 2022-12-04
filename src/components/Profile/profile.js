import React from 'react';
import pC from './Profile.module.css'
import Posts from './posts/posts';
import ProfileInfo from './Profile__info';
export let nameProfile = 'Rick Sanchez'

function Profile(props) {

   return (
      <main className={pC.wrapper__content}>
         <div className={pC.main__bg}> </div>
         <ProfileInfo />
         <Posts posts={props.arrLikes.arrLikes}/>
      </main>
   )
}

export default Profile