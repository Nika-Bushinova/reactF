import React from 'react';
import pC from './Profile.module.css'
import Posts from './posts/posts';
import ProfileInfo from './Profile__info';
export let nameProfile = 'Rick Sanchez'

function Profile(props) {
   console.log('profile',props)
   return (
      <main className={pC.wrapper__content}>
         <div className={pC.main__bg}> </div>
         <ProfileInfo />
         <Posts posts={props.profilePage.arrLikes} dispatch={props.dispatch} addLike={props.addLike}/* addPostF={props.addPostF}  */ newText={props.profilePage.newText} /* updNewPostText={props.updNewPostText} *//>
      </main>
   )
}

export default Profile