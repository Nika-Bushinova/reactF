import React from 'react';
import pC from './Profile.module.css'
import ProfileInfo from './Profile__info';
import PostsContainer from './posts/postsContainer';
export let nameProfile = 'Rick Sanchez'

function Profile(props) {
   console.log('profile', props)
   return (
  
      <main className={pC.wrapper__content}>
         <div className={pC.main__bg}> </div>
         <ProfileInfo profile={props.props} />
         <PostsContainer />
      </main>
   )
}

export default Profile